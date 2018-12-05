"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import ItemFood from '../components/ListOfFood/itemFood/itemFood';


test('работа ItemFood ', () => {

  const component = renderer.create(
    <ItemFood/>
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // componentTree.props.onClick();

  // componentTree=component.toJSON();
  // expect(componentTree).toMatchSnapshot();
    
});
