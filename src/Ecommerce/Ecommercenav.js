import React, { Component } from 'react';
import Shirts from './Shirts'
import Passes from './Passes'
import { Box, Button, Paper , Typography, CardMedia, Grid, Container} from '@material-ui/core/';
import {Link} from 'react-router-dom'


class Ecommercenav extends Component{
    constructor(props){
        super(props)
        this.state={
            Shirts:true ,
            Passes:false

        }
    }

    Fun1=()=>{
        const val1 = this.state.Shirts ? false : true
        const val2 = val1? false:true
 
        this.setState({Shirts:val1 , Passes:val2})
     }        
     
     Fun2=()=>{
        const val1 = this.state.Passes ? false : true
        const val2 = val1? false:true
 
        this.setState({Shirts:val2 , Passes:val1})
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
            <Container component={Box} m={3}>
                <Paper elevation={3}>
                    <Grid container component={Box} p={1} spacing={3}>
                       
                        <Grid item sm={6}>
                            <Link to="/college/ecommerce/shirts">
                            <Button variant="contained" size="large" fullWidth color="primary" onClick={this.Fun1} style={this.state.Shirts?style2:style1}><h6> COLLEGE SHIRTS </h6></Button>
                             </Link>
                        </Grid>


                        <Grid item sm={6}>
                        <Link to="/college/ecommerce/passes">
                            <Button variant="contained" size="large" fullWidth color="primary"  onClick={this.Fun2}style={this.state.Passes?style2:style1}><h6> Passes </h6></Button>
                        </Link>
                        </Grid>

                    </Grid>
                </Paper>
            </Container>
            </>
        )
    }
}
export default Ecommercenav