"use client";

import { Box, BoxProps } from "@mui/material";
import { ProductItem } from "../components/ProductItem";
import { useState } from "react";
import { IProductProps } from "@/types/product";

type ProductsViewProps = {
  products: IProductProps[];
  sx?: BoxProps;
};

export function ProductsView({ products, sx }: ProductsViewProps) {
  const [itemQuantities, setItemQuantities] = useState<{
    [key: number]: number;
  }>({});

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 0) return;
    setItemQuantities((prev) => ({ ...prev, [id]: quantity }));
  };

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
