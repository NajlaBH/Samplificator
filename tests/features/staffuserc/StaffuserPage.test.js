import React from 'react';
import { shallow } from 'enzyme';
import { StaffuserPage } from '../../../src/features/staffuserc';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<StaffuserPage />);
  expect(renderedComponent.find('.staffuserc-staffuser-page').length).toBe(1);
});
