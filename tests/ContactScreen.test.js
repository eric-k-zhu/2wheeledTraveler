import React from 'react';
import renderer from 'react-test-renderer';
import ContactScreen from '../screens/ContactScreen'

test('renders correctly', () => {
  const tree = renderer.create(<ContactScreen />).toJSON();
  expect(tree).toMatchSnapshot();
}); 

