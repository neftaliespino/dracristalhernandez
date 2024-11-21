import {
  Container,
  Grid2,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import desktopBackgroundImage from "../assets/images/desktop5.webp";
import mobileBackgroundImage from "../assets/images/mobile5.webp";

const CvPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.down(1194));

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
          direction="column"
          justifyContent="center"
          px={{ xs: 0, md: 11 }}
          mb={2}
        >
          <Grid2 display="flex" justifyContent="center">
            <Typography fontFamily="Gangster" fontSize={40}>
              Curriculo Profesional
            </Typography>
          </Grid2>
          <Grid2
            container
            pt={6}
            rowGap={2}
            columnGap={16}
            justifyContent={{
              xs: "center",
              md: "space-between",
            }}
            sx={{
              flexWrap: {
                xs: "wrap",
                md: "nowrap",
              },
            }}
          >
            <Grid2 container direction="column" rowGap={2}>
              <Grid2>
                <Typography fontSize={20} fontFamily="Barlow Condensed">
                  2009 - 2016
                </Typography>
              </Grid2>
              <Grid2>
                <Typography fontSize={15} fontFamily="Roslindale">
                  Médica Cirujano
                  <br />
                  Técnologico de Monterrey
                  <br /> Especialidad en Medicina Estética.
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2 container direction="column" rowGap={2}>
              <Grid2>
                <Typography fontSize={20} fontFamily="Barlow Condensed">
                  2017 - 2022
                </Typography>
              </Grid2>
              <Grid2 width={203}>
                <Typography fontSize={15} fontFamily="Roslindale">
                  Rotación en Hospital Zambrano Hellion, Hospital San Jose,
                  Hospital Materno Infantil y Hospital Metropolitano.
                </Typography>
              </Grid2>
              <Grid2
                container
                direction={isDesktop ? "column" : "row"}
                columnGap={15}
                rowGap={2}
                wrap="nowrap"
              >
                <Grid2 width={203}>
                  <Typography fontSize={15} fontFamily="Roslindale">
                    Instituto de Prevencion de la ceguera APEC. Santiago, Chile.
                  </Typography>
                </Grid2>
                <Grid2 width={203}>
                  <Typography fontSize={15} fontFamily="Roslindale">
                    Diplomado Universitario de Medicina Estetica por parte de la
                    Universidad Argentina John F. Kennedy..
                  </Typography>
                </Grid2>
              </Grid2>
              <Grid2
                container
                wrap="nowrap"
                direction={isDesktop ? "column" : "row"}
                columnGap={15}
                rowGap={2}
              >
                <Grid2 width={203}>
                  <Typography fontSize={15} fontFamily="Roslindale">
                    Práctica médica como doctora en Botox Bar Monterrey, by
                    Frank Rosengaus.
                  </Typography>
                </Grid2>
                <Grid2 width={203}>
                  <Typography fontSize={15} fontFamily="Roslindale">
                    Apertura de clínica de medicina estética Cosmedica en San
                    Pedro Garza García, Nuevo León, México.
                  </Typography>
                </Grid2>
              </Grid2>
              <Grid2 width={203}>
                <Typography fontSize={15} fontFamily="Roslindale">
                  Cursos internacionales anuales acreditaciones de IMCAS Paris,
                  Francia
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2 container direction="column" rowGap={2}>
              <Grid2>
                <Typography fontSize={20} fontFamily="Barlow Condensed">
                  2024
                </Typography>
              </Grid2>
              <Grid2 width={isMobile ? 203 : "auto"}>
                <Typography fontSize={15} fontFamily="Roslindale">
                  Conferencista invitada en el
                  <br />
                  Congreso Mundial de Medicina Estética
                  <br /> y Medicina Anti envejecimiento
                  <br /> en Latino América.
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Grid2>
    // </Container>
  );
};

export default CvPage;
