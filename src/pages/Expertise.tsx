import {
  Container,
  Grid2,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import desktopBackgroundImage from "../assets/images/desktop4.webp";
import mobileBackgroundImage from "../assets/images/mobile4.webp";
import { ContentItem } from "../components/common/ContentItem";
import DImageBox from "../components/common/DImageBox";
import minLogo from "../assets/images/minLogo.svg";

const Expertise = () => {
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
              Expertise
            </Typography>
          </Grid2>
          <Grid2
            container
            pt={6}
            rowGap={2}
            columnGap={4}
            justifyContent={{
              xs: "center",
              md: "flex-start",
            }}
          >
            <ContentItem
              step="001"
              title="Diseño Facial"
              subtitle={`Técnicas de microneedling <br/>
y peeling facial.<br/><br/> Estimulación del colágeno de la piel para favorecer la regeneración celular
a largo plazo y realzar el aspecto físico.
                      `}
            />
            <ContentItem
              step="002"
              title="Constante Actualización"
              subtitle={`Experiencia en Medicina Estética<br/><br/>
La curiosidad y la perseverancia nos permiten
evolucionar para brindar cada vez mejores resultados a nuestros pacientes.
                      `}
            />
            <ContentItem
              step="003"
              title="Revitalización Facial"
              subtitle={`Una piel sana es una piel bella<br/><br/>
Logrado mediante estimuladores
celulares que ayudan a revitalizar
la piel.
                      `}
            />
          </Grid2>
        </Grid2>
        {!isMobile && (
          <DImageBox
            alt="sublogo"
            objectFit="none"
            src={minLogo}
            sx={{
              maxWidth: isMobile ? 148 : 640,
              height: "auto",
              position: "absolute",
              top: 180,
              right: 74,
            }}
          />
        )}
      </Container>
    </Grid2>
    // </Container>
  );
};

export default Expertise;
