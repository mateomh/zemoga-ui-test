/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import PropTypes from 'prop-types';
import PersonInfoStyles from '../assets/stylesheets/personinfo.module.css';

const VotePanel = props => {
  const { good, bad } = props;
  const defaultVote = {
    person: '',
    voted: false,
    vote: null,
  };

  const [vote, setVote] = useState(defaultVote);

  const select = event => {
    const voteSelect = event.target;

    const badButton = document.getElementById('Bad');
    const goodButton = document.getElementById('Good');

    badButton.classList.remove(PersonInfoStyles.Selected);
    goodButton.classList.remove(PersonInfoStyles.Selected);

    voteSelect.classList.add(PersonInfoStyles.Selected);
    setVote({ ...vote, vote: voteSelect.id });
  };

  const submitVote = () => {
    if (vote.voted === true) {
      setVote({ ...defaultVote });
    } else if (vote.vote !== null) {
      setVote({ ...vote, voted: true });
      if (vote.vote === 'Good') {
        good();
      } else {
        bad();
      }
    }
  };

  return (
    <div className={PersonInfoStyles.Voting}>
      { !vote.voted
        ? (
          <div
            id="Good"
            onClick={select}
            className={`${PersonInfoStyles.VoteItem} ${PersonInfoStyles.Good}`}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
          </div>
        )
        : null}
      { !vote.voted
        ? (
          <div
            id="Bad"
            onClick={select}
            className={`${PersonInfoStyles.VoteItem} ${PersonInfoStyles.Bad}`}
          >
            <FontAwesomeIcon icon={faThumbsDown} />
          </div>
        )
        : null}
      <button
        onClick={submitVote}
        type="button"
        className={`${PersonInfoStyles.VoteItem} ${PersonInfoStyles.Button}`}
      >
        {!vote.voted ? 'Vote Now' : 'Vote Again'}
      </button>
    </div>
  );
};

VotePanel.propTypes = {
  good: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};

export default VotePanel;
