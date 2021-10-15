import styles from './Navigation.module.css';
import NavigationMenu from './navigationurl/NavigationMenu';

const Navigation = (props) => {
    return (
      <nav className={styles.nav}>
       <a href="#tfgdfgd"> <img
          src="https://image.freepik.com/free-psd/logo-mockup-grey-wall_35913-2179.jpg?"  width="80" height="50"   alt="logo" 
        /></a>
        <ul>
          <NavigationMenu list="Home" />
          <NavigationMenu list="About-us" />
          <NavigationMenu list="Career" /> <NavigationMenu list="Contact-us" />
        </ul>
      </nav>
    );
}

export default Navigation;