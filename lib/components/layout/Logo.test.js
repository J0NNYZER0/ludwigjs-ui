import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom'
import Logo from './Logo';

it('Logo renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Logo />
      </Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
