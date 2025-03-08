"use client";

import "@/app/globals.css";
import { ProductsView } from "@/views/products-view";
import { ShopInfo } from "@/components/ShopInfo";
import { Hero } from "@/components/Hero";
import { SearchInput } from "@/components/SearchInput";
import { Footer } from "@/components/Footer";
import { useSearch } from "@/lib/hooks/useSearch";
import { useProduct } from "@/context/ProductProvider";

export default function Home() {
  const {
    searchTerm,
    handleSearchChange,
    handleSearchSubmit,
    productNotFound,
  } = useSearch();

  const { products } = useProduct();

  return (
    <>
      <Hero />
      <SearchInput
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
        productNotFound={productNotFound}
      />
      <ProductsView
        products={products}
        sx={{
          mt: 16,
          borderTop: "2px solid white",
          borderBottom: "2px solid white",
        }}
      />
      <ShopInfo />
      <Footer />
    </>
  );
}
