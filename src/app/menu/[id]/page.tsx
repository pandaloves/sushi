"use client";

import { useParams } from "next/navigation";
import { ProductView } from "@/components/product/product-view";
import { IProductProps } from "@/types/product";

export default function Product({ params }: { params: { id: number } }) {
  const { id } = useParams();
  const productId = parseInt(id as string, 10);

  const products: IProductProps[] = [
    {
      id: 1,
      name: "Small sushi 8 pieces",
      description:
        "3 salmon, 1 shrimp, 1 avocado, 3 futomaki rolls with chili mayonnaise, eel sauce, sesame seeds, rum and roasted onions",
      price: 115,
      category: "Small",
      image:
        "https://magnificent-pastelito-7497e6.netlify.app/lovable-uploads/cd3922d0-2f97-48d6-8838-23be0cc03a39.png",
      rating: { count: 1, rate: 1 },
      quantity: 1,
    },
    {
      id: 2,
      name: "Medium sushi 11 pieces",
      description:
        "3 salmon, 1 shrimp, 1 avocado, 1 tuna, 1 squid, 4 futomaki rolls with chili mayonnaise, eel sauce, sesame seeds, rum and roasted onions",
      price: 145,
      category: "Medium",
      image:
        "https://magnificent-pastelito-7497e6.netlify.app/lovable-uploads/c190b933-b903-4a1a-aace-58160bd6377d.png",
      rating: { count: 1, rate: 1 },
      quantity: 1,
    },
    {
      id: 3,
      name: "Large sushi 14 pieces",
      description:
        "5 salmon, 1 shrimp, 1 avocado, 1 tuna, 1 hokkigai clam, 1 squid, 4 futomaki rolls with chili mayonnaise, eel sauce, sesame seeds, rum and roasted onions",
      price: 165,
      category: "Large",
      image:
        "https://magnificent-pastelito-7497e6.netlify.app/lovable-uploads/075fadee-2162-464b-a19e-806d77e2a1c8.png",
      rating: { count: 1, rate: 1 },
      quantity: 1,
    },
    {
      id: 4,
      name: "Lightly grilled 8 pieces",
      description:
        "Grilled salmon with chili mayonnaise, eel sauce, sesame seeds and roasted onions",
      price: 150,
      category: "Grilled",
      image:
        "https://magnificent-pastelito-7497e6.netlify.app/lovable-uploads/c39f8201-a418-43af-ba5e-14b18344665b.png",
      rating: { count: 1, rate: 1 },
      quantity: 1,
    },
  ];

  const productData = products.find((product) => product.id === productId);

  return productData ? (
    <ProductView pid={productId} productData={productData} />
  ) : (
    <p>Product not found</p>
  );
}
