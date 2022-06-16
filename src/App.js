import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.scss';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Container } from '@mui/material';
import { Header } from './components/Header';
import { FullMovie } from './pages/FullMovie';

export const ColorModeContext = React.createContext();

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <div className={`App ${darkMode ? 'App_dark' : ''}`}>
      <ColorModeContext.Provider value={{ darkMode, setDarkMode }}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Header />
          <Container maxWidth="lg">
            <Home />
            {/* <FullMovie /> */}
            {/* <About /> */}
          </Container>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
