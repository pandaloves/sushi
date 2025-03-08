"use client";

import { IProductProps } from "@/types/product";
import { baseUrl } from "@/utils/baseUrl";
import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import type { ReactNode, ReactElement } from "react";

type ProductContextType = {
  products: IProductProps[];
};

type ProductProviderProps = {
  children: ReactNode;
};

const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({
  children,
}: ProductProviderProps): ReactElement {
  const [products, setProducts] = useState<IProductProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}/product`);
        setProducts(response.data);
      } catch (error) {
        console.error("API error:", error);
      }
    };

    fetchProducts();
  }, []);

  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export function useProduct(): ProductContextType {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
}
