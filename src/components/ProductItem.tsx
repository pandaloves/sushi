"use client";

import { Box, Button, Typography, TextField, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { IProductProps } from "@/types/product";
import { useCart } from "@/context/CartProvider";

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
          src={product.productImage}
          alt={product.productName}
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
          {product.productName}
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

        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            color: "common.white",
          }}
        >
          {product.productPrice} SEK
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
            >
              <Remove />
            </IconButton>
            <TextField
              type="number"
              value={quantity}
              onChange={(e) =>
                handleQuantityChange(product.productId, Number(e.target.value))
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
              onClick={() =>
                handleQuantityChange(product.productId, quantity + 1)
              }
              sx={{ border: "1px solid #ddd", color: "common.white" }}
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
