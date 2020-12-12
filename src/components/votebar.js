/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BarStyles from '../assets/stylesheets/votebar.module.css';

const VoteBar = props => {
  const { goodVotes, badVotes } = props;
  const totalVotes = goodVotes + badVotes;
  const good = Math.round((goodVotes / totalVotes) * 100);
  const bad = 100 - good;

  const goodStyle = {
    width: `${good}%`,
    backgroundColor: '#00C19F',
    height: '100%',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div className={BarStyles.Bar}>
      <div style={goodStyle}>
        <span className={BarStyles.Text}>{`${good}%`}</span>
        <FontAwesomeIcon icon={faThumbsUp} />
      </div>
      <span className={BarStyles.Bad}>
        {`${bad}%`}
        <FontAwesomeIcon icon={faThumbsDown} flip="horizontal" className={BarStyles.Text} />
      </span>
    </div>
  );
};

VoteBar.propTypes = {
  goodVotes: PropTypes.number.isRequired,
  badVotes: PropTypes.number.isRequired,
};

export default VoteBar;
