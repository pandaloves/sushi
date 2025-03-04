"use client";

import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import { Container, Box, Typography } from "@mui/material";

type MainLayoutProps = {
  className?: string;
  title: string;
  url?: string;
  description: string;
  image: string;
  children: ReactNode;
  product?: boolean;
};

export function MainLayout({
  className,
  title,
  url,
  description,
  image,
  children,
}: MainLayoutProps): ReactElement {
  const siteUrl = `https://sushi.vercel.app${url ?? ""}`;

  return (
    <Container maxWidth="lg" className={className} sx={{ mt: 4 }}>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="og:url" content={siteUrl} />
      </Head>

      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </Box>

      <Box>{children}</Box>
    </Container>
  );
}
