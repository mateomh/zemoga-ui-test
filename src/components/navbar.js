import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavStyles from '../assets/stylesheets/navbar.module.css';

const NavBar = () => (
  <div className={NavStyles.NavBar}>
    <div className={NavStyles.NavLogo}>Rule of Thumb</div>
    <a href="http://www.google.com" className={NavStyles.NavItem}>Past Trials</a>
    <a href="http://www.google.com" className={NavStyles.NavItem}>How It Works</a>
    <a href="http://www.google.com" className={NavStyles.NavItem}>Log In / Sign Up</a>
    <a href="http://www.google.com" className={NavStyles.NavItem}>
      <FontAwesomeIcon icon={faSearch} />
    </a>
  </div>
);

export default NavBar;
