import React, { Component } from 'react';
import { Box, Button, Paper , Typography, CardMedia, Grid, Container} from '@material-ui/core/';
import {Link} from 'react-router-dom'
import { PhoneEnabled } from '@material-ui/icons';

class Navbar extends Component{
    constructor(props)
    {    super(props)
        this.state={
            Events: false,
            Commerce: false,
            Exchange: false,
            Artist: false

        }
    }
    Fun1=()=>{
       const val1 = this.state.Events ? false : true
       const val2 = val1? false:true

       this.setState({Events:val1 , Commerce:val2, Exchange:val2, Artist:val2})
    }                      
    
    Fun2=()=>{
        const val1 = this.state.Commerce ? false : true
       const val2 = val1? false:true
    

        this.setState({Events:val2 , Commerce:val1, Exchange:val2, Artist:val2})
     }                      

     Fun3=()=>{
        const val1 = this.state.Exchange ? false : true
        const val2 = val1? false:true


        this.setState({Events:val2 , Commerce:val2, Exchange:val1, Artist:val2})
     }                      

     Fun4=()=>{
        const val1 = this.state.Artist ? false : true
        const val2 = val1? false:true


        this.setState({Events:val2 , Commerce:val2, Exchange:val2, Artist:val1})
     }                      

    
    render()
    { 
        const style1={
            backgroundColor:"#000080",
            color:"white"
        }

        const style2={
            backgroundColor:"#ff0040",
            color:"white"
        }
        return(
            <>
        <Container component={Box} mt={2}>
            <Paper component={Box} p={2} elevation={10}>
                <Grid container  spacing={2}>

                    <Grid item lg={3}> <Link to="/college/events"> <Button name="Events" onClick={this.Fun1} variant="contained" size="large" fullWidth  style={this.state.Events?style2:style1} > <h6>Current Events</h6> </Button> </Link> </Grid>
                    <Grid item lg={3}> <Link to="/college/ecommerce"> <Button name="Commerce" onClick={this.Fun2}  variant="contained" size="large" fullWidth style={this.state.Commerce?style2:style1}> <h6>E-Commerce & Passes</h6> </Button>  </Link> </Grid>
                    <Grid item lg={3}> <Link to="/college/exchange"> <Button name="Exchange" onClick={this.Fun3} variant="contained" size="large" fullWidth style={this.state.Exchange?style2:style1}> <h6>Exchange Matrial</h6> </Button>  </Link> </Grid>
                    <Grid item lg={3}> <Link to="/college/artist"> <Button name="Artist" onClick={this.Fun4} variant="contained" size="large" fullWidth style={this.state.Artist?style2:style1}> <h6>Artistic Talent</h6> </Button>  </Link> </Grid>

                </Grid>
            </Paper>
        </Container>
            </>
        )
    
}
    
}
export default Navbar
