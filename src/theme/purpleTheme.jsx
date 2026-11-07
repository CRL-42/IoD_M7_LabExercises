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
        h1: { fontSize: 32 }
    },
    shape: { borderRadius: 5 },
    components: {
        MuiAppBar: {defaultProps: { position: 'static'}},
        MuiCard: {defaultProps: {  
            sx: { p: 1, border: '1px solid grey', bgcolor: 'secondary.main' } 
        }},
        MuiButton: {defaultProps: { variant: 'contained' }},
        MuiTextField: { defaultProps: { variant: 'filled' }},
        MuiFormControl: { defaultProps: { 
            sx: { m: 1, width: '25ch' }, 
            variant: 'filled' 
        }}
    }
});
// Exercise 5 end.