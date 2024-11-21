import { Box, Container, Grid2, useMediaQuery, useTheme } from "@mui/material";
import DImageBox from "../components/common/DImageBox";
import desktopBackgroundImage from "../assets/images/desktop1.webp";
import mobileBackgroundImage from "../assets/images/mobile1.webp";
import subLogo from "../assets/images/subLogo.svg";
import subLogoMobile from "../assets/images/subLogoMobile.svg";
import mainLogo from "../assets/images/mainLogo.svg";

const MainPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const backgroundImage = isMobile
    ? `url(${mobileBackgroundImage})`
    : `url(${desktopBackgroundImage})`;
  const subLogoImage = isMobile ? subLogoMobile : subLogo;
  return (
    <Grid2
      container
      justifyContent="flex-start"
      alignItems="center"
      direction="column"
      rowSpacing={3}
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "primary.main",
        backgroundImage,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <Container
        maxWidth={"xl"}
        sx={{
          maxWidth: 1440,
          minWidth: 390,
          p: "0px !important",
          m: "0px !important",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <DImageBox
            alt="mainLogo"
            objectFit="none"
            src={mainLogo}
            sx={{
              maxWidth: isMobile ? 148 : 640,
              height: "auto",
              position: "absolute",
              top: isMobile ? 160 : 266,
              right: isMobile ? 16 : 72,
            }}
          />
          <DImageBox
            alt="sublogo"
            objectFit="none"
            src={subLogoImage}
            sx={{
              maxWidth: isMobile ? 148 : 640,
              height: "auto",
              position: "absolute",
              top: isMobile ? 190 : 380,
              right: isMobile ? 39 : 200,
            }}
          />
        </Box>
      </Container>
    </Grid2>
  );
};

export default MainPage;
