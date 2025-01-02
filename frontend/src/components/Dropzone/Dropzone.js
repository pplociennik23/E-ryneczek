import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import styles from './Dropzone.module.css'

const Dropzone = ({ setPostData, postData, fileName, setFileName}) => {
    
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
        <div {...getRootProps()} className={styles.fileInputContainer}>
            <input {...getInputProps} 
                value={fileName} 
                readOnly 
                className={styles.fileInput}
            />
            {isDragActive ? ( 
                <p className={styles.fileInputInfoText}>Drop the files here ... </p>
            ) : ( 
                <p className={styles.fileInputInfoText}>Drag and drop files here or click to select files... </p>
            )}
        </div>
    )
}

export default Dropzone;