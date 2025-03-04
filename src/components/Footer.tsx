"use client";

import { Box, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

export function Footer(): React.ReactElement {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        backgroundColor: "#000", 
        color: "common.white",
        textAlign: "center",
      }}
    >
      <Typography
        variant="body2"
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CopyrightIcon fontSize="small" sx={{ mr: 0.5 }} />
        2025 Sushi AB
      </Typography>
    </Box>
  );
}
