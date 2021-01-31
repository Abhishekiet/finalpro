import React, { Component } from 'react';
import { Box, Paper , Typography, CardMedia, Grid, Container} from '@material-ui/core/';
import logo from './image.jpg'


class Test extends Component{
    render()
    {
        return(
            <>
            <Container component={Paper} elvation={5} style={{ padding:"12px"}}>
                
              <Paper elevation={9} component={Box}  bgcolor="#FFFF00" >
                  <Grid container justify="center" alignItems="center" component={Box} p={3} borderLeft={14} borderColor="#d50000" >
                      <Grid item sm={3} >
                          <img src={logo} height="110" width="90%" style={{ marginLeft:"10%"}} />
                      </Grid>
                      <Grid item sm={9} >
                          <Typography variant="h3" align="center" style={{color:"#120338"}}> {this.props.college} </Typography>
                      </Grid>
                  </Grid>
              </Paper>
            
            </Container>
            </>
        )
    }
}
export default Test