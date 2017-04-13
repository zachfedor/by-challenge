import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createMockStore from '../store/mock';
import Root from './Root';


describe('<Root />', () => {
  const mockStore = createMockStore();

  it('renders without crashing', () => {
    const component = shallow(
      <Provider store={mockStore}>
        <Root />
      </Provider>
    );

    expect(component).toBeDefined();
  });
});
