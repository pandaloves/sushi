"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { useCart } from "@/context/CartProvider";
import { useState, useEffect } from "react";
import { BreadCrumb } from "./BreadCrumb";

export function Navbar() {
  const { cartProducts } = useCart();
  const [isClient, setIsClient] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const menuItems = [
    { text: "Hem", url: "/" },
    { text: "Meny", url: "/menu" },
    { text: "Kontakta oss", url: "/contact" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(177, 175, 175, 0.7)",
        color: "common.white",
        transition: "background-color 0.3s ease",
        width: "100vw",
        top: 0,
        left: 0,
        px: { xs: 2, md: 4 },
        py: 3,
        boxSizing: "border-box",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 1, sm: 3 },
          justifyContent: "space-between",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => setDrawerOpen(true)}
          sx={{ position: "relative" }}
        >
          <MenuIcon sx={{ fontSize: 28, color: "#fff" }} />
        </IconButton>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box
            sx={{
              width: "100vw",
              height: "100vh",
              color: "common.white",
              fontSize: { xs: "1.5rem", md: "3rem" },
              fontWeight: 700,
              p: 2,
              backgroundColor: "#fa8203",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <List sx={{ width: "100%" }}>
              {menuItems.map((item, index) => (
                <Link key={index} href={item.url} passHref>
                  <ListItem
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                  >
                    <ListItemText
                      primary={item.text}
                      sx={{
                        textAlign: "center",
                        fontSize: { xs: "2rem", md: "3rem" },
                        fontWeight: 700,
                      }}
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <BreadCrumb />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: { xs: 5, md: 6.8 },
            }}
          >
            <Typography variant="body2" color="#fff">
              Välja
            </Typography>
            <Typography variant="body2" color="#fff">
              Betala
            </Typography>
            <Typography variant="body2" color="#fff">
              Hämta
            </Typography>
          </Box>
        </Box>
        <Link href="/cart">
          <IconButton color="inherit">
            <Badge
              badgeContent={isClient ? cartProducts : 0}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "0.75rem",
                  minWidth: "18px",
                  height: "18px",
                },
              }}
            >
              <ShoppingCartIcon
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.75rem" },
                  color: "common.white",
                }}
              />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
