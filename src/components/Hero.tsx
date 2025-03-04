"use client";

import { Box, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

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
        "&::before": {
          top: 0,
          left: 0,
          width: 1,
          content: "''",
          position: "absolute",
          bgcolor: "transparent",
        },
      }}
    >
      <Box
        gap={5}
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
        <Box
          component="img"
          src="/images/logo.png"
          sx={{
            width: { xs: 80, sm: 100 }, 
            height: { xs: 80, sm: 100 },
            borderRadius: "50%",
            mx: "auto",
          }}
        />

        <Stack direction="column" alignItems="start" spacing={3}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon icon="material-symbols:location-on-outline" width={36} height={36} />
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              123 Stora Gatan, Stockholm
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon icon="material-symbols:call-outline" width={36} height={36} />
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              070-1230-7890
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon icon="material-symbols:nest-clock-farsight-analog-outline" width={36} height={36} />
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Average manufacturing time: 25 minutes
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon icon="material-symbols-light:room-service-outline" width={36} height={36} />
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Open: 09:00 - 22:00 Tuesday - Sunday
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
        <source
          src="/videos/hero.mp4"
          type="video/mp4"
        />
      </video>
    </Box>
  );
}
