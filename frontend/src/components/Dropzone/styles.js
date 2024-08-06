import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({

  fileInputContainer: {
    width: '100%',
    cursor: 'pointer',
  },

  fileInput: {
    marginTop: '10px', 
    padding: '10px 16px', 
    width: '100%', 
    boxSizing: 'border-box', 
    textAlign: 'center', 
    border: '1px solid #ccc',
    color: '#7D6E82',
    borderRadius: '4px',
    fontSize: '1em',
    cursor: 'pointer',
  },

  fileInputInfoText: {
    margin: '5px 0',
    color: 'grey',
    fontSize: '0.8em',
    fontFamily: 'Arial',
  }

}));