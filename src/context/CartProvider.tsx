"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useProduct } from "./ProductProvider";

type Carts = Record<number, number>;

type CartContextType = {
  totalPrice: number;
  currentCart: Carts;
  cartProducts: number;
  clearCart: () => void;
  addProduct: (productId: number, productQuantity: number) => void;
  deleteProduct: (productId: number) => void;
  handleProductQuantity: (
    productId: number,
    type?: "increment" | "decrement" | number
  ) => (e?: ChangeEvent<HTMLInputElement>) => void;
  handleBuyNow: (productId: number, productQuantity: number) => void;
  addOrder: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [currentCart, setCurrentCart] = useState<Carts>({});
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { products } = useProduct();

  useEffect(() => {
    setIsClient(true);
    const storedCart = JSON.parse(localStorage.getItem("currentCart") || "{}");
    setCurrentCart(storedCart);
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("currentCart", JSON.stringify(currentCart));
    }
  }, [currentCart, isClient]);

  const getTotalCartAmount = () => {
    return Object.entries(currentCart).reduce((total, [id, qty]) => {
      const product = products.find((p) => p.productId === Number(id));
      return total + (product ? product.productPrice * qty : 0);
    }, 0);
  };

  const getTotalCartProducts = () => {
    return Object.values(currentCart).reduce((sum, qty) => sum + qty, 0);
  };

  const addProduct = async (productId: number, productQuantity: number) => {
      setCurrentCart((prev) => ({
        ...prev,
        [productId]: (prev[productId] || 0) + productQuantity,
      }));
  };

  const deleteProduct = async (productId: number) => {
      setCurrentCart((prev) => {
        const updatedCart = { ...prev };
        delete updatedCart[productId];
        return updatedCart;
      });
  };

  const clearCart = async () => {
      setCurrentCart({});
  };

  const handleProductQuantity =
    (productId: number, type?: "increment" | "decrement" | number) =>
    (e?: ChangeEvent<HTMLInputElement>) => {
      setCurrentCart((prev) => {
        const updatedCart = { ...prev };
        if (typeof type === "number") {
          updatedCart[productId] = Math.max(type, 1);
        } else if (type === "increment") {
          updatedCart[productId] = (updatedCart[productId] || 0) + 1;
        } else if (type === "decrement") {
          updatedCart[productId] = Math.max(
            (updatedCart[productId] || 1) - 1,
            1
          );
        } else {
          updatedCart[productId] = parseInt(e?.target.value || "1", 10);
        }
        return updatedCart;
      });
    };

  const handleBuyNow = (productId: number, productQuantity: number) => {
    addProduct(productId, productQuantity);
    router.push("/cart");
  };

  const addOrder = () => {
  const orderId = String(Math.floor(Math.random() * 1000000));

  localStorage.setItem("orderId", orderId);
  router.push("/checkout/payment");
};

  const totalPrice = getTotalCartAmount();
  const cartProducts = getTotalCartProducts();

  return (
    <CartContext.Provider
      value={{
        totalPrice,
        currentCart,
        cartProducts,
        clearCart,
        addProduct,
        deleteProduct,
        handleProductQuantity,
        handleBuyNow,
        addOrder,
      }}
    >
      {isClient && children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
