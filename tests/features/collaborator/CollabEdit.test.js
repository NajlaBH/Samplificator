import React from 'react';
import { shallow } from 'enzyme';
import { CollabEdit } from '../../../src/features/collaborator';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<CollabEdit />);
  expect(renderedComponent.find('.collaborator-collab-edit').length).toBe(1);
});
