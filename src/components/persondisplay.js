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
    case 'mark':
      style = style.concat(` ${PersonDispStyles.Mark}`);
      personName = 'Mark Zuckerberg';
      section = 'Business';
      break;
    case 'cristina':
      style = style.concat(` ${PersonDispStyles.Cristina}`);
      personName = 'Cristina Fernandez de Kirchner';
      section = 'Politics';
      break;
    case 'malala':
      style = style.concat(` ${PersonDispStyles.Malala}`);
      personName = 'Malala Yousafzai';
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
