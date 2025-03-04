import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CircleNumber from "./ui/CircleNumber";

const separatorStyle = {
  fontSize: { xs: 20, md: 32 },
  color: "#fff",
};

export function BreadCrumb() {
  const breadcrumbs = [
    <Box key="1" color="inherit">
      <CircleNumber number={1} />
    </Box>,
    <Box key="2" color="inherit">
      <CircleNumber number={2} />
    </Box>,
    <Box key="3" color="inherit">
      <CircleNumber number={3} />
    </Box>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon sx={separatorStyle} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
