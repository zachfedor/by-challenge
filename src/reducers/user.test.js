import user from './user';
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../actions';

describe('User Reducer', () => {
  it('should return initial state', () => {
    const action = { type: 'fake action' };
    expect(user(undefined, action)).toBe(null);
  });

  it('should return user object on login', () => {
    const action = {
      type: LOGIN_SUCCESS,
      user: { name: 'bob' },
    };
    expect(user({}, action)).toEqual({ name: 'bob' });
  });

  it('should return empty user on logout', () => {
    const action = {
      type: LOGOUT_SUCCESS
    };

    expect(user({ name: 'bob' }, action)).toEqual(null);
  });
});
