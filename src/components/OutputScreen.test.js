import React from 'react';
import renderer from 'react-test-renderer';
import OutputScreen from './OuputScreen';

test('renders correctly', () => {
  const tree = renderer.create(<OutputScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});