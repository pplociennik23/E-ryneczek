import { AppBar } from '@mui/material';
import logo from '../../images/logo.png';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <AppBar className={styles.appBar} position="static" color="inherit">
                        <img className={styles.image} src={logo} alt="logo"/>
        </AppBar>
    )
}

export default Navbar;