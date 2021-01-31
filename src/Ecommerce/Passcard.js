import React, { Component } from 'react';
import { Box, Button, Paper , Typography, CardMedia, Grid, Container , Card, CardContent } from '@material-ui/core/';
import logo from '../ram.jpg'

class Passcard extends Component{
    render()
    { console.log(this.props.image)
        return(
            <>
            <Grid container item sm={6}>
                <Container component={Box} m={3} >
                    <Paper elevation={6} component={Box} border={3}>
                        <Grid conntainer>
                            <Grid item sm={12} component={Box} pt={2}>
                                <Typography variant="h2" color="error" align="center" style={{textDecoration:"underline",color:"#000080"}}>
                                     {this.props.title}
                                </Typography>
                            </Grid>

                            <Grid item sm={12} container justify="center" component={Box} p={2} >
                                <img src={this.props.image} width="90%" height="400" className="m-1"/>
                            </Grid>

                        <Grid container component={Box} pl={3} mb={2}> 
                             <Grid item sm={12}>
                                <Typography variant="h3"  align="center"> {this.props.rs} /-</Typography>
                             </Grid>
                            
                             <Grid item sm={6}>
                                <Typography variant="h6"  align="left"> Distributer- {this.props.distributor}</Typography>
                             </Grid>
                             <Grid item sm={6}>
                             </Grid>

                             <Grid item sm={6}>
                                <Typography variant="h6"  align="left"> Contact Number- {this.props.contact} </Typography>
                             </Grid>
                        </Grid>               

                        </Grid>
                    </Paper>
                </Container>
            </Grid>
            
            </>
        )
    }
} 
export default Passcard