"use client";

import { formatCurrency } from "@/lib/currency";
import { ReactElement } from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";

type ProductDetailProps = {
  name: string;
  price: number;
  description: string;
};

export function ProductDetail({
  name,
  price,
  description,
}: ProductDetailProps): ReactElement {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 2,
        width: "100%",
        maxWidth: 580,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="h6" fontWeight={700}>
          {name}
        </Typography>
      </Box>

      <Typography variant="h6" fontWeight={700} color="primary">
        {formatCurrency(price)}
      </Typography>

      <Divider />

      <Typography variant="body2">{description}</Typography>
    </Paper>
  );
}
