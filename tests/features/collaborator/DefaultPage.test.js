import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/collaborator/DefaultPage';

describe('collaborator/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      collaborator: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.collaborator-default-page').length
    ).toBe(1);
  });
});
