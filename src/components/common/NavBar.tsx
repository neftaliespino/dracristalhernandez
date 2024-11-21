import {
  AppBar,
  Box,
  Container,
  Fade,
  Grid2,
  IconButton,
  Link,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  //   const { currentPath, setCurrentPath } = usePath();
  const hide = false;
  //   const [color, setColor] = useState<ColorType>(null);
  //   const [hide, setHide] = useState(false);
  const [onOpenMenu, setOnOpenMenu] = useState(false);

  const onShow = () => {
    setOnOpenMenu((prev) => !prev);
  };

  return !hide ? (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        maxWidth: 752,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AppBar
          position="sticky"
          color="transparent"
          elevation={0}
          sx={{ maxWidth: 752, height: "64px" }}
        >
          <Toolbar variant="regular">
            {isMobile && (
              <IconButton
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: "white" }}
                onClick={onShow}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Fade in={!isMobile ? true : onOpenMenu}>
              <Grid2
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Grid2>
                  <Link
                    variant="body2"
                    href="#expertise"
                    rel="noopener noreferrer"
                    data-auth="NotApplicable"
                    color="secondary.main"
                    underline="hover"
                    typography="Barlow Condensed"
                    sx={{
                      fontSize: "20px",
                    }}
                  >
                    Expertise
                  </Link>
                </Grid2>
                <Grid2>
                  <Link
                    variant="body2"
                    href="#services"
                    rel="noopener noreferrer"
                    data-auth="NotApplicable"
                    color="secondary.main"
                    underline="hover"
                    typography="Barlow Condensed"
                    sx={{
                      fontSize: "20px",
                    }}
                  >
                    Services
                  </Link>
                </Grid2>
                <Grid2>
                  <Link
                    variant="body2"
                    href="#about"
                    rel="noopener noreferrer"
                    data-auth="NotApplicable"
                    color="secondary.main"
                    underline="hover"
                    typography="Barlow Condensed"
                    sx={{
                      fontSize: "20px",
                    }}
                  >
                    About
                  </Link>
                </Grid2>
              </Grid2>
            </Fade>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  ) : (
    <></>
  );
};

export default NavBar;
