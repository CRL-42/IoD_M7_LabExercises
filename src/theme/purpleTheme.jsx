// Exercise 5.
import { createTheme } from "@mui/material/styles";

export const purpleTheme = createTheme({
    palette: {
        primary: {main: '#5D3FD3', contrastText: '#ea9234'},
        secondary: {main: '#CCCCFF', contrastText: '#305CDE'}
    },
    typography: {
        fontFamily: 'ui-rounded',
        fontSize: 16,
        h1: { fontSize: 32 },
    },
    shape: { borderRadius: 5 },
    components: {
        MuiAppBar: {defaultProps: { position: 'static'}},
        MuiCard: {defaultProps: {  
            sx: { p: 1, border: '1px solid grey', 
                bgcolor: 'secondary.main', height: '100%'
            } 
        }},
        MuiButton: {defaultProps: { variant: 'contained' }},
        MuiTextField: { defaultProps: { variant: 'filled' }},
        MuiFormControl: { defaultProps: { 
            sx: { m: 1, width: '25ch' }, 
            variant: 'filled' 
        }},
        
    },
    customGlobalStyles: {
      a: { 
        color: '#ea9234', 
        "&:visited": { color: "#a05acb" },
        "&:hover": { color: "#bc7428" },
        "&:active": { color: "#56306d" },
      },
    }
});
// Exercise 5 end.