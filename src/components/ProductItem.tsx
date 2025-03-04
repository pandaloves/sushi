"use client";

import { Box, Button, Typography, TextField, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { IProductProps } from "@/types/product";
import { useCart } from "@/context/CartProvider";

type ProductItemProps = {
  product: IProductProps;
  quantity: number;
  handleQuantityChange: (id: number, quantity: number) => void;
};

export function ProductItem({
  product,
  quantity,
  handleQuantityChange,
}: ProductItemProps) {
  const { addProduct } = useCart();

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
        padding: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          flex: { md: 1 },
          height: { xs: 250, md: "80%" },
          width: { xs: "100%", md: "40%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xs: 2, md: 0 },
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            width: { xs: "100%", sm: "80%" },
            height: { md: "100%" },
            maxHeight: 380,
            objectFit: "cover",
            border: "1px solid #ddd",
            borderRadius: 8,
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
          variant="h4"
          sx={{
            mb: 2,
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "common.white",
          }}
        >
          {product.name}
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
          {product.description}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            color: "common.white",
          }}
        >
          {product.price} SEK
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          gap={3}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton
              onClick={() => handleQuantityChange(product.id, quantity - 1)}
              sx={{ border: "1px solid #ddd", color: "#fff" }}
            >
              <Remove />
            </IconButton>
            <TextField
              type="number"
              value={quantity}
              onChange={(e) =>
                handleQuantityChange(product.id, Number(e.target.value))
              }
              sx={{
                width: 60,
                borderRadius: 5,
                backgroundColor: "common.white",
                "& input": {
                  textAlign: "center",
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
            />

            <IconButton
              onClick={() => handleQuantityChange(product.id, quantity + 1)}
              sx={{ border: "1px solid #ddd", color: "common.white" }}
            >
              <Add />
            </IconButton>
          </Box>
        </Box>
        <Button
          variant="contained"
          onClick={() =>
            addProduct({
              ...product,
              quantity,
            })
          }
          sx={{
            width: 150,
            height: 58,
            mt: 3,
            backgroundColor: "common.white",
            color: "#000",
            borderRadius: 5,
          }}
        >
          Add To Cart
        </Button>
      </Box>
    </Box>
  );
}
