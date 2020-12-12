/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */

import PersonInfoStyles from '../assets/stylesheets/personinfo.module.css';
import VotePanel from './votepanel';

const PersonInformation = () => {
  return (
    <div className={PersonInfoStyles.Container}>
      <h1>Person Name</h1>
      <p className={PersonInfoStyles.Little}>time in voting</p>
      <p className={PersonInfoStyles.Text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque non elit massa. Donec quis turpis nisi.
        Mauris ultricies eget nisi id iaculis.
      </p>
      <VotePanel />
    </div>
  );
};

export default PersonInformation;
