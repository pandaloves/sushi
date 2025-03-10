"use client";

import { Box, BoxProps } from "@mui/material";
import { ProductItem } from "../components/ProductItem";
import { useState, useEffect } from "react";
import { IProductProps } from "@/types/product";
import { CircularProgress } from "@mui/material";

type ProductsViewProps = {
  products: IProductProps[];
  sx?: BoxProps;
};

export function ProductsView({ products, sx }: ProductsViewProps) {
  const [itemQuantities, setItemQuantities] = useState<{
    [key: number]: number;
  }>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 0) return;
    setItemQuantities((prev) => ({ ...prev, [id]: quantity }));
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px",
          backgroundColor: "#000",
          ...sx,
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        pt: { xs: 16, md: 12 },
        mb: 6,
        backgroundColor: "#000",
        ...sx,
      }}
    >
      {products.map((product, index) => (
        <Box key={product.productId} id={`product-${product.productId}`}>
          <ProductItem
            product={product}
            quantity={itemQuantities[product.productId] || 0}
            handleQuantityChange={handleQuantityChange}
            isLast={index === products.length - 1}
          />
        </Box>
      ))}
    </Box>
  );
}
