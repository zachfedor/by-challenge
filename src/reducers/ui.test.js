import ui from './ui';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SHOW_ERROR,
  HIDE_ERROR,
} from '../actions';


describe('UI Reducer', () => {
  const initialState = {
    loading: false,
    error: '',
  };
  const loadingState = {
    loading: true,
    error: '',
  };
  const errorState = {
    loading: false,
    error: 'An error occured',
  };

  it('should return initial state', () => {
    const action = { type: 'fake action' };

    expect(ui(undefined, action)).toEqual(initialState);
  });

  it('should update loading state on login request', () => {
    const action = { type: LOGIN_REQUEST };

    expect(ui(initialState, action)).toEqual(loadingState);
  });

  it('should update loading state on login response', () => {
    const firstAction = { type: LOGIN_SUCCESS };
    expect(ui(loadingState, firstAction)).toEqual(initialState);

    const secondAction = { type: LOGIN_FAILURE };
    expect(ui(loadingState, secondAction)).toEqual(initialState);
  });

  it('should show an error message', () => {
    const action = {
      type: SHOW_ERROR,
      error: 'An error occured',
    };

    expect(ui(initialState, action)).toEqual(errorState);
  });

  it('should hide an error message', () => {
    const action = { type: HIDE_ERROR };

    expect(ui(errorState, action)).toEqual(initialState);
  });
});
