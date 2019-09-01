import React from 'react';
import { shallow } from 'enzyme';
import { CrudCollaborator } from '../../../src/features/collaborator';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<CrudCollaborator />);
  expect(renderedComponent.find('.collaborator-crud-collaborator').length).toBe(1);
});
