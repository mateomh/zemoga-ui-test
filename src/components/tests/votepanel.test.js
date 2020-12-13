import { render, screen } from '@testing-library/react';
import PropTypes from 'prop-types';
import VotePanel from '../votepanel';

describe('VotePanel Component', () => {
  const mockGoodFcn = jest.fn();
  const mockBadFcn = jest.fn();
  beforeEach(() => {
    render(
      <VotePanel
        good={mockGoodFcn}
        bad={mockBadFcn}
      />,
    );
  });

  it(
    '1. Checks the Vote button is rendered',
    () => {
      const button = screen.getByText('Vote Now');
      expect(button).toBeDefined();
    },
  );

  it(
    '2. Checks the thumbs up button is rendered',
    () => {
      const button = document.getElementById('Good');
      expect(button).toBeDefined();
    },
  );

  it(
    '3. Checks the thumbs down button is rendered',
    () => {
      const button = document.getElementById('Bad');
      expect(button).toBeDefined();
    },
  );

  it(
    '4. Checks the vote button does not accept the vote without selecting an option',
    () => {
      const button = screen.getByText('Vote Now');
      button.click();
      expect(button.textContent).toBe('Vote Now');
    },
  );

  it(
    '5. Checks the vote button accepts the vote with an option selected',
    () => {
      const button = screen.getByText('Vote Now');
      const good = document.getElementById('Good');
      good.click();
      button.click();
      expect(button.textContent).toBe('Vote Again');
    },
  );

  it(
    '6. Checks the good votes counting function gets called',
    () => {
      const button = screen.getByText('Vote Now');
      const good = document.getElementById('Good');
      good.click();
      button.click();
      expect(mockGoodFcn).toBeCalledTimes(1);
    },
  );

  it(
    '7. Checks the bad votes counting function gets called',
    () => {
      const button = screen.getByText('Vote Now');
      const bad = document.getElementById('Bad');
      bad.click();
      button.click();
      expect(mockBadFcn).toBeCalledTimes(1);
    },
  );

  it(
    '8. Checks the types for the props',
    () => {
      expect(VotePanel.propTypes.good).toBe(PropTypes.func.isRequired);
      expect(VotePanel.propTypes.bad).toBe(PropTypes.func.isRequired);
    },
  );
});
