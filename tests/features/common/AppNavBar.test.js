import React from 'react';
import { shallow } from 'enzyme';
import { AppNavBar } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<AppNavBar />);
  expect(renderedComponent.find('.common-app-nav-bar').length).toBe(1);
});
