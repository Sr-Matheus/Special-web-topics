import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';






const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (

    <div className="container">


        <form action="">

            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                
            

            <Card sx={{  width: 500, height: 500, p: 2, border: '.5px solid grey' }}>        
                
                <CardContent spacing={{ xs: 2, sm: 3 }} direction="row" useFlexGap flexWrap="wrap">
                    <Typography variant="h2" component="div">
                    Alunos
                    </Typography>
                    <hr></hr>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                        
                        <TextField required id="standard-required" label="Nome" variant="filled"/>
                        <TextField required id="standard-required" label="CPF" variant="filled" />
                    </Stack>
                    

                </CardContent>
                <CardActions>
                    <Button variant="contained" >Enviar</Button>
                </CardActions>
            </Card>

            </Stack>

        </form>



    </div>

    
  );
}