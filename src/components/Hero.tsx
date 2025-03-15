"use client";

import { memo, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

export const Hero = memo(function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={heroRef}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100vh"
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {videoLoaded && (
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        >
          <source src="/videos/hero.webm" type="video/webm" />
        </video>
      )}
    </Box>
  );
});
