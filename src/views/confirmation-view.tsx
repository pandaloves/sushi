"use client";

import { Box, Typography, Paper, Divider, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export function ConfirmationView() {
  const product = {
    name: "Small sushi 8 pieces",
    price: 115,
    quantity: 2,
    image:
      "https://magnificent-pastelito-7497e6.netlify.app/lovable-uploads/cd3922d0-2f97-48d6-8838-23be0cc03a39.png",
  };

  const payer = {
    fullName: "John Doe",
    address: "123 Street, Stockholm, Sweden",
    phone: "070-1230-1230",
  };

  const totalPrice = product.price * product.quantity;

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
          <br /> Order Number: <strong>#12345</strong>
        </Typography>

        <Divider sx={{ borderStyle: "dotted", my: 2 }} />

        <Typography variant="h6" sx={{ mb: 2 }}>
          Product Details
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Image
            src={product.image}
            alt={product.name}
            width={100}
            height={100}
            style={{ borderRadius: 8, marginRight: 28 }}
          />
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="body1">
              <strong>{product.name}</strong>
            </Typography>
            <Typography variant="body2">
              Price: SEK {product.price.toFixed(2)}
            </Typography>
            <Typography variant="body2">
              Quantity: {product.quantity}
            </Typography>
            <Typography variant="body2">
              <strong>Total: SEK {totalPrice.toFixed(2)}</strong>
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ borderStyle: "dotted", my: 2 }} />

        <Typography variant="h6" sx={{ mb: 2 }}>
          Buyer's Details
        </Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="body1">
            <strong>Name:</strong> {payer.fullName}
          </Typography>
          <Typography variant="body1">
            <strong>Address:</strong> {payer.address}
          </Typography>
          <Typography variant="body1">
            <strong>Phone:</strong> {payer.phone}
          </Typography>
        </Box>
        <Divider sx={{ borderStyle: "dotted", my: 2 }} />

        <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
          Your order will be processed soon. Thank you for your order!
        </Typography>

        <Box
          display="flex"
          sx={{ justifyContent: { xs: "center", md: "flex-end" }, mt: 3 }}
        >
          <Link href="/menu" passHref>
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
              Continue to order
            </Button>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}
