import React from 'react';
import { shallow } from 'enzyme';
import { StaffuserPage } from '../../../src/features/collaborator';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<StaffuserPage />);
  expect(renderedComponent.find('.collaborator-staffuser-page').length).toBe(1);
});
