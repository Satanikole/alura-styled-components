import React, {useState} from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Components/UI/Themes";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { ButtonTheme } from "./Components/UI";
import ThemeSwitcher from "./Components/ThemeSwitcher";

function App() {
  const [theme, setTheme] = useState(true);
  const themeToggle = () => {
    setTheme((theme) => !theme)
  }
  return (
  
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
    <GlobalStyle />
    <ButtonTheme onClick={themeToggle}>
      <ThemeSwitcher  theme={theme}/>
    </ButtonTheme>
      <Cabecalho />
      <Container />
      </ThemeProvider>

  );
}

export default App;
