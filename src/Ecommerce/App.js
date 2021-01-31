import React, { Component } from 'react';
import Ecommercepage from './Ecommercepage'

class Appecommerce extends Component{
    render()
    {
        return(
            <Ecommercepage Passes={this.props.Passes} Shirts={this.props.Shirts}/>
        )
    }
}
export default Appecommerce 