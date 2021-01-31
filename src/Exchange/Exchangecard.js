import React, { Component } from 'react';
import { Box, Button, Paper , Typography, CardMedia, Grid, Container , Card, CardContent } from '@material-ui/core/';
import logo from '../ram.jpg'

class Eventscard extends Component{
    render()
    {
        return(
            <>
            <Container component={Box} m={4} style={{width:"70%" }} boxShadow={2} p={2} bgcolor="#eeeeee">
                <Card component={Box} p={4} elevation={4}>
                    <Grid container >
                        
                        <Grid item sm={12}>
                            <Typography align="center" variant="h2" gutterBottom color="primary"  style={{textDecoration:"underline",color:"#000080"}} >
                                 {this.props.title}
                            </Typography>

                        </Grid>

                        <Grid item sm={12} container justify="center">
                            <img src={this.props.image} width="90%" height="240px" height="400" className="m-1"/>
                        </Grid>

                        
                        <Grid item sm={10} component={Box} p={3} pl={5}>

                             <Typography variant="h5" style={{fontWeight:"bold"}} > Discription :</Typography>

                            <Typography align="center" variant="h6" gutterBottom > 
                               {this.props.description}
                            </Typography>
                        </Grid>
                        

                        <Grid item sm={10} component={Box} pl={4} >
                           
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline"> Name-</Typography>
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline" color="secondary"> {this.props.name}</Typography>
                              <br></br>
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline"> Contact -</Typography>
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline" color="secondary"> {this.props.contact} </Typography>
                               <br></br>
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline"> Price -</Typography>
                            <Typography variant="h5" style={{fontWeight:"bold"}} display="inline" color="secondary"> {this.props.price}</Typography>

                        </Grid>

                    </Grid>
                </Card>
            </Container>
            </>
        )
    }
} 
export default Eventscard