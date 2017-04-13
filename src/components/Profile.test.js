import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';


describe('<Profile />', () => {
  it('should render without crashing', () => {
    const user = {
      name: "Douglas Richard Hofstadter",
      email: "dhofstadter@indiana.edu",
      bio: "Douglas Richard Hofstadter (born February 15, 1945) is an...",
    };
    const component = shallow(<Profile user={user} />);

    expect(component.find('.Profile-name').text()).toBe(user.name);
    expect(component.find('.Profile-email').text()).toBe(user.email);
    expect(component.find('.Profile-bio').text()).toBe(user.bio);
  });
});
