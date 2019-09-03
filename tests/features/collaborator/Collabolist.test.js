import React from 'react';
import { shallow } from 'enzyme';
import { Collabolist } from '../../../src/features/collaborator';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Collabolist />);
  expect(renderedComponent.find('.collaborator-collabolist').length).toBe(1);
});
