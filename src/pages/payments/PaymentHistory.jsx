import React, { useEffect, useState } from 'react';
import { useTitle } from '../../hooks/useTitle';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useUserSecure from '../../hooks/useUserSecure';
import { Pagination } from '@mui/material';
import moment from 'moment';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import InvoiceButton from '../../components/buttons/InvoiceButton';

const PaymentHistory = () => {
    useTitle("Payment History");
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [paginatedPaymentHistory, setPaginatedPaymentHistory] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const totalPage = Math.ceil(paymentHistory.length / itemsPerPage);
    const [invoiceLoading, setInvoiceLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const axios = useAxiosSecure();
    const [user] = useUserSecure();


    useEffect(() => {
        setLoading(true);
        axios.get(`/payment/user-payment/${user?._id}`)
            .then((res) => {
                console.log(res.data);
                // setPaymentHistory(res.data);
                // sort by date and set the state
                const sortedPaymentHistory = res.data.sort((a, b) => b.paymentDate - a.paymentDate);
                setPaymentHistory(sortedPaymentHistory);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])


    useEffect(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = paymentHistory.slice(indexOfFirstItem, indexOfLastItem);
        setPaginatedPaymentHistory(currentItems);
    }, [currentPage, itemsPerPage, paymentHistory])
    // Total ordered items
    const totalItems = paymentHistory.reduce((acc, item) => acc + item.totalItems, 0);
    const totalAmount = paymentHistory.reduce((acc, item) => acc + item.paymentAmount, 0);

    
    

    if (loading) return <div className="h-screen w-full flex justify-center items-center">
        <AiOutlineLoading3Quarters className="text-5xl text-primary animate-spin" />
    </div>

    return (
        <div className='w-[80%] mx-auto'>
            <div className="flex justify-between items-center my-7">
                <div className="`">
                    <h1>Welcome , <span className='text-primary'>{user.name}</span></h1>
                    <h1>Total Item : {totalItems}</h1>
                    <h1>Total Amount : ${totalAmount}</h1>
                </div>
                <div className="">
                    <h1 className="text-3xl font-bold text-center">Payment History</h1>

                </div>
            </div>
    
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                #
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Amount
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Payment Method
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Payment Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Total Items
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {paginatedPaymentHistory.map((payment, idx) => (
                            <tr key={payment._id}>
                                <td className="px-6 py-4 whitespace-nowrap">{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">${payment.paymentAmount}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{payment.paymentStatus}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{payment.paymentMethod}</td>
                                <td className="px-6 py-4 text-[14px] whitespace-nowrap">
                                    {moment.unix(payment.paymentDate).format('MMMM Do YYYY')}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{payment.totalItems}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {/* <button
                                        onClick={() => downloadInvoice(payment._id)}
                                        disabled={invoiceLoading}
                                        className="bg-primary text-white font-bold py-1 px-2 rounded">
                                        {invoiceLoading ? <AiOutlineLoading3Quarters className="text-xl animate-spin" /> : 'Invoice'}
                                    </button> */}
                                    <InvoiceButton paymentId={payment._id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-5">
                <Pagination count={totalPage} onChange={(e, value) => setCurrentPage(value)} />
            </div>

        </div>
    );
};

export default PaymentHistory;