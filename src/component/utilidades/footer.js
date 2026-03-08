
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Toolbar from '@mui/material/Toolbar';

const footerStyles = {
    backgroundColor : "#0971f1",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#ffffff"
}

export const Footer = () => {
    return(
        <Box sx={footerStyles}>
            <Toolbar   sx={{justifyContent: "space-between"}}>
                <Typography variant="h6" component="div">
                    copyright (©)
                </Typography>  
            </Toolbar>

            <Toolbar>
                <Typography   variant="h6" component="div">
                    Contactar en linkedIn
                </Typography> 
            </Toolbar>
        </Box>
    )
}