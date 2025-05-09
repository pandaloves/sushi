"use client";

import Link from "next/link";
import { formatCurrency } from "@/lib/currency";
import { MdDeleteSweep } from "react-icons/md";
import { Box, Typography, Button, Stack, Divider } from "@mui/material";
import { CartTable } from "@/components/CartTable";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useProduct } from "@/context/ProductProvider";
import { useCart } from "@/context/CartProvider";

type CartViewProps = {
  currentCart: Record<number, number>;
  totalPrice: number;
  clearCart: () => void;
  totalProducts: number;
  cartLength: number;
};

export function CartView({
  currentCart,
  totalPrice,
  clearCart,
  cartLength,
}: CartViewProps) {
  const { products } = useProduct();
  const { addOrder } = useCart();

  const cartItems = Object.entries(currentCart).map(([productId, quantity]) => {
    const product = products.find((p) => p.productId === Number(productId));
    return {
      productId: Number(productId),
      productName: product?.productName || "Unknown Product",
      productImage: product?.productImage || "",
      productPrice: product?.productPrice || 0,
      quantity: quantity,
    };
  });

  return (
    <Box sx={{ mt: { xs: 12, md: 16 }, mb: 6, p: 4 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h3" fontWeight="bold">
          {cartLength > 0
            ? `${cartLength} product${cartLength > 1 ? "s" : ""}`
            : "Inga produkter i varukorgen"}
        </Typography>

        {cartLength > 0 && (
          <Button
            variant="outlined"
            color="error"
            startIcon={<MdDeleteSweep />}
            onClick={clearCart}
          >
            Rensa vagnen
          </Button>
        )}
      </Stack>

      {cartLength === 0 ? (
        <Box
          display="flex"
          flexDirection="column"
          sx={{ mt: { xs: -16, sm: -8, md: -6 } }}
        >
          <Divider sx={{ mb: 5, borderColor: "common.white" }} />
          <Typography variant="h6" color="common.white">
            Din varukorg är tom. Börja lägga till din beställning!
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
                Återgå till menyn
              </Button>
            </Link>
          </Box>
        </Box>
      ) : (
        <>
          <CartTable cartItems={cartItems} />

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
                  Återgå till menyn
                </Button>
              </Link>

              <Button
                variant="contained"
                color="warning"
                endIcon={<ArrowForwardIosIcon />}
                onClick={addOrder}
                sx={{
                  px: 4,
                  py: 1.6,
                  borderRadius: 5,
                  width: { xs: "100%", md: "auto" },
                }}
              >
                Kassa
              </Button>
            </Box>
          </Stack>
        </>
      )}
    </Box>
  );
}
