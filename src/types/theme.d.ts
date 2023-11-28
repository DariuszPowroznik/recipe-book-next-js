import { RobotoFontFaceOptions } from 'next/font/google';

import { Theme } from '@emotion/react';
import { Theme as MuiTheme } from '@mui/material';

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}

declare module 'next/font/google' {
  export function Roboto(options: RobotoFontFaceOptions): any;
}

declare const darkTheme: Theme;

export default darkTheme;
