import { Container, CssBaseline } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const paletteType = darkmode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleMode() {
    setDarkmode(!darkmode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkmode} handleMode={handleMode} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;