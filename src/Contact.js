import React, { Component } from 'react';
import { Box, Typography, Grid, Container , Card, Button } from '@material-ui/core/';
//import logo from '../Images/Iet/Events/2.jpg'
import { Link } from "react-router-dom"


class Contact extends Component{
    render()
    {
        
        return(
            <>
            <Container component={Box} m={4} style={{width:"70%" }} boxShadow={2} p={2} bgcolor="#000080">
                <Card component={Box} p={4} elevation={14}>
                    <Grid container >
                        
                        <Grid item sm={12}>
                            <Typography align="center" variant="h2" gutterBottom style={{textDecoration:"underline",color:"red"}}>
                                 Contact Us 
                            </Typography>

                        </Grid>

                        <Grid item sm={1}></Grid>
                        <Grid item sm={10} component={Box} p={3} >
                            <Typography align="center" variant="h3" gutterBottom > 
                              Mail us at : <br></br> <br></br>
                              <a href="dameriaabhishe6@gmail.com">dameriaabhishe6@gmail.com</a> <br></br> 
                              <a href="17bit024ietdavv.edu.in@gmail.com">17bit024ietdavv.edu.in@gmail.com</a> 
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
export default Contact