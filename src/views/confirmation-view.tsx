"use client";

import {
  Box,
  Typography,
  Paper,
  Divider,
  Button,
  Container,
} from "@mui/material";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { formatCurrency } from "@/lib/currency";
import { useCart } from "@/context/CartProvider";
import { useProduct } from "@/context/ProductProvider";
import { useState } from "react";
import Image from "next/image";

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
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: { xs: 18, sm: 20, md: 22 },
        mb: 6,
        mx: 2,
      }}
    >
      <Paper elevation={3} sx={{ p: 4, maxWidth: 680, width: "100%" }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", borderBottom: "1px dotted black" }}
        >
          Bekräftelse
        </Typography>
        
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          <br /> Ordernummer: <strong>{orderId}</strong>
        </Typography>

        <Divider sx={{ borderStyle: "dotted", my: 2 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Produktinformation
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
                  {item.productImage && (
                    <Image
                      src={item.productImage}
                      alt={item.productName}
                      width={90}
                      height={90}
                      style={{
                        objectFit: "cover",
                        borderRadius: 5,
                      }}
                    />
                  )}
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Typography variant="body1">{item.productName}</Typography>
                    <Typography variant="subtitle1">
                      Pris: {item.productPrice}
                    </Typography>
                    <Typography variant="body2">
                      Antal: {item.quantity}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Container>

          <Typography variant="h6" align="right">
            Totalt pris: <strong>{formatCurrency(totalPrice)}</strong>
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dotted", my: 2 }} />
        <Typography variant="h6" sx={{ mb: 2 }}>
          Kunduppgifter
        </Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="body1">
            <strong>Namn:</strong> {paymentDetails.firstName}{" "}
            {paymentDetails.lastName}
          </Typography>
          <Typography variant="body1">
            <strong>Adress:</strong> {paymentDetails.address},{" "}
            {paymentDetails.city}, {paymentDetails.postCode}
          </Typography>
          <Typography variant="body1">
            <strong>Telefonnummer:</strong> {paymentDetails.phoneNumber}
          </Typography>
        </Box>
        <Divider sx={{ borderStyle: "dotted", my: 2 }} />

        {isConfirmed && (
          <Typography
            variant="body1"
            sx={{ textAlign: "center", mt: 2, color: "red" }}
          >
            Din beställning kommer att behandlas så snart som möjligt. Tack för
            din beställning!
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
            {isConfirmed && (
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
                  Fortsätt beställa
                </Button>
              </Link>
            )}

            {!isConfirmed && (
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  setIsConfirmed(true);
                }}
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
                Bekräfta beställning
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
