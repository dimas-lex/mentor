import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InputField from './index';

configure({
    adapter: new Adapter(),
  });
  
  describe('<SideDrawer />', () => {
   
  
    it('should render <SideDrawer /> component', () => {
    const wrapper = shallow(<InputField type="text" label="text"  />);
      expect(wrapper.find('tinput')).toHaveLength(1);
    });
  
   
  });