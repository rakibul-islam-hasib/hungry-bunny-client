/* eslint-disable no-undef */
// Counter.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from '../pages/Home/Home';


test('Home page with menu', () => {
  const { getByText } = render(<Home />);
  const incrementButton = getByText('Increment');
  const countText = getByText('Count: 0');

  // Click the Increment button
  fireEvent.click(incrementButton);

  // Check if count increase
  expect(countText).toHaveTextContent('Count: 1');
});
