import React, { Component } from 'react';
import { Box, Button, Paper , Typography, CardMedia, Grid, Container} from '@material-ui/core/';
import logo from './landingphoto.jpg'
import Landingcard from './Landingcard'
import {Route , Switch } from "react-router-dom"
import Data from "./Data"
import iet from  './iet.jpg'
import sgs from  './sgs.jpg'
import ranjit from  './ranjit.jpg'
import acropolish from  './acropolish.jpg'
import {Link} from 'react-router-dom'


class Landing extends Component{
    constructor(props){
        super(props)
        this.state={
            Data:Data
        }
    }
    render()
    {
        return(
            <>
            <Box  style={{backgroundColor:"#1f78e6"}} p={3}>
                
                <Container>
                    <Grid container >
                        <Grid item xs={7}></Grid>
                        <Grid container item xs={5} spacing={4} >
                            <Grid item>  <Typography variant="h5">  <Link to="/" style={{color:"#ffffff"}}> HOME </Link> </Typography> </Grid>
                            <Grid item>  <Typography variant="h5">  <Link to="/about" style={{color:"#ffffff"}}> ABOUT US</Link> </Typography> </Grid>
                            <Grid item>  <Typography variant="h5">  <Link to="/contact" style={{color:"#ffffff"}}> CONTACT US </Link></Typography> </Grid>
                        </Grid>

                    <Grid  item sm={12} justify="center">
                        <img src={logo} height="500" width="100%" style={{marginTop:"5px"}}/>
                    </Grid>

                    </Grid>
                </Container>
            </Box>
        
    
            <Grid container component={Box} p={4} m={3}>
                <Grid item sm={12}>
                    <Typography variant="h3" align="center"> Colleges Associated with Us...</Typography>
                </Grid>
            </Grid>
            
            <Grid container component={Box} justify="center">
        
                     <Landingcard image={iet} college="Institute Of Engineering & Technology" short="IET-DAVV , 1996" fun={this.props.fun}/> 
                     <Landingcard image={sgs} college="SGS-ITS (RGPV) 1996 , INDORE" short="SGS-ITS , 1996" fun={this.props.fun}/> 
                     <Landingcard image={ranjit} college="Maharana Ranjit College, INDORE" short="Maharaja Ranjit ,1998" fun={this.props.fun}/> 
                     <Landingcard image={acropolish} college="Acropolis Institute of Engineering" short="Acropolis" fun={this.props.fun}/> 

                
            </Grid >

            <Paper style={{backgroundColor:"#d8d8d8"}} component={Box} p={4}>
                <Grid container spacing={4}>
                    <Grid item sm={4}> 
                      <Paper style={{height:"600" }} component={Box} p={4}> 
                          
                          <Typography variant="h3" align="center"> Our Target </Typography>
                          <Typography variant="h6" align="center"> We want to provide student a complete knowledge and well structured information and share knowledge regarding various topic</Typography>
                      </Paper>
                    </Grid>
                    <Grid item sm={4}> 
                    <Paper style={{height:"600" }} component={Box} p={4}> 
                          
                          <Typography variant="h3" align="center"> Our Aim </Typography>
                          <Typography variant="h6" align="center"> To resolve the difficulties face by students and ease their live by proving them a comman platform lying out several services</Typography>
                      </Paper>
                    </Grid>
                    <Grid item sm={4}> 
                    <Paper style={{height:"600" }} component={Box} p={4}> 
                          
                          <Typography variant="h3" align="center"> Our Vision </Typography>
                          <Typography variant="h6" align="center"> To provide a platform for E-Commerce , Exchange service , Event information , opportunity to bring theirtalent in light and much more </Typography>
                      </Paper>
                    </Grid>

                </Grid>
            </Paper>
        
            </>
        )
    }
}

export default Landing