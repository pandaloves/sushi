"use client";

import { formatCurrency } from "@/lib/currency";
import { ReactElement } from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";

type ProductDetailProps = {
  name: string;
  price: number;
  category: string;
  description: string;
};

export function ProductDetail({
  name,
  price,
  category,
  description,
}: ProductDetailProps): ReactElement {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 2,
        maxWidth: 580,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="h5" fontWeight={700}>
          {name}
        </Typography>
      </Box>

      <Typography variant="h4" fontWeight={700} color="primary">
        {formatCurrency(price)}
      </Typography>

      <Divider />

      <Box>
        <Typography variant="body2" color="text.secondary">
          Category:{" "}
          <Typography variant="body2" component="span" fontWeight={500}>
            {category}
          </Typography>
        </Typography>
      </Box>
      <Typography variant="body2">{description}</Typography>
    </Paper>
  );
}
