import { brown } from '@mui/material/colors';

export const muiStyles = {
    light: {
        button: {
            margin: "1rem", 
            backgroundColor: brown[200],
            color: "black"
        },
        input: {
            marginTop: "1rem",
            color: "black"
        }

    },
    dark: {
        button: {
            margin: "1rem",
            backgroundColor:  brown[700],
            color: "white"

        },
        input: {
            marginTop: "1rem",
            color: "white"
        }
    }
}