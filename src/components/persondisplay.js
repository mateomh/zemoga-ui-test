/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import PersonDispStyles from '../assets/stylesheets/persondisplay.module.css';
import PersonInformation from './personinformation';

const PersonDisplay = props => {
  const { person } = props;
  let style = `${PersonDispStyles.Container}`;
  let personName;
  let section;

  switch (person) {
    case 'kanye':
      style = style.concat(` ${PersonDispStyles.Kanye}`);
      personName = 'Kanye West';
      section = 'Entertainment';
      break;
    default:
      break;
  }

  return (
    <div className={style}>
      <PersonInformation name={personName} section={section} />
    </div>
  );
};

PersonDisplay.propTypes = {
  person: PropTypes.string.isRequired,
};

export default PersonDisplay;
