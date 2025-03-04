import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StyledRoot } from "./StyledRoot";
import { Box } from "@mui/material";
import { Navbar } from "@/components/Navbar";
import { CartProvider } from "@/context/CartProvider";
import ThemeRegistry from "../theme/ThemeRegistry";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <StyledRoot>
              <CartProvider>
                <Box component="main">
                  <Navbar />
                  {children}
                </Box>
              </CartProvider>
            </StyledRoot>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
