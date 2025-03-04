"use client";

import { ProductDetail } from "./product-detail";
import { ProductCart } from "./product-cart";
import { IProductProps } from "@/types/product";
import { useCart } from "@/context/CartProvider";
import { ReactElement } from "react";
import { Box, Button, Paper } from "@mui/material";
import { ProductImage } from "./product-image";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

type ProductViewProps = {
  pid: number;
  productData: IProductProps;
};

export function ProductView({
  pid,
  productData,
}: ProductViewProps): ReactElement {
  const { isMobile } = useCart();
  const { id, name, price, description, category, image } = productData;

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="center"
      gap={4}
      sx={{ mt: 16, mb: 5 }}
    >
      <Box sx={{ maxWidth: 580 }}>
        <Paper
          elevation={3}
          sx={{ p: 2, display: "flex", justifyContent: "center" }}
        >
          <ProductImage
            src={image}
            alt={name}
            divStyle={{ width: "100%", height: "auto" }}
          />
        </Paper>
      </Box>

      <Box display="flex" flexDirection="column" gap={3}>
        <ProductDetail
          name={name}
          price={price}
          category={category}
          description={description}
        />

        <ProductCart id={id} isMobile={isMobile} productData={productData} />

        <Box display="flex" justifyContent="flex-end" sx={{ mt: "auto" }}>
          <Link href="/cart" passHref>
            <Button
              variant="contained"
              size="large"
              sx={{
                height: 58,
                backgroundColor: "primary.main",
                color: "common.white",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                },
              }}
            >
              <ArrowBackIosIcon />
              Return to Cart
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
