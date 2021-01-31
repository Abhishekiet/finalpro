import React, { Component } from 'react';
import Shirtcard from './Shirtcard'
import { Box, Button, Paper , Typography, CardMedia, Grid, Container} from '@material-ui/core/';


class Shirts  extends Component{
    render(){
        const show=this.props.Shirts.map(a=> <Shirtcard key = {a.id}  title = {a.title} image = {a.image} ditributor = {a.distributor}
            contact = {a.contact}/>)
        return(
            <>
            <Grid container>
                
                <Grid item sm={12}>
                    <Typography align="center" variant="h2" color="secondary"  style={{marginTop:"2%",textDecoration:"underline" ,color:"#FF0000"}}> Shirts </Typography>
                </Grid>

                <Grid container item sm={12}>
                   {show}
                </Grid>
                
            </Grid>
            </>
        )
    }
}
export default Shirts