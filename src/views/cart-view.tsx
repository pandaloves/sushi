"use client";

import Link from "next/link";
import { formatCurrency } from "@/lib/currency";
import { MdDeleteSweep } from "react-icons/md";
import { ICartProps } from "@/types/cart";
import { Box, Typography, Button, Stack, Divider } from "@mui/material";
import { CartTable } from "@/components/CartTable";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface CartViewProps {
  currentCart: ICartProps[];
  totalPrice: number;
  clearCart: () => void;
  totalProducts: number;
  cartLength: number;
}

export function CartView({
  currentCart,
  totalPrice,
  clearCart,
  cartLength,
}: CartViewProps) {
  return (
    <Box sx={{ mt: 16, mb: 6, p: 4 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h5" fontWeight="bold">
          {cartLength > 0
            ? `${cartLength} product${cartLength > 1 ? "s" : ""}`
            : "No products in cart"}
        </Typography>

        {cartLength > 0 && (
          <Button
            variant="outlined"
            color="error"
            startIcon={<MdDeleteSweep />}
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        )}
      </Stack>

      {cartLength === 0 ? (
        <Box display="flex" flexDirection="column">
          <Divider sx={{ my: 5, borderColor: "common.white" }} />
          <Typography variant="h6" color="common.white" sx={{ mt: 2 }}>
            Your cart is empty. Start adding your order!
          </Typography>
          <Divider sx={{ my: 5, borderColor: "common.white" }} />

          <Box display="flex" justifyContent="flex-end">
            <Link href="/menu" passHref>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIosIcon />}
                sx={{
                  px: 4,
                  py: 1.6,
                  borderRadius: 5,
                  width: { xs: "100%", md: "auto" },
                }}
              >
                Return to menu
              </Button>
            </Link>
          </Box>
        </Box>
      ) : (
        <>
          <CartTable cartItems={currentCart} />

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 4 }}
          >
            <Typography variant="h6">
              Total: <strong>{formatCurrency(totalPrice)}</strong>
            </Typography>

            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              gap={2}
              justifyContent={{ xs: "center", md: "flex-end" }}
              width="100%"
            >
              <Link href="/menu" passHref>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ArrowBackIosIcon />}
                  sx={{
                    px: 4,
                    py: 1.6,
                    borderRadius: 5,
                    width: { xs: "100%", md: "auto" },
                  }}
                >
                  Return to menu
                </Button>
              </Link>

              <Link href="/checkout/payment" passHref>
                <Button
                  variant="contained"
                  color="warning"
                  endIcon={<ArrowForwardIosIcon />}
                  sx={{
                    px: 4,
                    py: 1.6,
                    borderRadius: 5,
                    width: { xs: "100%", md: "auto" },
                  }}
                >
                  Checkout
                </Button>
              </Link>
            </Box>
          </Stack>
        </>
      )}
    </Box>
  );
}
