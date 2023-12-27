// eslint-disable-next-line
import { Pallete, PalleteColor } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface PalleteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PalleteColor;
  }
}
