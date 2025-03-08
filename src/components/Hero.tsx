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
        <Box
          component="img"
          src="/images/logo.png"
          sx={{
            width: { xs: 50, sm: 80, md: 100 },
            height: { xs: 50, sm: 80, md: 100 },
            borderRadius: "50%",
            mx: "auto",
          }}
        />

        <Stack direction="column" alignItems="start" marginTop={-1} gap={1}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon
              icon="material-symbols:location-on-outline"
              width={30}
              height={30}
            />
            <Typography fontSize={{ xs: "1rem", md: "1.5rem" }}>
              123 Stora Gatan, Stockholm
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon icon="material-symbols:call-outline" width={30} height={30} />
            <Typography fontSize={{ xs: "1rem", md: "1.5rem" }}>
              070-1230-7890
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon
              icon="material-symbols:nest-clock-farsight-analog-outline"
              width={30}
              height={30}
            />
            <Typography fontSize={{ xs: "1rem", md: "1.5rem" }}>
              Average waiting time: 25 minutes
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon
              icon="material-symbols-light:room-service-outline"
              width={30}
              height={30}
            />
            <Typography fontSize={{ xs: "1rem", md: "1.5rem" }}>
              Open: 09:00 - 22:00 Tuesday - Sunday
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <iframe
        src="https://player.vimeo.com/video/1062717453?h=eacb2b06c0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;muted=1&amp;background=1"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
        }}
        title="hero"
      />
    </Box>
  );
}
