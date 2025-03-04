"use client";

import { useState, ReactElement, ReactNode } from "react";
import Image from "next/image";
import { Box, CircularProgress } from "@mui/material";

type ImageLoaderProps = {
  src: string;
  alt: string;
  divStyle?: object;
  imageStyle?: object;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  draggable?: boolean;
  children?: ReactNode;
};

export function ImageLoader({
  src,
  alt,
  divStyle = {},
  imageStyle = {},
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
        draggable={draggable}
        onLoadingComplete={() => setIsLoading(false)}
        style={{
          objectFit,
          width: "100%",
          height: "100%",
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
          ...imageStyle,
        }}
      />
      {children}
    </Box>
  );
}
