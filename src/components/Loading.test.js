import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';


describe('<Loading />', () => {
  it('should render without crashing', () => {
    const component = shallow(<Loading />);

    expect(component.find('img').length).toBe(1);
  });
});
