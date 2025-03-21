"use client";

import { Box, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";

export function ShopInfo() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = new Image();
          img.src = "/images/story.avif";
          img.onload = () => {
            setImageLoaded(true);
          };
          observer.unobserve(entry.target);
        }
      });
    }, {});

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={boxRef}
      sx={{
        height: "100vh",
        width: "100vw",
        textAlign: "center",
        backgroundImage: imageLoaded ? "url(/images/story.avif)" : "none",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
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
        transition: "background-image 0.5s ease",
      }}
    >
      <Typography
        variant="h3"
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
          maxWidth: { xs: "90%", sm: "580px" },
          textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
          fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
          lineHeight: { xs: 1.8, sm: 1.6 },
        }}
      >
        Sedan 2025 har Sushi jobbat för att ge dig fantastisk service och en
        unik asiatisk matupplevelse. Vårt skickliga team använder alltid färska
        och hållbara ingredienser för bästa kvalitet. Vad väntar du på? Beställ
        nu!
      </Typography>
    </Box>
  );
}
