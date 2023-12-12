import React , { useEffect, useState } from "react";
import { Container, AppBar, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts.js'

import useStyles from './styles.js';
import eryneczek from './images/eryneczek.png';
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";


const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return(
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={eryneczek} alt="e-ryneczek" height="60px"/>
            </AppBar>
            <Grow in>
                 <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form  currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                 </Container>
            </Grow>
        </Container>
    )
}

export default App;