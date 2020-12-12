/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */

import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import PersonInfoStyles from '../assets/stylesheets/personinfo.module.css';

const VotePanel = () => {
  const defaultVote = {
    person: '',
    voted: false,
    vote: null,
  };

  const [vote, setVote] = useState(defaultVote);
  console.log(vote);

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
    if (vote.vote !== null) {
      setVote({ ...vote, voted: true });
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

export default VotePanel;
