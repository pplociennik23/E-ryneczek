import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import useStyles from './styles.js';

const Dropzone = ({ setPostData, postData, fileName, setFileName}) => {
    
    const classes = useStyles();

    const onDrop = useCallback((acceptedFile) => {

        setFileName(acceptedFile[0].name);
        const reader = new FileReader();
        reader.onload = () => {
            const file = reader.result;
            setPostData({ ...postData, selectedFile: file});
        };
        reader.readAsDataURL(acceptedFile[0]);
     }, [setPostData, postData]);
    
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false });
    return ( 
        <div {...getRootProps()} className={classes.fileInputContainer}>
            <input {...getInputProps} 
                value={fileName} 
                readOnly 
                className={classes.fileInput}
            />
            {isDragActive ? ( 
                <p className={classes.fileInputInfoText}>Drop the files here ... </p>
            ) : ( 
                <p className={classes.fileInputInfoText}>Drag and drop files here or click to select files... </p>
            )}
        </div>
    )
}

export default Dropzone;