import React, { Component } from 'react';
import { Box,  Typography, Grid, Container , Card } from '@material-ui/core/';
//import logo from '../Images/Iet/Events/2.jpg'

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
            </Container>
            </>
        )
    }
} 
export default About