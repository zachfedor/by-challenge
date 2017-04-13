import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';


describe('<Alert />', () => {
  it('should render without error', () => {
    const component = shallow(<Alert msg="" />);

    expect(component.find('p').text()).toBe('');
  });

  it('should render with error', () => {
    const component = shallow(<Alert msg="An error occured" />);

    expect(component.find('p').text()).toBe('An error occured');
  });
});
