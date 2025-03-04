"use client";

import { Box, InputBase } from "@mui/material";
import { Icon } from "@iconify/react";

export function SearchInput() {
  return (
    <Box display="flex" justifyContent="center" sx={{ mt: 20 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "2px solid white",
          borderRadius: "8px",
          padding: "13px 12px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          width: { xs: "80%", md: "100%" },
          maxWidth: "600px",
          mt: { xs: -10, md: -3 },
        }}
      >
        <Icon
          icon="material-symbols:search"
          width={35}
          height={35}
          color="#fff"
        />
        <InputBase
          placeholder="Search"
          sx={{
            ml: 1,
            flex: 1,
            color: "#fff",
            fontSize: "1rem",
            "&::placeholder": {
              color: "rgba(252, 251, 251, 0.7)",
            },
          }}
        />
      </Box>
    </Box>
  );
}
