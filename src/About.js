import React, { Component } from 'react';
import { Box,  Typography, Grid, Container , Card ,Button } from '@material-ui/core/';
//import logo from '../Images/Iet/Events/2.jpg'
import { Link } from "react-router-dom"



class About extends Component{
    render()
    {
        
        return(
            <>
            <Container component={Box} m={4} style={{width:"70%" }} boxShadow={2} p={2} bgcolor="#000080">
                <Card component={Box} p={4} elevation={14}>
                    <Grid container >
                        
                        <Grid item sm={12}>
                            <Typography align="center" variant="h2" gutterBottom style={{textDecoration:"underline",color:"red"}}>
                                 About Us 
                            </Typography>

                        </Grid>

                        <Grid item sm={1}></Grid>
                        <Grid item sm={10} component={Box} p={3} >
                            <Typography align="center" variant="h3" gutterBottom > 
                               This is a final yea project application designed and maintained by Abhishek Dameria
                               and Kuldeep Bhagel of IET-DAVV , Information Technology Department under the supervison of Mrs. Jyoti Haveliya .
                            </Typography>
                        </Grid>
                        

                    </Grid>
                </Card>
                <div style={{marginTop:"4%"}}>
                <Link to="/">
                            <Button variant="contained" size="large" fullWidth color="secondary" onClick={this.Fun1} ><h6> Back To Home </h6></Button>
                             </Link>
                </div>
            </Container>
            </>
        )
    }
} 
export default About