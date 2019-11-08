import React from 'react';
import renderer from 'react-test-renderer';
import GasScreen from '../screens/GasScreen'

test('renders correctly', () => {
  const tree = renderer.create(<GasScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});