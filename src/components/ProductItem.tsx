"use client";

import {
  Box,
  Button,
  Typography,
  TextField,
  IconButton,
  InputLabel,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { IProductProps } from "@/types/product";
import { useCart } from "@/context/CartProvider";
import Image from "next/image";

type ProductItemProps = {
  product: IProductProps;
  quantity: number;
  handleQuantityChange: (id: number, quantity: number) => void;
  isLast?: boolean;
};

export function ProductItem({
  product,
  quantity,
  handleQuantityChange,
  isLast,
}: ProductItemProps) {
  const { addProduct, handleBuyNow } = useCart();

  return (
    <Box
      sx={{
        height: { xs: "auto", md: "80vh" },
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 0, md: 3 },
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        px: { xs: 2, md: 4 },
        pt: 4,
        pb: 6,
        borderBottom: isLast ? "none" : "2px dotted white",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "46%", lg: "32%" },
          border: "1px solid #ddd",
          borderRadius: 8,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Image
          src={product.productImage}
          alt={product.productName}
          width={380}
          height={280}
          style={{
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          padding: { xs: 2, md: 4 },
          textAlign: { xs: "center", md: "left" },
          color: "common.white",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "common.white",
          }}
        >
          {product.productName}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            color: "common.white",
          }}
        >
          {product.productPrice} SEK
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            width: { sm: "80%" },
            fontSize: { xs: "0.875rem", md: "1rem" },
            color: "common.white",
          }}
        >
          {product.productDescription}
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          gap={3}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton
              onClick={() =>
                handleQuantityChange(product.productId, quantity - 1)
              }
              sx={{ border: "1px solid #ddd", color: "#fff" }}
              aria-label="Decrease quantity"
            >
              <Remove />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <InputLabel
                sx={{
                  color: "#fa8203",
                  fontSize: 14,
                  fontWeight: 700,
                  textAlign: "center",
                  mt: -2,
                  mb: -0.5,
                }}
              >
                Quantity
              </InputLabel>
              <TextField
                type="number"
                value={quantity}
                onChange={(e) =>
                  handleQuantityChange(
                    product.productId,
                    Number(e.target.value)
                  )
                }
                sx={{
                  width: 100,
                  borderRadius: 5,
                  backgroundColor: "common.white",
                  "& input": {
                    textAlign: "center",
                    width: "100%",
                  },
                  "& input[type=number]::-webkit-inner-spin-button": {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
                  "& input[type=number]::-webkit-outer-spin-button": {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
                  "& input[type=number]": {
                    MozAppearance: "textfield",
                  },
                }}
                slotProps={{
                  input: { inputProps: { min: 0 } },
                }}
                InputLabelProps={{ shrink: false }}
              />
            </Box>
            <IconButton
              onClick={() =>
                handleQuantityChange(product.productId, quantity + 1)
              }
              sx={{ border: "1px solid #ddd", color: "common.white" }}
              aria-label="Increase quantity"
            >
              <Add />
            </IconButton>
          </Box>
        </Box>
        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            disabled={quantity === 0}
            onClick={() => addProduct(product.productId, quantity)}
            sx={{
              width: 150,
              height: 58,
              mt: 3,
              backgroundColor: quantity === 0 ? "grey.500" : "common.white",
              color: quantity === 0 ? "grey.300" : "#000",
              borderRadius: 5,
              "&:disabled": {
                backgroundColor: "grey.400",
                color: "grey.300",
              },
            }}
          >
            Lägg till varukorgen
          </Button>

          <Button
            variant="contained"
            disabled={quantity === 0}
            onClick={() => handleBuyNow(product.productId, quantity)}
            sx={{
              width: 150,
              height: 58,
              mt: 3,
              backgroundColor: quantity === 0 ? "grey.500" : "#fa8203",
              color: quantity === 0 ? "grey.300" : "#000",
              borderRadius: 5,
              "&:disabled": {
                backgroundColor: "grey.600",
                color: "grey.300",
              },
            }}
          >
            Beställ nu
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
