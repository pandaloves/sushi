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
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export function CartTable({
  cartItems,
}: {
  cartItems: CartItemProps[];
}): ReactElement {
  const { deleteProduct, handleProductQuantity } = useCart();

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
          {cartItems.map(({ id, name, image, price, quantity }) => (
            <TableRow key={id}>
              <TableCell>
                <Link href={`/menu/${id}`} passHref>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 2,
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                    image={image}
                    alt={name}
                  />
                </Link>
              </TableCell>

              <TableCell>
                <Link href={`/menu/${id}`} passHref>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "primary.main",
                      textDecoration: "none",
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {name}
                  </Typography>
                </Link>
                <Typography variant="body2">{formatCurrency(price)}</Typography>
              </TableCell>

              <TableCell>
                <IconButton
                  color="primary"
                  onClick={() => handleProductQuantity(id, "decrement")()}
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
                    handleProductQuantity(id, Number(e.target.value))()
                  }
                  sx={{ width: 78 }}
                />

                <IconButton
                  color="primary"
                  onClick={() => handleProductQuantity(id, "increment")()}
                  disabled={quantity >= 100}
                >
                  <MdAdd />
                </IconButton>
              </TableCell>
              <TableCell>
                <Typography>{formatCurrency(price * quantity)}</Typography>
              </TableCell>

              <TableCell>
                <IconButton color="error" onClick={() => deleteProduct(id)}>
                  <MdDelete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
