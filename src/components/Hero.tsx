"use client";

import { memo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Hero = memo(function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box
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
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          px: 2,
          py: 16,
          zIndex: 2,
          textAlign: "center",
          position: "relative",
          color: "common.white",
        }}
      >
        <Image
          src="/images/logo.webp"
          alt="Logo"
          width={70}
          height={70}
          priority
          placeholder="blur"
          blurDataURL="/images/logo-blur.webp"
          style={{ borderRadius: "50%" }}
        />

        <Stack direction="column" alignItems="start" gap={1}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon
              icon="material-symbols:location-on-outline"
              width={30}
              height={30}
              aria-label="Location Icon"
            />
            <Typography fontSize={{ xs: "0.9rem", md: "1.5rem" }}>
              123 Stora Gatan, Stockholm
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon
              icon="material-symbols:call-outline"
              width={30}
              height={30}
              aria-label="Phone Icon"
            />
            <Typography fontSize={{ xs: "0.9rem", md: "1.5rem" }}>
              07012307890
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon
              icon="material-symbols-light:room-service-outline"
              width={30}
              height={30}
              aria-label="Service Icon"
            />
            <Typography fontSize={{ xs: "0.9rem", md: "1.5rem" }}>
              Genomsnittlig tillverkningstid 20 minuter
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon
              icon="material-symbols:nest-clock-farsight-analog-outline"
              width={30}
              height={30}
              aria-label="Opening Hours Icon"
            />
            <Typography fontSize={{ xs: "0.9rem", md: "1.5rem" }}>
              Öppet: 09:00 - 22:00 tisdag - söndag
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <div ref={iframeRef}>
        {isVisible && (
          <iframe
            src="https://player.vimeo.com/video/1062717453?h=eacb2b06c0&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&background=1&dnt=1"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
            }}
            title="hero"
          />
        )}
      </div>
    </Box>
  );
});
