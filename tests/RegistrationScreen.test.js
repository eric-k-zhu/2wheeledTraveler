import React from 'react';
import renderer from 'react-test-renderer';
import RegistrationScreen from '../screens/RegistrationScreen'

test('renders correctly', () => {
  const tree = renderer.create(<RegistrationScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});