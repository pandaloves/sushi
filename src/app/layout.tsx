import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StyledRoot } from "./StyledRoot";
import { Box } from "@mui/material";
import { Navbar } from "@/components/Navbar";
import { CartProvider } from "@/context/CartProvider";
import ThemeRegistry from "../theme/ThemeRegistry";
import "@/app/globals.css";
import { ProductProvider } from "@/context/ProductProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Sushi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Bästa sushi" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <StyledRoot>
              <ProductProvider>
                <CartProvider>
                  <Box component="main">
                    <Navbar />
                    {children}
                  </Box>
                </CartProvider>
              </ProductProvider>
            </StyledRoot>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
