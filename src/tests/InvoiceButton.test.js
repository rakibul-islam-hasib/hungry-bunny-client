/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import InvoiceButton from '../components/buttons/InvoiceButton';

// Create a new Axios instance with Axios Mock Adapter
const mockAxios = new MockAdapter(axios);

describe('InvoiceButton', () => {
  it('renders without errors', () => {
    const { getByText } = render(<InvoiceButton paymentId={'6505de49df365d33cd5f989f'} />);
    const invoiceButton = getByText('Invoice');
    expect(invoiceButton).toBeInTheDocument();
  });

  it('disables the button while loading', async () => {
    const { getByText } = render(<InvoiceButton paymentId={123} />);
    const invoiceButton = getByText('Invoice');

    fireEvent.click(invoiceButton);
    expect(invoiceButton).toBeDisabled();

    // Simulate asynchronous operation completion
    mockAxios.onGet().reply(200, {});

    await waitFor(async () => {
      // Your assertions that depend on the asynchronous operation's completion
      expect(invoiceButton).not.toBeDisabled();
    });
  });

  it('handles download error', async () => {
    const { getByText } = render(<InvoiceButton paymentId={123} />);
    const invoiceButton = getByText('Invoice');

    fireEvent.click(invoiceButton);

    // Simulate an error response from Axios
    mockAxios.onGet().reply(500, {});

    await waitFor(async () => {
      // Your assertions that depend on the asynchronous operation's completion
      expect(console.error).toHaveBeenCalled(); // You can also mock console.error if needed
    });
  });
});
