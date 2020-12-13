import { render, screen } from '@testing-library/react';
import PropTypes from 'prop-types';
import VoteBar from '../votebar';

describe('VoteBar Component', () => {
  it(
    '1. Renders the correct values with the provided votes amount',
    () => {
      render(
        <VoteBar goodVotes={4} badVotes={6} />,
      );

      const item = screen.getAllByText(/[%]/);

      expect(item[0].textContent).toBe('40%');
      expect(item[1].textContent).toBe('60%');

      const parent = item[0].parentElement;

      expect(parent.style.backgroundColor).toBe('rgb(0, 193, 159)');
      expect(parent.style.width).toBe('40%');
    },
  );

  it(
    '2. Renders the correct values with the different votes amount',
    () => {
      render(
        <VoteBar goodVotes={7} badVotes={3} />,
      );

      const item = screen.getAllByText(/[%]/);

      expect(item[0].textContent).toBe('70%');
      expect(item[1].textContent).toBe('30%');

      const parent = item[0].parentElement;

      expect(parent.style.backgroundColor).toBe('rgb(0, 193, 159)');
      expect(parent.style.width).toBe('70%');
    },
  );

  it(
    '3. Checks the types for the props',
    () => {
      expect(VoteBar.propTypes.goodVotes).toBe(PropTypes.number.isRequired);
      expect(VoteBar.propTypes.badVotes).toBe(PropTypes.number.isRequired);
    },
  );
});
