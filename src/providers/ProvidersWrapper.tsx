import { FC, ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { TourProvider } from "@reactour/tour";
import { CssBaseline } from "@mui/material";

// import '@/global.css'

// import { PathProvider } from "@/context/PathContext";
import theme from "../theme";

interface ProvidersWrapperProps {
  children: ReactNode;
}
/**
 * ProvidersWrapper component.
 *
 * @param children - The child components to be wrapped by the providers.
 * @returns A component that provides various context providers.
 */
const ProvidersWrapper: FC<ProvidersWrapperProps> = ({ children }) => {
  const steps = [
    {
      selector: ".right-arrow-btn",
      content:
        "Haz clic aquí para avanzar al siguiente slide o desliza hacia la derecha",
    },
    {
      selector: ".left-arrow-btn",
      content:
        "Haz clic aquí para regresar al slide anterior o desliza hacia la izquierda",
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <TourProvider steps={steps}>
        <CssBaseline />
        {/* <PathProvider currentPath="/#main">{children}</PathProvider> */}
        {children}
      </TourProvider>
    </ThemeProvider>
  );
};

ProvidersWrapper.propTypes = {};

export default ProvidersWrapper;
