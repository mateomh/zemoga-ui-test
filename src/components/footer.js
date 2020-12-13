import { faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FooterStyles from '../assets/stylesheets/footer.module.css';

const Footer = () => (
  <div className={FooterStyles.Container}>
    <div className={FooterStyles.Section1}>
      <p>Terms and Conditions</p>
      <p>Privacy Policy</p>
      <p>Contact Us</p>
    </div>
    <div className={FooterStyles.Section2}>
      <p>Follow Us</p>
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faTwitter} />
    </div>
  </div>
);

export default Footer;
