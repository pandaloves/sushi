"use client";

import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CardMedia,
  Typography,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import { MdAdd, MdDelete, MdRemove } from "react-icons/md";
import { useCart } from "@/context/CartProvider";
import { formatCurrency } from "@/lib/currency";
import { ReactElement } from "react";

type CartItemProps = {
  productId: number;
  productName: string;
  productImage: string;
  productPrice: number;
  quantity: number;
};

export function CartTable({
  cartItems,
}: {
  cartItems: CartItemProps[];
}): ReactElement {
  const { deleteProduct, handleProductQuantity } = useCart();
  const { cartProducts, totalPrice } = useCart();

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Image</strong>
            </TableCell>
            <TableCell>
              <strong>Details</strong>
            </TableCell>
            <TableCell>
              <strong>Quantity</strong>
            </TableCell>
            <TableCell>
              <strong>Total</strong>
            </TableCell>
            <TableCell>
              <strong>Delete</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {cartItems.map(
            ({
              productId,
              productName,
              productImage,
              productPrice,
              quantity,
            }) => (
              <TableRow key={productId}>
                <TableCell>
                  <Link href={`/menu/${productId}`} passHref>
                    <CardMedia
                      component="img"
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 2,
                        objectFit: "contain",
                        cursor: "pointer",
                      }}
                      image={productImage}
                      alt={productName}
                    />
                  </Link>
                </TableCell>

                <TableCell>
                  <Link href={`/menu/${productId}`} passHref>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "primary.main",
                        textDecoration: "none",
                        cursor: "pointer",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {productName}
                    </Typography>
                  </Link>
                  <Typography variant="body2">
                    {formatCurrency(productPrice)}
                  </Typography>
                </TableCell>

                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() =>
                      handleProductQuantity(productId, "decrement")()
                    }
                    disabled={quantity <= 1}
                  >
                    <MdRemove />
                  </IconButton>

                  <TextField
                    size="small"
                    type="number"
                    slotProps={{
                      input: { inputProps: { min: 1, max: 100 } },
                    }}
                    value={quantity}
                    onChange={(e) =>
                      handleProductQuantity(productId, Number(e.target.value))()
                    }
                    sx={{ width: 78 }}
                  />

                  <IconButton
                    color="primary"
                    onClick={() =>
                      handleProductQuantity(productId, "increment")()
                    }
                    disabled={quantity >= 100}
                  >
                    <MdAdd />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <Typography>
                    {formatCurrency(productPrice * quantity)}
                  </Typography>
                </TableCell>

                <TableCell>
                  <IconButton
                    color="error"
                    onClick={() => deleteProduct(productId)}
                  >
                    <MdDelete />
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>

      <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
        <Typography variant="body2" sx={{ mr: 4 }}>
          Total Quantities: <strong>{cartProducts}</strong>
        </Typography>
        <Typography variant="body2">
          Total Price: <strong>{formatCurrency(totalPrice)}</strong>
        </Typography>
      </Box>
    </TableContainer>
  );
}
