import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { translations } from 'src/shared/const/translations';
import darkTheme from 'src/theme/theme';

const text = translations.pl;

export const metadata = {
  title: text.appName.fullName,
  description: text.welcomePage.title,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
