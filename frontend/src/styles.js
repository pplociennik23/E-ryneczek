import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
      },
      image: {
        marginLeft: "30px",
        padding: "6px"
      },
      [theme.breakpoints.down('sm')]:
      {
        mainContainer: {
          flexDirection: "column-reverse"
      }
    }
}));