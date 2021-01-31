import React, { Component } from 'react';
import Exchangecard from './Exchangecard'
import { Box, Button, Paper , Typography, CardMedia, Grid, Container} from '@material-ui/core/';


class Exchangepage extends Component{
    render()
    {
        const show = this.props.Exchange.map(a=><Exchangecard key={a.id} title={a.title}
      description={a.description} name={a.name} contact={a.contact} price={a.price} image={a.image}/>)
        return(
            <>
            <Container>
                <Grid container component={Box} m={2} ml={0} border={1} boxShadow={1}>
                    
                    <Grid item sm={12}>
                         <Typography align="center" variant="h2" color="secondary" style={{marginTop:"2%",textDecoration:"underline" ,color:"#FF0000"}}> Exchange Material </Typography>                        
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
export default Exchangepage