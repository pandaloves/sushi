"use client";

import { useState, useEffect, ReactElement } from "react";
import { IProductProps } from "@/types/product";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  MdAdd,
  MdAddShoppingCart,
  MdRemove,
  MdRemoveShoppingCart,
} from "react-icons/md";
import { useCart } from "@/context/CartProvider";
import {
  Box,
  Paper,
  Button,
  IconButton,
  TextField,
  Divider,
  CircularProgress,
} from "@mui/material";

type AddCartProps = {
  id: number;
  productData: IProductProps;
};

export function ProductCart({ id, productData }: AddCartProps): ReactElement {
  const [loading, setLoading] = useState(true);
  const [productQuantity, setProductQuantity] = useState(0);
  const [isRemoved, setIsRemoved] = useState(false); // New state to track if item is removed

  const { currentCart, addProduct, deleteProduct, handleProductQuantity } =
    useCart();
  const { quantity } =
    currentCart.find(({ productId: cartId }) => cartId === id) ?? {};

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    setProductQuantity(quantity ?? 0);
  }, [quantity]);

  const handleRemoveProduct = () => {
    deleteProduct(id);
    setIsRemoved(true);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        px: 3,
        py: 2,
        borderRadius: 2,
        maxWidth: 580,
        overflow: "hidden",
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 500 }}>Buy product</h2>
        <Divider sx={{ my: 1 }} />
      </Box>

      {loading ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            height: "100%",
          }}
        >
          <CircularProgress
            color="primary"
            sx={{ gridColumn: "span 2", justifySelf: "center" }}
          />
        </Box>
      ) : (
        !isRemoved && (
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <IconButton
                color="primary"
                onClick={() => handleProductQuantity(id, "decrement")()}
                disabled={productQuantity <= 1}
              >
                <MdRemove />
              </IconButton>

              <TextField
                size="small"
                type="number"
                slotProps={{
                  input: { inputProps: { min: 1, max: 100 } },
                }}
                value={productQuantity}
                onChange={(e) =>
                  handleProductQuantity(id, Number(e.target.value))()
                }
                sx={{ width: 78 }}
              />

              <IconButton
                color="primary"
                onClick={() => handleProductQuantity(id, "increment")()}
                disabled={productQuantity >= 100}
              >
                <MdAdd />
              </IconButton>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              justifyContent="center"
              alignItems="center"
              gap={2}
              sx={{ mt: 3 }}
            >
              <Button
                variant="outlined"
                startIcon={<MdRemoveShoppingCart />}
                onClick={handleRemoveProduct}
              >
                Remove from cart
              </Button>

              <Link href="/cart" passHref>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<MdAddShoppingCart />}
                >
                  Return to cart
                </Button>
              </Link>
            </Box>
          </Box>
        )
      )}

      {isRemoved && (
        <Box display="flex" justifyContent="flex-end" sx={{ mt: "auto" }}>
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
                  color: "primary.main",
                  backgroundColor: "#f1f1f1",
                },
              }}
            >
              <ArrowBackIosIcon />
              Return to Menu
            </Button>
          </Link>
        </Box>
      )}
    </Paper>
  );
}
