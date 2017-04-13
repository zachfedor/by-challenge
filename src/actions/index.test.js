import * as actions from './index';

describe('Async Action Creators', () => {
  describe('login()', () => {
    it('should dispatch async actions', () => {
      const dispatch = jest.fn();
      return actions.login('guy@daftpunk.com', 'discovery')(dispatch)
        .then(response => {
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0][0]).toEqual({
            type: 'LOGIN_REQUEST',
            email: 'guy@daftpunk.com',
          });
        });
    });
  });
});
