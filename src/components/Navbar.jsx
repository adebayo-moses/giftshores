import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { Link } from "react-router-dom";

const pages = [{ name: "Create List", url: "/create-list" }];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(to right, purple, #E491E8)",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            src="/logo.png"
            alt=""
            height={50}
            width={50}
            sx={{ display: { xs: "none", md: "flex" } }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Giftshores
          </Typography>
          {/* </div> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((p) => (
                <MenuItem
                  component={Link}
                  to={p.url}
                  key={p.name}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{p.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <div className="flex items-center"> */}
          <Avatar
            src="/logo.png"
            alt=""
            height={50}
            width={50}
            sx={{ display: { xs: "flex", md: "none" } }}
          />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 1,
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Giftshores
          </Typography>
          {/* </div> */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
            }}
          >
            {pages.map((p) => (
              <Button
                key={p.name}
                LinkComponent={Link}
                to={p.url}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {p.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
