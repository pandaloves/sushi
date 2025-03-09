"use client";

import { useParams } from "next/navigation";
import { ProductView } from "@/components/product/product-view";
import { useProduct } from "@/context/ProductProvider";
import { Typography } from "@mui/material";

export default function Product() {
  const { id } = useParams();
  const { products } = useProduct();
  const productId = Number(id);
  const productData = products.find(
    (product) => product.productId === productId
  );

  return productData ? (
    <ProductView productData={productData} />
  ) : (
    <Typography variant="body1">Product not found</Typography>
  );
}
