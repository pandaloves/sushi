"use client";

import { useState } from "react";
import { products } from "@/app/_mock"; 

export function useSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [productNotFound, setProductNotFound] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setProductNotFound(false);
  };

  const handleSearchSubmit = () => {
    setSearchQuery(searchTerm);
    handleSearch(searchTerm);
  };

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const foundProduct = products.find((product) =>
      product.name.toLowerCase().includes(lowerCaseQuery)
    );

    if (foundProduct) {
      setProductNotFound(false);

      const productElement = document.getElementById(`product-${foundProduct.id}`);
      if (productElement) {
        productElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    } else {
      setProductNotFound(true);
    }
  };

  return {
    searchTerm,
    searchQuery,
    productNotFound, 
    handleSearchChange,
    handleSearchSubmit,
  };
}
