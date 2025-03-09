"use client";

import { Box, Typography } from "@mui/material";

export function ShopInfo() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        textAlign: "center",
        backgroundImage: "url(/images/story.avif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        m: 0,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "common.white",
          mb: { xs: 1, sm: 2 },
          textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
        }}
      >
        Vår berättelse
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "common.white",
          maxWidth: { xs: "90%", sm: "600px" },
          textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
          fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
          lineHeight: { xs: 1.8, sm: 1.6 },
        }}
      >
        Sedan starten 2025 har Sushi strävat efter att erbjuda oklanderligt
        service och en unik, asiatisk kulinarisk resa för var och en av våra
        kunder. Vårt duktiga team arbetar alltid med högsta kvalitet i varje
        steg och använd endast färska, hållbara råvaror. Vad väntar du på? Boka
        ditt bord idag.
      </Typography>
    </Box>
  );
}
