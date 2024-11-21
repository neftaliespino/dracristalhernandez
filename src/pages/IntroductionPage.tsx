import {
  Container,
  Grid2,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import desktopBackgroundImage from "../assets/images/desktop2.webp";
import mobileBackgroundImage from "../assets/images/mobile2.webp";

const IntroductionPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const backgroundImage = isMobile
    ? `url(${mobileBackgroundImage})`
    : `url(${desktopBackgroundImage})`;

  return (
    <Grid2
      container
      justifyContent={{ xs: "flex-start", md: "center" }}
      alignItems="center"
      direction="column"
      // pt={{ xs: 13, md: 0 }}
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
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid2
          container
          direction="row"
          columnGap={20}
          rowGap={6}
          justifyContent="center"
          maxWidth={{ md: "100%", xs: 361 }}
          sx={{
            flexWrap: {
              xs: "wrap",
              md: "nowrap",
            },
          }}
        >
          <Grid2 size={{ md: 6, xs: 12 }} maxWidth={{ md: 550 }}>
            <Grid2 size={{ xs: 12 }} mb={{ xs: 4, md: 2 }}>
              <Typography
                variant="h1"
                fontFamily="Roslindale"
                fontSize={{ md: 35, xs: 15 }}
                textAlign={{ xs: "center", lg: "left" }}
                fontWeight={200}
              >
                Dra. Cristal Miranda Hernández Díaz
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Typography
                fontFamily="Barlow Condensed"
                fontSize={{ md: 24, xs: 15 }}
                textAlign="center"
                fontWeight={200}
              >
                Médica Cirujana por parte del Tecnológico <br />
                de Monterrey, con especialidad en Medicina Estética.
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 size={{ md: 6, xs: 12 }} maxWidth={{ md: 480 }}>
            <Typography
              fontSize={{ md: 22, xs: 15 }}
              textAlign={{ xs: "center", md: "left" }}
              fontFamily="Barlow Condensed"
              fontWeight={200}
              lineHeight={{ xs: 1.5, sm: "auto" }}
            >
              Con 10 años de experiencia a través de su clínica privada, su
              práctica se caracteriza por un enfoque en el autocuidado,
              utilizando técnicas de vanguardia. Priorizando el bienestar de sus
              pacientes con empatía, precisión y atención personalizada. <br />
              <br />
              Para ella, el arte y la ciencia van de la mano del amor propio y,
              por lo tanto, cada paciente tiene el potencial de encarnar su
              mejor visión de sí mismos en cuerpo y alma.
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </Grid2>
    // </Container>
  );
};

export default IntroductionPage;
