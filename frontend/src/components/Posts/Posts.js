import React from "react";
import Post from "./Post/Post.js";
import mockPosts from '../../mock/mockPosts.js'
import styles from './Posts.module.css'

import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";

const Posts = ({setCurrentId}) => {

    const posts = useSelector((state) => state.posts);
    //const posts = mockPosts;

    console.log(posts);
    
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