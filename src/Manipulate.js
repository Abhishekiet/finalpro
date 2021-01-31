import React, { Component } from 'react';
import { Box, Button, Paper , Typography, CardMedia, Grid, Container , Card, CardContent } from '@material-ui/core/';


class Manipulate extends Component{
    render(){
        console.log(this.props.c)

        return(
            <>
            <Typography variant="h3" align="center" style={{color:"#120338"}}> {this.props.college} </Typography> 
            </>
        )
    }
}
export default Manipulate