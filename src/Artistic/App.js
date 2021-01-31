import React, { Component } from 'react';
import Artistpage from './Artistpage'

class Appartist extends Component{
    render()
    {
        return(
            <>
              <Artistpage Artist={this.props.Artist}/>
    
            </>
        )
    }
}
export default Appartist 