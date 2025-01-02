import React , { useEffect, useState } from "react";
import { Container, AppBar, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts.js'

import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";

import eryneczek from './images/eryneczek.png';
import styles from './App.module.css'

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return(
        <Container maxwidth="lg">
            <AppBar className={styles.appBar} position="static" color="inherit">
                <img className={styles.image} src={eryneczek} alt="e-ryneczek" height="60px"/>
            </AppBar>
            <Grow in>
                 <Container>
                    <Grid container className={styles.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
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