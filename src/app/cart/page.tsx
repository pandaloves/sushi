"use client";

import { useState, useEffect, ReactElement } from "react";
import { useCart } from "../../context/CartProvider";
import { CartView } from "@/views/cart-view";

export default function Cart(): ReactElement {
  const { cartProducts, currentCart, totalPrice, clearCart } = useCart();

  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    setTotalProducts(cartProducts);
  }, [cartProducts]);

  const cartLength = Object.keys(currentCart).length;

  return (
    <CartView
      currentCart={currentCart}
      totalPrice={totalPrice}
      clearCart={clearCart}
      totalProducts={totalProducts}
      cartLength={cartLength}
    />
  );
}
