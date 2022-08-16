import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./components/styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World</h1>
    </ThemeProvider>
  );
}
