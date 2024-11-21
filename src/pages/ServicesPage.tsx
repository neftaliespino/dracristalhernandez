import {
  Container,
  Grid2,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import desktopBackgroundImage from "../assets/images/desktop6.webp";
import mobileBackgroundImage from "../assets/images/mobile3.webp";
import { ContentItem } from "../components/common/ContentItem";

const ServicesPage = () => {
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
          direction="column"
          justifyContent="center"
          px={{ xs: 0, md: 11 }}
        >
          <Grid2
            display="flex"
            justifyContent={{
              xs: "center",
              md: "flex-start",
            }}
          >
            <Typography fontFamily="Gangster" fontSize={40}>
              Services
            </Typography>
          </Grid2>
          <Grid2
            container
            pt={6}
            rowGap={2}
            justifyContent={{
              xs: "center",
              md: "flex-start",
            }}
          >
            <ContentItem
              step="001"
              title="Diseño Facial"
              subtitle={`Procedimientos estéticos, no invasivos.
        <br /> Inyectables, bótox, rellenos, <br />
        bioestimuladores, revitalizantes.
                      `}
            />
            <ContentItem
              step="002"
              title="Revitalización"
              subtitle={`Técnicas de revitalización
        <br /> facial por medio de rituales de <br />
        autocuidado.
                      `}
            />
            <ContentItem
              step="003"
              title="Faciales"
              subtitle={`Seguimiento mensual de avanzados.
        <br /> procedimientos con los mejores <br />
        productos dermatológicos.
                      `}
            />
            <ContentItem
              step="004"
              title="Corporales"
              subtitle={`Bioestimuladores para mejorar
        <br /> textura de la piel corporal <br />
        combinando aparatología médica.
                      `}
            />
          </Grid2>
        </Grid2>
      </Container>
    </Grid2>
    // </Container>
  );
};

export default ServicesPage;
