import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Grid2,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import desktopBackgroundImage from "../assets/images/desktop6.webp";
import mobileBackgroundImage from "../assets/images/mobile3.webp";
import DImageBox from "../components/common/DImageBox";
import mainLogo from "../assets/images/mainLogo.svg";
import subLogoMobile from "../assets/images/minLogoContact.svg";
import minLogo from "../assets/images/minLogo.svg";

const ContactPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const backgroundImage = isMobile
    ? `url(${mobileBackgroundImage})`
    : `url(${desktopBackgroundImage})`;

  return (
    <Grid2
      container
      direction="column"
      pt="70px"
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "primary.main",
        backgroundImage,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        overflow: "auto",
      }}
    >
      <Container
        maxWidth={"xl"}
        sx={{
          maxWidth: 1440,
          minWidth: 390,
          p: "0px !important",
          m: "0px !important",
        }}
      >
        <Grid2
          container
          justifyContent="center"
          alignContent="center"
          mt={26}
          direction="column"
        >
          <Grid2>
            <DImageBox
              alt="mainLogo"
              objectFit="none"
              src={mainLogo}
              sx={{
                maxWidth: isMobile ? 342 : 640,
                height: "auto",
              }}
            />
          </Grid2>
          <Grid2 container direction="row" columnGap={23}>
            {!isMobile && (
              <Grid2 width={253}>
                <Typography fontFamily="Barlow Condensed" fontSize={15}>
                  Tel. +52 81 1720 7627
                </Typography>
                <Typography fontFamily="Barlow Condensed" fontSize={15}>
                  Av. Manuel Gómez Morín 2005 - Local 17,
                </Typography>
                <Typography fontFamily="Barlow Condensed" fontSize={15}>
                  66297, SPGG, Nuevo León
                </Typography>
                <Typography fontFamily="Barlow Condensed" fontSize={15}>
                  contacto@dracristalmiranda.com
                </Typography>
                <Typography fontFamily="Barlow Condensed" fontSize={15}>
                  dracristalmiranda.com
                </Typography>
              </Grid2>
            )}
            <Grid2 container direction="row" columnGap={4.5}>
              <Grid2>
                <Stack gap={4}>
                  <DImageBox
                    alt="sublogo"
                    objectFit="none"
                    src={subLogoMobile}
                    sx={{
                      width: 200,
                      height: "auto",
                    }}
                  />
                  <Typography fontFamily="Barlow Condensed" fontSize={15}>
                    &copy; Medic Beauty Clinic 2024
                  </Typography>
                </Stack>
              </Grid2>
              <Grid2>
                <DImageBox
                  alt="sublogo"
                  objectFit="none"
                  src={minLogo}
                  sx={{
                    maxWidth: 76,
                    height: "auto",
                  }}
                />
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        {!isMobile && (
          <Container
            maxWidth={false}
            sx={{
              display: "flex",
              justifyContent: "center",
              maxWidth: 752,
            }}
          >
            <BottomNavigation
              showLabels
              // value={value}
              // onChange={(event, newValue) => {
              //   setValue(newValue)
              // }}
              sx={{
                pb: 2,
                position: "absolute",
                bottom: 0,
                width: 752,
                backgroundColor: "transparent",
                justifyContent: "space-between",

                "& .MuiBottomNavigationAction-label": {
                  fontSize: (theme) => theme.typography.h6.fontSize,
                  color: "common.white",
                },
              }}
            >
              <BottomNavigationAction label="Instagram" />
              <BottomNavigationAction label="Ubicación" />
              <BottomNavigationAction label="Contacto" />
            </BottomNavigation>
          </Container>
        )}
      </Container>
    </Grid2>
    // </Container>
  );
};

export default ContactPage;
