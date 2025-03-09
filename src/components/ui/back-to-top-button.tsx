import { IconButton, SxProps, Theme } from "@mui/material";
import { Icon } from "@iconify/react";

type BackToTopButtonProps = {
  sx?: SxProps<Theme>;
};
export function BackToTopButton({ sx }: BackToTopButtonProps) {
  return (
    <IconButton
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      color="default"
      size="small"
      sx={{
        border: "1px solid #fff",
        backgroundColor: "transparent",
        padding: 1,
        zIndex: 10,
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        },
        ...sx,
      }}
    >
      <Icon icon="solar:alt-arrow-up-outline" width={18} color="#fff" />
    </IconButton>
  );
}
