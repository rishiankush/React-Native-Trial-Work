import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from './MainScreen';

test('renders correctly', () => {
  const tree = renderer.create(<MainScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});