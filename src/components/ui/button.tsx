import { Button as MuiButton } from "@mui/material";
import type { ReactNode, ReactElement } from "react";
import type { IconType } from "react-icons";

type ButtonProps = {
  Icon?: IconType;
  id?: string;
  type?: "button" | "submit" | "reset";
  label?: string;
  flipped?: boolean;
  disabled?: boolean;
  tabIndex?: number;
  children?: ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "error" | "success" | "info" | "warning";
  size?: "small" | "medium" | "large";
};

export function Button({
  Icon,
  id,
  type = "button",
  label,
  flipped,
  disabled,
  tabIndex,
  children,
  ariaLabel,
  onClick,
  variant = "contained",
  color = "primary",
  size = "medium",
}: ButtonProps): ReactElement {
  return (
    <MuiButton
      id={id}
      variant={variant}
      color={color}
      size={size}
      startIcon={Icon && !flipped ? <Icon /> : undefined}
      endIcon={Icon && flipped ? <Icon /> : undefined}
      onClick={onClick}
      disabled={disabled}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
    >
      {label}
      {children}
    </MuiButton>
  );
}
