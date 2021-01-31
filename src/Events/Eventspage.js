import React, { Component } from 'react';
import Eventscard from './Eventscard'
import { Box, Button, Paper , Typography, CardMedia, Grid, Container} from '@material-ui/core/';


class Eventspage extends Component{
    render()
    {
        const show = this.props.Events.map(a => <Eventscard key={a.id} title={a.title} description={a.description} place={a.place} date={a.date} passes={a.passes} image={a.image}/>)
        return(
            <>
            <Container>
                <Grid container component={Box} m={2} ml={0} border={1} boxShadow={1}>
                    
                    <Grid item sm={12}>
                        <Typography align="center" variant="h2" style={{marginTop:"2%",textDecoration:"underline",color:"#FF0000" }}> Events </Typography>                       
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
export default Eventspage