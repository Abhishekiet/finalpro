import React, { Component } from 'react';
import Shirts from './Shirts'
import Passes from './Passes'
import Ecommercenav from './Ecommercenav'
import { Box, Button, Paper , Typography, CardMedia, Grid, Container} from '@material-ui/core/';
import { Route ,Switch} from 'react-router-dom'


class Ecommercepage extends Component{
    render()
    { 

        return(
            <>
            <Container>
                <Grid container component={Box} m={2} ml={0} border={1} boxShadow={1}>
                    
                    <Grid item sm={12}>
                        <Ecommercenav />
                    </Grid>

                    <Grid item sm={12}>
                <Switch>
                    <Route exact path="/college/ecommerce/passes" component={Passes} > <Passes Passes={this.props.Passes}/> </Route>
                    <Route path="/college/ecommerce/" component={Shirts} > <Shirts Shirts={this.props.Shirts}/> </Route>

                </Switch>
                    </Grid>

                </Grid>
            </Container>
            </>
        )
    }
}
export default Ecommercepage