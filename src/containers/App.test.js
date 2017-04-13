import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createMockStore from '../store/mock';
import App from './App';


describe('<App />', () => {
  const store = createMockStore({
    user: null,
    settings: {},
    error: '',
    loading: false,
  });

  it('renders without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(component).toBeDefined();
  });
});
