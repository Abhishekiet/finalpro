import React, { Component } from 'react'; 
import axios from 'axios'
import { Box, Button, Paper , Typography} from '@material-ui/core/';
import red from '@material-ui/core/colors/red';
import Test from './Test'
import Hero from './Hero'
import Navbar from "./Navbar"
import Appevent from "./Events/App"
import Appecommerce from './Ecommerce/App';
import Appartist from './Artistic/App';
import Appexchange from './Exchange/App';
import {Route , Switch } from "react-router-dom"
import Data from "./Data"
import Landing from "./Landing"



class College extends Component{
    constructor(props){
        super(props)
        this.state={
            Events: Data.Events,
            Passes: Data.Passes ,
            Shirts: Data.Shirts ,
            Exchange: Data.Exchange ,
            Artist : Data.Artist
        }
    }

    render()
    {
    console.log(this.props.college)
        return(
            <>
              <Test college={this.props.college}/>
             
             <Box  bgcolor="#f5f5f5" p={1} mt={3} border={1} borderColor="#607d8b">
              
              <Navbar / >
            <Switch>
               
                
                <Route  path="/college/events" component={Appevent} > <Appevent Events={this.state.Events} /> </Route>
                <Route  path="/college/ecommerce" component={Appecommerce} > <Appecommerce Passes={this.state.Passes} Shirts={this.state.Shirts}/> </Route>
                <Route exact path="/college/exchange" component={Appexchange} > <Appexchange Exchange={this.state.Exchange} /> </Route>
                <Route exact path="/college/artist" component={Appartist} > <Appartist Artist={this.state.Artist}/> </Route>

            </Switch>
             
             </Box>  
            </>
        )
    }
}
export default College

