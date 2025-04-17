"use client";

import { Box, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import Image from "next/image";

export function Hero() {
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
          width={100}
          height={100}
          priority
          style={{ borderRadius: "50%" }}
        />

        <Stack direction="column" alignItems="start" marginTop={-1} gap={1}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon
              icon="material-symbols:location-on-outline"
              width={30}
              height={30}
            />
            <Typography fontSize={{ xs: "0.9rem", md: "1.5rem" }}>
              123 Stora Gatan, Stockholm
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon icon="material-symbols:call-outline" width={30} height={30} />
            <Typography fontSize={{ xs: "0.9rem", md: "1.5rem" }}>
              07012307890
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon
              icon="material-symbols-light:room-service-outline"
              width={30}
              height={30}
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
            />
            <Typography fontSize={{ xs: "0.9rem", md: "1.5rem" }}>
              Öppet: 09:00 - 22:00 tisdag - söndag
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <Image
          src="/images/hero.jpeg"
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </Box>
    </Box>
  );
}
