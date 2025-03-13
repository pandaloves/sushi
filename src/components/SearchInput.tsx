"use client";

import { Box, BoxProps, InputBase, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

type SearchInputProps = {
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: () => void;
  productNotFound: boolean;
  sx?: BoxProps;
};

export function SearchInput({
  searchTerm,
  handleSearchChange,
  handleSearchSubmit,
  productNotFound,
  sx,
}: SearchInputProps) {
  return (
    <Box display="flex" justifyContent="center" sx={{ mt: 20, ...sx }}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "2px solid white",
            borderRadius: 5,
            p: 2,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            width: 400,
            maxWidth: "86vw",
          }}
        >
          <Icon
            icon="material-symbols:search"
            width={35}
            height={35}
            color="#fff"
          />
          <InputBase
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
            placeholder="Sök..."
            sx={{
              ml: 1,
              flex: 1,
              width: "100%",
              color: "#fff",
              fontSize: "1rem",
              "&::placeholder": {
                color: "rgba(252, 251, 251, 0.7)",
              },
            }}
          />
        </Box>

        <Box>
          {productNotFound && (
            <Typography
              variant="body1"
              sx={{
                color: "red",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              Ingen produkt hittades med det namnet.
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
