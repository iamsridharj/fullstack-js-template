// src/utils/testHelpers.tsx
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from "src/hooks/ui/useTheme";

const RenderWithTheme = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

const render = (ui: React.ReactElement, options = {}) => {
  return rtlRender(
    <RenderWithTheme>
      {ui}
    </RenderWithTheme>,
    options
  );
};

export * from '@testing-library/react';
export { render };
