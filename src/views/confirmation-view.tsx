"use client";

import {
  Box,
  Typography,
  Paper,
  Divider,
  Button,
  Grid,
  Container,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { formatCurrency } from "@/lib/currency";
import { useCart } from "@/context/CartProvider";
import { useProduct } from "@/context/ProductProvider";
import Link from "next/link";
import { useState } from "react";

export function ConfirmationView() {
  const { totalPrice, clearCart } = useCart();
  const { products } = useProduct();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const orderId = localStorage.getItem("orderId");
  const paymentDetails = JSON.parse(
    localStorage.getItem("paymentDetails") || "{}"
  );

  const currentCart = JSON.parse(localStorage.getItem("currentCart") || "{}");

  const cartItems = Object.entries(currentCart).map(
    ([productId, quantity]): {
      productId: number;
      productName: string;
      productImage: string;
      productPrice: number;
      quantity: number;
    } => {
      const product = products.find((p) => p.productId === Number(productId));
      return {
        productId: Number(productId),
        productName: product?.productName || "Unknown Product",
        productImage: product?.productImage || "",
        productPrice: product?.productPrice || 0,
        quantity: Number(quantity),
      };
    }
  );

  const handleContinue = () => {
    clearCart();
    localStorage.removeItem("currentCart");
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", mt: 18, mb: 6, mx: 2 }}
    >
      <Paper elevation={3} sx={{ p: 4, maxWidth: 680, width: "100%" }}>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", borderBottom: "1px dotted black" }}
        >
          Confirmation
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          <br /> Order Number: <strong>{orderId}</strong>
        </Typography>

        <Divider sx={{ borderStyle: "dotted", my: 2 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Product Details
          </Typography>
          <Container>
            {cartItems.map((item) => (
              <Box key={item.productId} sx={{ my: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    alignItems: "center",
                    border: "1px solid #e0e0e0",
                    padding: 2,
                    borderRadius: 2,
                  }}
                >
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: 5,
                    }}
                  />
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Typography variant="body1">{item.productName}</Typography>
                    <Typography variant="body2">
                      {formatCurrency(item.productPrice)} x {item.quantity}
                    </Typography>
                    <Typography variant="h6">
                      {formatCurrency(item.productPrice * item.quantity)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Container>

          <Divider sx={{ borderStyle: "dotted", my: 2 }} />
          <Typography variant="h6" align="right">
            Total Price: <strong>{formatCurrency(totalPrice)}</strong>
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Buyer's Details
        </Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="body1">
            <strong>Name:</strong> {paymentDetails.firstName}{" "}
            {paymentDetails.lastName}
          </Typography>
          <Typography variant="body1">
            <strong>Address:</strong> {paymentDetails.address},{" "}
            {paymentDetails.city}, {paymentDetails.postCode}
          </Typography>
          <Typography variant="body1">
            <strong>Phone:</strong> {paymentDetails.phoneNumber}
          </Typography>
        </Box>
        <Divider sx={{ borderStyle: "dotted", my: 2 }} />

        {isConfirmed && (
          <Typography
            variant="body1"
            sx={{ textAlign: "center", mt: 2, color: "red" }}
          >
            Your order will be processed as soon as possible. Thank you for your
            order!
          </Typography>
        )}
        <Box
          display="flex"
          sx={{ justifyContent: { xs: "center", md: "flex-end" }, mt: 4 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
            }}
          >
            <Link href="/menu" passHref>
              <Button
                variant="contained"
                size="large"
                onClick={handleContinue}
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
                Continue to order
              </Button>
            </Link>

            <Button
              variant="contained"
              size="large"
              onClick={() => setIsConfirmed(true)}
              sx={{
                height: 58,
                backgroundColor: "warning.main",
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
              Confirm order
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
