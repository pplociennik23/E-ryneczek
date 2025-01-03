import React from "react";
import Post from "./Post/Post.js";
import mockPosts from '../../mock/mockPosts.js'
import styles from './Posts.module.css'

import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";

const Posts = ({setCurrentId}) => {

    const useDatabase = process.env.REACT_APP_USE_DATABASE === 'true';
    const databasePosts = useSelector((state) => state.posts);
    const posts = useDatabase ? databasePosts : mockPosts;

    return(
            !posts.length ? <CircularProgress/> : (
            <Grid className={styles.mainContainer} container alignItems="stretch" spacing={3}> 
                {
                    posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    );
}

export default Posts;