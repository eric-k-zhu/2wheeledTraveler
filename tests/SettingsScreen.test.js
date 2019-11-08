import React from 'react';
import renderer from 'react-test-renderer';
import SettingsScreen from '../screens/SettingsScreen'

test('renders correctly', () => {
  const tree = renderer.create(<SettingsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});