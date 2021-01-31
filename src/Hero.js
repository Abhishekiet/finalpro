import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel'
import { Box ,Card ,Container} from '@material-ui/core/';
import logo from './ram.jpg'


const Hero=(props)=>{
    return(
        <Container >
        <Box p={13} width="90%"  margin="auto" height="25%">
            <Carousel style={{ backgroundColor:"red" , marginTop:"-10%" }} className="">
                
                <img src="https://raw.githubusercontent.com/Abhishekiet/new/master/src/Images/17.jpg" height="400px" width="200px"/>
                <img src={logo} />
                <img />

            </Carousel>
        </Box>
        </Container>
    )
}
export default Hero