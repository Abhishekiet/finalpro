import React, { Component } from 'react';
import { Box, Button, Paper , Typography, CardMedia, Grid, Container} from '@material-ui/core/';
import yellow from '@material-ui/core/colors/yellow';
import logo from './ram.jpg'
import Image from 'material-ui-image'


const Header=(props)=>{
    return(
        <>
         <Paper bgcolor="#ffff00" component={Box} width="90%" margin="auto"  mt={4} p={3} borderLeft={12} borderColor="#d50000" 
         boxShadow={5}>
             <Grid container >
                
                 <Grid item sm={3} align="center">
                    <Image src={logo} />
                 </Grid>

                 <Grid item lg={9} >
                     <Box mt={1} >
                       <Typography variant="h3" gutterBottom>Institute Of Engineering & Technology </Typography>
                       <Typography variant="h5" color="primary" style={{marginLeft:"20%"}}> DEVI AHILYA VISHWAVIDYALAYA </Typography>
                     </Box>
                 </Grid>
            
             </Grid>
            
          </Paper>
         
        </>
    )
}
export default Header