import { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

type EmptyProps = {
  searchQuery: string;
};

export function Empty({ searchQuery }: EmptyProps): ReactElement {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        p: 4,
        textAlign: "center",
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        No products found with{" "}
        <Typography component="span" color="primary" fontWeight="bold">
          {searchQuery}
        </Typography>
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Please try a different search term or category.
      </Typography>
    </Box>
  );
}
