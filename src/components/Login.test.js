import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';


describe('<Login />', () => {
  it('should render without crashing', () => {
    const component = shallow(<Login />);

    expect(component.find('input').length).toBe(2);
    expect(component.find('button').length).toBe(1);
  });

  it('should handle submission', () => {
    const spy = jest.fn();
    const component = shallow(<Login login={spy} />);

    // initial state
    expect(spy.mock.calls.length).toBe(0);

    // input values
    component.find('input').at(0).simulate(
      'change',
      { target: { value: 'e@mail.com' }}
    );
    component.find('input').at(1).simulate(
      'change',
      { target: { value: 'pwd' }}
    );

    // submit the form
    component.find('form').simulate('submit');

    // inspect the submission
    expect(spy.mock.calls.length).toBe(1);
    expect(spy.mock.calls[0]).toEqual(['e@mail.com', 'pwd']);
  });
});
