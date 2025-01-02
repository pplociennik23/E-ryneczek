import React from "react";
import moment from 'moment';
import styles from './Post.module.css'

import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts.js';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
 
const Post = ({post, setCurrentId}) => {

    const dispatch = useDispatch();

    return(
        <Card className={styles.card}>
            <CardMedia className={styles.media} image={post.selectedFile} title={post.title}/>
            <div className={styles.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="h6">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={styles.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="medium"/>
                </Button>
            </div>
            <div className={styles.details}>
               <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={styles.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={styles.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small"/>
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;