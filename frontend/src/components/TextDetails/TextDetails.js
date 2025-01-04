import { Tooltip, Typography } from "@mui/material";

const TextDetails = ({message}) => {

    return(message.length < 100 ? 
         (<Typography variant="body2" color="textSecondary" component="p">{message}</Typography>) : 
         (<Tooltip title={message}>
            <Typography variant="body2" color="textSecondary" component="p">
                {message.substring(0,100) + "..."}
            </Typography>
          </Tooltip>)
)}

export default TextDetails;