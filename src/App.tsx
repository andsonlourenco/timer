import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./components/styles/global";
import { defaultTheme } from "./components/styles/themes/default";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
