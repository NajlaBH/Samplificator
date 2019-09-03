import React from 'react';
import { shallow } from 'enzyme';
import { AppFooter } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<AppFooter />);
  expect(renderedComponent.find('.common-app-footer').length).toBe(1);
});
