"use client";

import { Box, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

export function ContactView() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        backgroundImage: 'url("/images/contact us.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        my: 5,
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          px: 6,
          py: 16,
          textAlign: "center",
          color: "common.white",
        }}
      >
        <Typography variant="h3" sx={{ my: 2 }}>
          Kontakta oss
        </Typography>

        <Stack
          direction="column"
          spacing={2}
          sx={{
            width: "100%",
            maxWidth: 480,
            mx: "auto",
            textAlign: "left",
          }}
        >
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
              07012307890
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon
              icon="material-symbols-light:mark-email-read-outline"
              width={30}
              height={30}
            />
            <Typography fontSize={{ xs: "1rem", md: "1.5rem" }}>
              sushi@example.com
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon
              icon="material-symbols:nest-clock-farsight-analog-outline"
              width={30}
              height={30}
            />
            <Typography fontSize={{ xs: "1rem", md: "1.5rem" }}>
              Öppet: 09:00 - 22:00 tisdag - söndag
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
