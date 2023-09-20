import React from 'react';
import { useTitle } from '../../hooks/useTitle';

const PaymentHistory = () => {
    useTitle("Payment History");
    return (
        <div>
            <h1 >Payment History</h1>
        </div>
    );
};

export default PaymentHistory;