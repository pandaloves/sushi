"use client";

import { useParams } from "next/navigation";
import { ProductView } from "@/components/product/product-view";
import { products } from "@/app/_mock";

export default function Product({ params }: { params: { id: number } }) {
  const { id } = useParams();
  const productId = parseInt(id as string, 10);

  const productData = products.find((product) => product.id === productId);

  return productData ? (
    <ProductView pid={productId} productData={productData} />
  ) : (
    <p>Product not found</p>
  );
}
