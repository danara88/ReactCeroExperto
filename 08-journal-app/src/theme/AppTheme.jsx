import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

import { purpleTheme } from './purpleTheme';

/**
 * @constant AppTheme
 * @description Higher order component to configure mui theme.
 * To see more visit:
 * https://stackblitz.com/github/mui/material-ui/tree/master/examples/material-ui-vite?file=README.md,src%2Fmain.jsx,src%2Ftheme.js
 */
export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
};
