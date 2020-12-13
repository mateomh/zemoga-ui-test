/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import PersonInfoStyles from '../assets/stylesheets/personinfo.module.css';
import VotePanel from './votepanel';

const PersonInformation = props => {
  const { name, section } = props;
  return (
    <div className={PersonInfoStyles.Container}>
      <h1>{name}</h1>
      <p className={PersonInfoStyles.Little}>
        <b>1 month ago</b>
        &nbsp;in&nbsp;
        {section}
      </p>
      <p className={PersonInfoStyles.Text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque non elit massa. Donec quis turpis nisi.
        Mauris ultricies eget nisi id iaculis.
      </p>
      <VotePanel />
    </div>
  );
};

PersonInformation.propTypes = {
  name: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
};

export default PersonInformation;
