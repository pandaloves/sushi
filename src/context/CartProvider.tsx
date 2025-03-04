"use client";

import { useContext, createContext, useState, useEffect } from "react";
import type { ReactNode, ChangeEvent, ReactElement } from "react";
import { ICartProps } from "@/types/cart";
import { useWindowSize } from "@/lib/hooks/useWindowSize";

type Carts = ICartProps[];

type CartContext = {
  isMobile: boolean;
  totalPrice: number;
  currentCart: Carts;
  cartProducts: number;
  clearCart: () => void;
  addProduct: (productData: ICartProps) => void;
  deleteProduct: (productId: number) => void;
  handleProductQuantity: (
    productId: number,
    type?: "increment" | "decrement" | number
  ) => (e?: ChangeEvent<HTMLInputElement>) => void;
};

const CartContext = createContext<CartContext | null>(null);

export function useCart(): CartContext {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps): ReactElement {
  const [currentCart, setCurrentCart] = useState<Carts>([]);
  const [isClient, setIsClient] = useState(false);
  const [width] = useWindowSize();

  useEffect(() => {
    setIsClient(true);
    const storedCart = JSON.parse(localStorage.getItem("currentCart") || "[]");
    setCurrentCart(storedCart);
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("currentCart", JSON.stringify(currentCart));
    }
  }, [currentCart, isClient]);

  const addProduct = (productData: ICartProps) => {
    setCurrentCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === productData.id
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === productData.id
            ? { ...item, quantity: item.quantity + productData.quantity }
            : item
        );
      }
      return [...prevCart, { ...productData, quantity: productData.quantity }];
    });
  };

  const deleteProduct = (productId: number) => {
    setCurrentCart((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  };

  const handleProductQuantity =
    (productId: number, type?: "increment" | "decrement" | number) =>
    (e?: ChangeEvent<HTMLInputElement>): void => {
      setCurrentCart((prevCart) =>
        prevCart.map((cartProduct) =>
          cartProduct.id === productId
            ? {
                ...cartProduct,
                quantity: Math.max(
                  type === "increment"
                    ? cartProduct.quantity + 1
                    : type === "decrement"
                    ? cartProduct.quantity - 1
                    : typeof type === "number"
                    ? type
                    : parseInt(e?.target.value || "1", 10),
                  1
                ),
              }
            : cartProduct
        )
      );
    };

  const clearCart = (): void => setCurrentCart([]);

  const [cartProducts, totalPrice] = currentCart.reduce(
    ([products, total], { price, quantity }) => [
      products + quantity,
      total + price * quantity,
    ],
    [0, 0]
  );

  const isMobile = width < 768;

  const value = {
    isMobile,
    totalPrice,
    currentCart,
    cartProducts,
    clearCart,
    addProduct,
    deleteProduct,
    handleProductQuantity,
  };

  return (
    <CartContext.Provider value={value}>
      {isClient && children}
    </CartContext.Provider>
  );
}
