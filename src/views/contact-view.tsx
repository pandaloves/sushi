"use client";

import { Box, Stack, Typography, Divider } from "@mui/material";
import { Icon } from "@iconify/react";

export function ContactView() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        backgroundImage: 'url("/images/contact.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
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
        <Typography variant="h3" sx={{ mt: 5, mb: 2 }}>
          Contact us
        </Typography>
        <Divider
          sx={{ borderStyle: "dotted", my: 1, width: "80%", mx: "auto" }}
        />

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
              width={35}
              height={35}
            />
            <Typography variant="h6">123 Stora Gatan, Stockholm</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon icon="material-symbols:call-outline" width={35} height={35} />
            <Typography variant="h6">070-1230-7890</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon
              icon="material-symbols-light:mark-email-read-outline"
              width={35}
              height={35}
            />
            <Typography variant="h6">sushi@example.com</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon
              icon="material-symbols-light:room-service-outline"
              width={35}
              height={35}
            />
            <Typography variant="h6">
              Open: 09:00 - 22:00 Tuesday - Sunday
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
