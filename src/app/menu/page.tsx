"use client";

import { SearchInput } from "@/components/SearchInput";
import { useProduct } from "@/context/ProductProvider";
import { useSearch } from "@/lib/hooks/useSearch";
import { ProductsView } from "@/views/products-view";
import { Box } from "@mui/material";

export default function MenuPage() {
  const {
    searchTerm,
    handleSearchChange,
    handleSearchSubmit,
    productNotFound,
  } = useSearch();

  const { products } = useProduct();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <SearchInput
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
        productNotFound={productNotFound}
        sx={{ mt: 25 }}
      />

      <ProductsView
        products={products}
        sx={{ mt: 5, borderTop: "2px solid white" }}
      />
    </Box>
  );
}
