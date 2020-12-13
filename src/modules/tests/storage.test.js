import * as Storage from '../storage';

describe('Storage Module', () => {
  it(
    '1. Checks if it saves things to the local storage',
    () => {
      const testStorage = window.localStorage;
      const mockVotes = {
        good: 'Test good',
        bad: 'test Bad',
      };

      Storage.saveVotes('Testy', mockVotes);
      const item = JSON.parse(testStorage.getItem('Testy'));
      expect(item).toEqual(mockVotes);
    },
  );

  it(
    '2. Checks if it gets things from the local storage',
    () => {
      const testStorage = window.localStorage;
      const mockVotes = {
        good: 'Test good',
        bad: 'test Bad',
      };
      testStorage.setItem('testy', JSON.stringify(mockVotes));
      const item = Storage.getVotes('testy');
      expect(item).toEqual(mockVotes);
    },
  );
});
