/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';
import HowWeWork from '../pages/Home/Elements/HowWeWork';
import matchers from '@testing-library/jest-dom';

expect.extend(matchers);

it('should render the HowWeWork component', () => {
    render(<HowWeWork />)
    const howWeElement = screen.getByText('How We');
    expect(howWeElement).toBeInTheDocument();
});
