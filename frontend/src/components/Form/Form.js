import React, { useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useDispatch } from 'react-redux';
import { createPost, updatePost} from '../../actions/posts.js';
import { useSelector } from "react-redux";

import Dropzone from '../Dropzone/Dropzone.js';
import styles from './Form.module.css'

const Form = ({currentId, setCurrentId}) => {

    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });
    const [fileName, setFileName] = useState('Add photo');
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) 
        {
            setPostData(post);
            setFileName('Change photo');
        }
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId, postData));
        }
        else{
            dispatch(createPost(postData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: '', title: '', message: '', tags: '', selectedFile: ''});
        setFileName('Add photo');
    }

    return(
        <Paper className={styles.paper}>
            <form autoComplete="off" noValidate className={styles.form} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Edit' : 'Create'} an offer</Typography>
                <TextField 
                    name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth
                    value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value}) }/>
                <TextField 
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth 
                    value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value}) }/>
                <TextField 
                    name="message" 
                    variant="outlined" 
                    label="Message" 
                    fullWidth 
                    value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value}) }/>
                <TextField 
                    name="tags" 
                    variant="outlined" 
                    label="Tags" 
                    fullWidth 
                    value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')}) }/>
                <div className={styles.fileInput}>
                    <Dropzone setPostData={setPostData} postData={postData} setFileName={setFileName} fileName={fileName} />
                </div>
                <Button 
                    className={styles.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth>
                    Submit
                </Button>
                <Button 
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth>
                    Clear
                </Button> 
            </form>
        </Paper>
    );
}

export default Form;