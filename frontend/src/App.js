import React , { useEffect, useState } from "react";
import { Container, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts.js'

import Navbar from "./components/Navbar/Navbar.js";
import PostsGrid from "./components/PostsGrid/PostsGrid.js";
import Form from "./components/Form/Form.js";
import styles from './App.module.css'

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return(
        <Container maxwidth="lg">
            <Navbar/>
            <Grow in>
                 <Container>
                    <Grid container className={styles.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <PostsGrid setCurrentId={setCurrentId}/>
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