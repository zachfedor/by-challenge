import React from 'react';
import { shallow } from 'enzyme';
import CheckBox from './CheckBox';


describe('<CheckBox />', () => {
  it('should render without crashing', () => {
    const props = {
      label: 'newsletter',
      checked: true,
      onChange: jest.fn(),
    };
    const component = shallow(<CheckBox {...props} />);

    expect(component.find('label').text()).toBe('newsletter');
    expect(component.find('input').prop('checked')).toBe(true);
  });

  it('should handle change', () => {
    const props = {
      label: 'newsletter',
      checked: false,
      onChange: jest.fn(),
    };
    const component = shallow(<CheckBox {...props} />);

    // initial state
    expect(props.onChange.mock.calls.length).toBe(0);
    expect(component.find('input').prop('checked')).toBe(false);

    // trigger change
    component.find('input').simulate('change', { target: { checked: true }});

    // check change
    expect(props.onChange.mock.calls.length).toBe(1);
    expect(props.onChange.mock.calls[0]).toEqual([true]);
    expect(component.find('input').prop('checked')).toBe(true);

    // trigger another change
    component.find('input').simulate('change', { target: { checked: false }});

    // check change
    expect(props.onChange.mock.calls.length).toBe(2);
    expect(component.find('input').prop('checked')).toBe(false);
    expect(props.onChange.mock.calls[1]).toEqual([false]);
  });
});
