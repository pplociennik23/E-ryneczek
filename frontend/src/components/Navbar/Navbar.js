import { AppBar } from '@mui/material';
import eryneczek from '../../images/eryneczek.png';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <AppBar className={styles.appBar} position="static" color="inherit">
                        <img className={styles.image} src={eryneczek} alt="e-ryneczek"/>
        </AppBar>
    )
}

export default Navbar;