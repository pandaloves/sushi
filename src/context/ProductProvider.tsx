"use client";

import { IProductProps } from "@/types/product";
import { products as productsData } from "@/utils/products";
import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
  ReactElement,
} from "react";

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
    const fetchProducts = () => {
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const value = { products };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct(): ProductContextType {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
}
