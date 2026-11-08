import './App.css';
import { UserProvider } from './context/UserContext';
import MyThemeProvider from './context/MyThemeProvider';
import NavBar from './component/NavBar';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from "@mui/material"
import { purpleTheme } from './theme/purpleTheme';

function App() {

  return (
    // Exercise 4.
    <>
      <UserProvider>
        <MyThemeProvider>
          <ThemeProvider theme={purpleTheme}>
            <GlobalStyles styles={(theme) => theme.customGlobalStyles} />
            <NavBar />
            <AppRoutes />
          </ThemeProvider>
        </MyThemeProvider>
      </UserProvider>
    </>
    // Exercise 4 end.
  )
}

export default App
