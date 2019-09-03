import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/staffuserc/DefaultPage';

describe('staffuserc/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      staffuserc: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.staffuserc-default-page').length
    ).toBe(1);
  });
});
