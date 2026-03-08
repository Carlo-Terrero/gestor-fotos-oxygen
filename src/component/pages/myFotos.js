import { FotosFavo } from '../gestorFoto/fotosFavo';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const styleConiner = {
    marginTop: 12,
}

export const MyFotos = () => {
    
    return(
        <Box sx={styleConiner}>
            <Typography sx={{
                    my: 3,
                    marginLeft:3                
            }}>
                Colección de fotos personal 
            </Typography>            
            
            <FotosFavo/>
        </Box>
    )
}