import React from 'react';
import { shallow } from 'enzyme';
import { AppHeader } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<AppHeader />);
  expect(renderedComponent.find('.common-app-header').length).toBe(1);
});
