import { FC, ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <PathProvider currentPath="/#main">{children}</PathProvider> */}
      {children}
    </ThemeProvider>
  );
};

ProvidersWrapper.propTypes = {};

export default ProvidersWrapper;
