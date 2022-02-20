import React from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Components/UI/Themes";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

function App() {
  return (
  
    <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
      <Cabecalho />
      <Container />
      </ThemeProvider>

  );
}

export default App;
