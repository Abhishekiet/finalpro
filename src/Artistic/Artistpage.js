import React, { Component } from 'react';
import Artistcard from './Artistcard'
import { Box, Button, Paper , Typography, CardMedia, Grid, Container} from '@material-ui/core/';


class Artistpage extends Component{
    render()
    { 
        const show = this.props.Artist.map(a=><Artistcard key={a.id} title={a.title} madeby={a.madeby} 
        contact={a.contact} branch={a.branch} image={a.image}/>) 
        return(
            <>
            <Container>
                <Grid container component={Box} m={2} ml={0} border={1} boxShadow={1}>
                    
                    <Grid item sm={12}>
                         <Typography align="center" variant="h2" color="secondary" style={{marginTop:"2%",textDecoration:"underline",color:"#FF0000"}}> Artistic Talent </Typography>                        
                    </Grid>

                    <Grid item sm={12}>
                        {show}
                    </Grid>

                </Grid>
            </Container>
            </>
        )
    }
}
export default Artistpage