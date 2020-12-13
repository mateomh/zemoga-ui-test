import { render, screen } from '@testing-library/react';
import PropTypes from 'prop-types';
import PersonInformation from '../personinformation';

describe('PersonInformation Component', () => {
  it(
    '1. Renders correctly with the provided parameters',
    () => {
      render(
        <PersonInformation name="Testy" section="Testing" />,
      );

      let item = screen.getByText('Testy');
      expect(item).toBeDefined();

      item = screen.getByText(/(Testing)/);
      expect(item).toBeDefined();
    },
  );

  it(
    '2. Checks the types for the props',
    () => {
      expect(PersonInformation.propTypes.name).toBe(PropTypes.string.isRequired);
      expect(PersonInformation.propTypes.section).toBe(PropTypes.string.isRequired);
    },
  );
});
