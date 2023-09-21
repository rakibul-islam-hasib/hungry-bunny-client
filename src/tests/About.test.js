import React from 'react';
import { render } from '@testing-library/react';
import About from '../pages/about/About';
// import About from './About'; // Adjust the import path as needed

describe('About Component', () => {
  it('renders without errors', () => {
    const { getByText } = render(<About />);
    
    // You can use assertions like getByText, getByTestId, getByRole, etc. to verify the rendered output.
    const pageTitle = getByText('About Us');
    expect(pageTitle).toBeInTheDocument();
    
    // Add more assertions as needed to test other elements in the component.
  });

  // Add more test cases to cover different scenarios in your component.
});
