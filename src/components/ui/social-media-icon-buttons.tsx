import { Button, ButtonProps } from "@mui/material";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";

export function SocialMediaIconButtons() {
  const mockIcons = [
    {
      name: "facebook",
      icon: "logos:facebook",
      label: "Facebook",
      href: "#",
    },
    {
      name: "twitter",
      icon: "line-md:twitter-x",
      label: "Twitter",
      href: "#",
    },
  ];

  return (
    <Box gap={2} display="flex" alignItems="center" flexWrap="wrap">
      {mockIcons.map((share, index) => (
        <CustomIconButton
          key={`${share.label}-${index}`}
          startIcon={share.icon}
          label={share.label}
          size="small"
          variant="outlined"
          href={share.href}
          target="_blank"
        />
      ))}
    </Box>
  );
}

// --------------------------------------------------------

type CustomButtonProps = ButtonProps & {
  label: string;
  href?: string;
  target?: string;
  component?: React.ElementType;
  endIcon?: string;
  startIcon?: string;
  loading?: boolean;
  onClick?: () => void;
};

export function CustomIconButton({
  label,
  size = "medium",
  variant = "outlined",
  type = "button",
  endIcon,
  startIcon,
  href,
  target,
  component: Component = "button",
  onClick,
  sx,
  ...other
}: CustomButtonProps) {
  return (
    <Button
      size={size}
      variant={variant}
      type={type}
      startIcon={startIcon ? <Icon icon={startIcon} width={20} /> : undefined}
      endIcon={endIcon ? <Icon icon={endIcon} width={20} /> : undefined}
      component={Component}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={onClick}
      sx={{
        color: "common.white",
        borderColor: "common.white",
        "&:hover": {
          borderColor: "common.white",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
        ...sx,
      }}
      {...other}
    >
      {label}
    </Button>
  );
}
