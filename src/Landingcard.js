import React, { Component } from 'react';
import { Box, Button, Paper , Typography, CardMedia, Grid, Container , Card, CardContent } from '@material-ui/core/';
import landingphoto from  './landingphoto.jpg'
import { Link } from "react-router-dom"
import Manipulate from  './Manipulate'


class Landingcard extends Component{
    constructor(props)
    {   super(props)
        this.state={
            a:false ,
            college:this.props.college
        }
    }

    render()
    { 
         const data = this.props.college
        return(
            <>
            <Grid container item sm={5}>
                <Container component={Box} m={3} >
                    <Paper elevation={6} component={Box} border={3}>
                        <Grid conntainer>

                            <Grid item sm={12} container justify="center" component={Box} p={2} >
                                <img src={this.props.image} width="90%" height="400" className="m-1"/>
                            </Grid>

                        <Grid container component={Box} pl={3} mb={2}> 
                             <Grid item sm={12}>
                                <Typography variant="h3"  align="center"> {this.props.short} </Typography>
                              <Link to="/college"> 
                                 <Button variant="contained" size="large" onClick={()=>this.props.fun(data)} style={{backgroundColor:"#ff748c",color:"white", marginLeft:"40%"}}> Visit </Button>
                              </Link>
                             </Grid>
                            
                        </Grid>               

                        </Grid>
                    </Paper>
                    {this.state.a? <Manipulate college={this.props.college}/>:<></>}
                </Container>
            </Grid>
            
            </>
        )
    }
} 
export default Landingcard