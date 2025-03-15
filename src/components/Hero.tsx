"use client";

import { memo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const Hero = memo(function Hero() {
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
          style={{ borderRadius: "50%" }}
        />

        <Stack direction="column" alignItems="start" gap={1}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon
              icon="material-symbols:location-on-outline"
              width={26}
              height={26}
              aria-label="Location Icon"
            />
            <Typography fontSize={{ xs: "0.9rem", md: "1.5rem" }}>
              123 Stora Gatan, Stockholm
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon
              icon="material-symbols:call-outline"
              width={26}
              height={26}
              aria-label="Phone Icon"
            />
            <Typography fontSize={{ xs: "0.9rem", md: "1.5rem" }}>
              07012307890
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon
              icon="material-symbols-light:room-service-outline"
              width={26}
              height={26}
              aria-label="Service Icon"
            />
            <Typography fontSize={{ xs: "0.9rem", md: "1.5rem" }}>
              Genomsnittlig tillverkningstid 20 minuter
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon
              icon="material-symbols:nest-clock-farsight-analog-outline"
              width={26}
              height={26}
              aria-label="Opening Hours Icon"
            />
            <Typography fontSize={{ xs: "0.9rem", md: "1.5rem" }}>
              Öppet: 09:00 - 22:00 tisdag - söndag
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <video
        autoPlay
        loop
        muted
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
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </Box>
  );
});
