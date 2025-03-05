"use client";

import { useState, ReactElement, ReactNode } from "react";
import Image from "next/image";
import { Box, CircularProgress } from "@mui/material";

type ImageLoaderProps = {
  src: string;
  alt: string;
  width?: number; 
  height?: number;
  divStyle?: React.CSSProperties;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  draggable?: boolean;
  children?: ReactNode;
};

export function ProductImage({
  src,
  alt,
  width = 300, // Default width
  height = 300, // Default height
  divStyle = {},
  objectFit = "cover",
  draggable = false,
  children,
}: ImageLoaderProps): ReactElement {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        bgcolor: isLoading ? "grey.300" : "transparent",
        borderRadius: 2,
        ...divStyle,
      }}
    >
      {isLoading && <CircularProgress size={30} color="primary" />}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit={objectFit}
        draggable={draggable}
        onLoadingComplete={() => setIsLoading(false)}
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
      />
      {children}
    </Box>
  );
}
