import React, { Component } from 'react';
import { Box, Button, Paper , Typography, CardMedia, Grid, Container , Card, CardContent } from '@material-ui/core/';
import logo from '../Images/Iet/Events/2.jpg'

class Eventscard extends Component{
    render()
    {
        
        return(
            <>
            <Container component={Box} m={4} style={{width:"70%" }} boxShadow={2} p={2} bgcolor="#000080">
                <Card component={Box} p={4} elevation={14}>
                    <Grid container >
                        
                        <Grid item sm={12}>
                            <Typography align="center" variant="h2" gutterBottom style={{textDecoration:"underline",color:"#000080"}}>
                                 {this.props.title}
                            </Typography>

                        </Grid>

                        <Grid item sm={12} container justify="center" >
                            <img src= {this.props.image}  width="90%" height="400" className="m-1"/>
                        </Grid>

                        <Grid item sm={1}></Grid>
                        <Grid item sm={10} component={Box} p={3} >
                            <Typography align="center" variant="h6" gutterBottom > 
                               {this.props.description}
                            </Typography>
                        </Grid>
                        

                        <Grid item sm={10} style={{marginLeft:"8%"}} >
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline"> Place -</Typography>
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline" color="secondary"> {this.props.place} </Typography>
                              <br></br>
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline"> Date -</Typography>
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline" color="secondary"> {this.props.date}</Typography>
                               <br></br>
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline"> Passes -</Typography>
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline" color="secondary"> {this.props.passes}</Typography>

                        </Grid>

                    </Grid>
                </Card>
            </Container>
            </>
        )
    }
} 
export default Eventscard