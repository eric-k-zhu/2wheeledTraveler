import React from 'react';
import renderer from 'react-test-renderer';
import SpeedScreen from '../screens/SpeedScreen'

test('renders correctly', () => {
  const tree = renderer.create(<SpeedScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});