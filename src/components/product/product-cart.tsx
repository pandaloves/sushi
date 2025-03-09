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
} from "@mui/material";

type AddCartProps = {
  id: number;
  productData: IProductProps;
};

export function ProductCart({ id, productData }: AddCartProps): ReactElement {
  const [productQuantity, setProductQuantity] = useState(0);
  const [isRemoved, setIsRemoved] = useState(false);

  const { currentCart, deleteProduct, handleProductQuantity } = useCart();

  const quantity = currentCart[id] ?? 0;

  useEffect(() => {
    setProductQuantity(quantity);
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
        width: "100%",
        maxWidth: 580,
        overflow: "hidden",
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 500 }}>Köp produkt</h2>
        <Divider sx={{ my: 1 }} />
      </Box>

      {!isRemoved && (
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
              Ta bort från vagnen
            </Button>

            <Link href="/cart" passHref>
              <Button
                variant="contained"
                color="primary"
                startIcon={<MdAddShoppingCart />}
              >
                Återgå till varukorgen
              </Button>
            </Link>
          </Box>
        </Box>
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
              Återgå till menyn
            </Button>
          </Link>
        </Box>
      )}
    </Paper>
  );
}
