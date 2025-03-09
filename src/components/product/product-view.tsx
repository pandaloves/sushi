"use client";

import { ProductDetail } from "./product-detail";
import { ProductCart } from "./product-cart";
import { IProductProps } from "@/types/product";
import { ReactElement } from "react";
import { Box, Paper } from "@mui/material";
import { ProductImage } from "./product-image";

type ProductViewProps = {
  productData: IProductProps;
};

export function ProductView({ productData }: ProductViewProps): ReactElement {
  const {
    productId,
    productName,
    productPrice,
    productDescription,
    productImage,
  } = productData;

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      gap={4}
      sx={{
        mt: { xs: 20, md: 22 },
        mb: 8,
        px: { xs: 2, md: 4 },
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "90%", md: "45%" },
          maxWidth: { xs: "100%", sm: 500, md: 580 },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <ProductImage
            src={productImage}
            alt={productName}
            divStyle={{ width: "100%", height: "auto" }}
          />
        </Paper>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        sx={{
          width: { xs: "100%", sm: "90%", md: "45%" },
          maxWidth: { xs: "100%", sm: 500, md: 580 },
        }}
      >
        <ProductDetail
          name={productName}
          price={productPrice}
          description={productDescription}
        />

        <ProductCart id={productId} productData={productData} />
      </Box>
    </Box>
  );
}
