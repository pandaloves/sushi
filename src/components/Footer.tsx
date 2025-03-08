"use client";

import { Box, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { BackToTopButton } from "./ui/back-to-top-button";
import { SocialMediaIconButtons } from "./ui/social-media-icon-buttons";

export function Footer(): React.ReactElement {
  return (
    <Box
      component="footer"
      sx={{
        pb: 4,
        px: 2,
        backgroundColor: "#000", 
        color: "common.white",
        textAlign: "center",
      }}
    >
      <Box sx={{my: 4, display: "flex", flexDirection: "column", gap: 4, alignItems: "center", justifyContent: "center", color: "common.white"}}>
        <BackToTopButton />
        <SocialMediaIconButtons  />
      </Box>

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
