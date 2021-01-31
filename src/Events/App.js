import React, { Component } from 'react';
import Eventspage from './Eventspage'
import { Box , Container , Grid, Typography} from '@material-ui/core/';

class Appevent extends Component{
    render()
    {
      const Events = this.props.Events

        return(
            <>
             
              <Eventspage Events={Events}/>

            </>
        )
    }
}
export default Appevent