import React, { Component } from 'react';
import { Box, Button, Paper , Typography, CardMedia, Grid, Container , Card, CardContent } from '@material-ui/core/';
import logo from '../ram.jpg'


class Artistcard extends Component{
    render()
    {
        return(
            <>
            <Container component={Box} m={4} style={{width:"70%" }} boxShadow={2} p={2} bgcolor="#000080">
                <Card component={Box} p={4} elevation={4}>
                    <Grid container >
                        
                        <Grid item sm={12}>
                            <Typography align="center" variant="h2"  style={{textDecoration:"underline",color:"#000080"}} gutterBottom color="primary" >
                                 {this.props.title}
                            </Typography>

                        </Grid>

                        <Grid item sm={12} container justify="center">
                            <img src={this.props.image} width="90%" height="400" className="m-1"/>
                        </Grid>
                        
                        <Grid container component={Box} m={3}>

                        <Grid item sm={10} style={{marginLeft:"8%"}} >
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline"> Made By -</Typography>
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline" color="secondary"> {this.props.madeby} </Typography>
                              <br></br>
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline"> Contact -</Typography>
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline" color="secondary"> {this.props.contact} </Typography>
                               <br></br>
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline"> Branch -</Typography>
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline" color="secondary"> {this.props.branch} </Typography>

                        </Grid>
                        </Grid>

                    </Grid>
                </Card>
            </Container>
            </>
        )
    }
} 
export default Artistcard