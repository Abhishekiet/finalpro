import React, { Component } from 'react';
import Exchangepage from './Exchangepage'

class Appexchange extends Component{
    render()
    {
    
        return(
            <Exchangepage Exchange={this.props.Exchange}/>
        )
    }
}
export default Appexchange 