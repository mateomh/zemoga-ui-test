import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from './navbar';
import HeaderStyles from '../assets/stylesheets/header.module.css';

const Header = () => (
  <>
    <div className={HeaderStyles.Container}>
      <NavBar />
    </div>
    <div className={HeaderStyles.Info}>
      <small>What is your opinion</small>
      <h2 className={HeaderStyles.Title}>Pope Francis?</h2>
      <p className={HeaderStyles.Text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque non elit massa. Donec quis turpis nisi.
        Mauris ultricies eget nisi id iaculis.
      </p>
      <span className={HeaderStyles.Good}>
        <FontAwesomeIcon icon={faThumbsUp} />
      </span>
      <span className={HeaderStyles.Bad}>
        <FontAwesomeIcon icon={faThumbsDown} flip="horizontal" />
      </span>
    </div>
  </>
);

export default Header;
