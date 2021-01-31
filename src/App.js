import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import College from './College'
import Landing from './Landing'
import { Box , Container , Grid} from '@material-ui/core/';
import {Route , Switch } from "react-router-dom"
import About from './About'
import Contact from './Contact'


class App extends Component{
  constructor()
  {
    super()
    this.state= {
      iet: " https://my-json-server.typicode.com/Abhishekiet/dataiet/db " ,
      college: "" ,
   }
  }

  fun=(data)=>{
     this.setState({college:data})
     console.log(data)
  }

  render()
  {
    return(
      <>
      <Switch>
       
        <Route path="/college" component={College}>
          <Grid component={Box} p={2} bgcolor="#000080" >
            <College college={this.state.college}/>
          </Grid>
        </Route>

        <Route path="/about" component={About}>
          <Grid >
            <About/>
          </Grid>
        </Route>

        <Route path="/contact" component={Contact}>
          <Grid >
            <Contact/>
          </Grid>
        </Route>

        <Route exact path="/" component={Landing}>
           <Grid >
             <Landing fun={this.fun}/>
           </Grid>
        </Route>
      

     </Switch>
     </>
    )
  }
} 
export default App;

