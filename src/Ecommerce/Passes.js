import React, { Component } from 'react';
import { Box, Button, Paper , Typography, CardMedia, Grid, Container} from '@material-ui/core/';
import Passcard from './Passcard'

class Passes  extends Component{
    render(){
        const show= this.props.Passes.map(a=><Passcard key={a.id} title={a.title} rs={a.rs} distributor={a.distributor} 
        image={a.image} contact={a.contact}/>)
        return(
            <>
            <Grid container>
                
                <Grid item sm={12}>
                    <Typography align="center" variant="h2" color="secondary"  style={{marginTop:"2%",textDecoration:"underline" ,color:"#FF0000"}}> Passes </Typography>
                </Grid>

                <Grid container item sm={12}>
                   {show}
                </Grid>
                
            </Grid>
            </>
        )
    }
}
export default Passes