import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import eryneczek from './images/eryneczek.png';
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";

const App = () => {

    return(
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">E-ryneczek</Typography>
                <img src={eryneczek} alt="e-ryneczek" height="60px"/>
            </AppBar>
            <Grow in>
                 <Container>
                    <Grid container justifyContent="space-between" alignItems="strech" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                 </Container>
            </Grow>
        </Container>
    )
}

export default App;