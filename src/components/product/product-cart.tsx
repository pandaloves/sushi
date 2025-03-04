"use client";

import { useState, useEffect, ReactElement } from "react";
import { IProductProps } from "@/types/product";
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
  isMobile: boolean;
  productData: IProductProps;
};

export function ProductCart({
  id,
  isMobile,
  productData,
}: AddCartProps): ReactElement {
  const [loading, setLoading] = useState(true);
  const [productQuantity, setProductQuantity] = useState(0);

  const { currentCart, addProduct, deleteProduct, handleProductQuantity } =
    useCart();
  const { quantity } =
    currentCart.find(({ id: cartId }) => cartId === id) ?? {};

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    setProductQuantity(quantity ?? 0);
  }, [quantity]);

  return (
    <Paper
      elevation={3}
      sx={{
        px: 3,
        py: 2,
        borderRadius: 2,
        maxWidth: 580,
        overflow: "hidden",
        height: loading ? 200 : quantity ? 183 : 133,
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
      ) : productQuantity ? (
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

          <Button
            variant="outlined"
            startIcon={<MdRemoveShoppingCart />}
            fullWidth
            onClick={() => deleteProduct(id)}
            sx={{ mt: 2 }}
          >
            Remove from cart
          </Button>
        </Box>
      ) : (
        <Box>
          <Button
            variant="contained"
            color="primary"
            startIcon={<MdAddShoppingCart />}
            fullWidth
            onClick={() =>
              addProduct({ ...productData, quantity: productQuantity })
            }
          >
            Add to cart
          </Button>
        </Box>
      )}
    </Paper>
  );
}
