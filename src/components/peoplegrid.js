import PeopleStyles from '../assets/stylesheets/peoplegrid.module.css';
import PersonDisplay from './persondisplay';

const PeopleGrid = () => (
  <div className={PeopleStyles.Container}>
    <h2 className={PeopleStyles.Title}>Votes</h2>
    <PersonDisplay person="kanye" />
    <PersonDisplay person="mark" />
    <PersonDisplay person="cristina" />
    <PersonDisplay person="malala" />
  </div>
);

export default PeopleGrid;
