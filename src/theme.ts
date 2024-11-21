"use client";

import {
  createTheme,
  Palette,
  PaletteColor,
  responsiveFontSizes,
} from "@mui/material/styles";
import "@fontsource/barlow/300.css";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/700.css";

import "@fontsource/barlow-condensed/300.css";
import "@fontsource/barlow-condensed/400.css";
import "@fontsource/barlow-condensed/500.css";
import "@fontsource/barlow-condensed/700.css";

import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

import "./assets/fonts/GangsterSN-Italic.otf";
import "./assets/fonts/MenoDisplay-XCondLight.otf";
import "./assets/fonts/RoslindaleDisplayCondensed-Light.otf";
import { CLAY, PEACH, PRIMARY, SECONDARY } from "./colors";

// Define custom types for palette keys
export type PaletteKey = keyof {
  [Key in keyof Palette as Palette[Key] extends PaletteColor
    ? Key
    : never]: true;
};
// Extend Palette and PaletteOptions interfaces to include custom color keys
declare module "@mui/material/styles" {
  interface Palette {
    clay: Palette["primary"];
    peach: Palette["primary"];
  }

  interface PaletteOptions {
    clay?: PaletteOptions["primary"];
    peach?: PaletteOptions["primary"];
  }
}

// Extend ButtonPropsColorOverrides for MuiButton
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    clay?: true;
    peach?: true;
  }
}
/**
 * Default MUI theme without customizations.
 */
const theme = createTheme({
  typography: {
    fontFamily: [
      "Barlow",
      "Barlow Condensed",
      "Montserrat",
      "Gangster",
      "Meno",
      "Roslindale",
    ].join(","),
  },
  palette: {
    primary: PRIMARY,
    secondary: SECONDARY,
    clay: CLAY,
    peach: PEACH,
  },
});

export default responsiveFontSizes(theme);
