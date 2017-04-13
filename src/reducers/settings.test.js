import settings from './settings';
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  UPDATE_SUCCESS,
} from '../actions';


describe('Settings Reducer', () => {
  it('should return initial state', () => {
    const action = { type: 'fake action' };
    expect(settings(undefined, action)).toEqual({});
  });

  it('should populate settings on login', () => {
    const action = {
      type: LOGIN_SUCCESS,
      user: {
        name: 'bob',
        settings: { newsletters: 0 },
      },
    };

    expect(settings({}, action)).toEqual({ newsletters: 0 });
  });

  it('should remove settings on logout', () => {
    const action = { type: LOGOUT_SUCCESS };
    const state = { newsletters: 0 };

    expect(settings(state, action)).toEqual({});
  });

  it('should update a single setting', () => {
    const action = {
      type: UPDATE_SUCCESS,
      setting: 'newsletters',
      value: 1,
    };
    const state = { newsletters: 0 };

    expect(settings(state, action)).toEqual({ newsletters: 1 });
  });
});
