import React from 'react';
import { shallow } from 'enzyme';
import Settings from './Settings';
import CheckBox from './CheckBox';


describe('<Settings />', () => {
  it('should render without crashing', () => {
    const props = {
      update: jest.fn(),
      settings: {
        newsletters: 1,
        alerts: 0,
        private: 0,
      },
    };
    const component = shallow(<Settings {...props} />);

    const inputs = component.find(CheckBox);
    expect(inputs.length).toBe(3);
    expect(inputs.at(0).prop('checked')).toBe(true);
    expect(inputs.at(1).prop('checked')).toBe(false);
    expect(inputs.at(2).prop('checked')).toBe(false);
  });
});
