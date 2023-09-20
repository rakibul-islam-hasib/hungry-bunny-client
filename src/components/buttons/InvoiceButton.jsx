import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";

const InvoiceButton = ({ paymentId }) => {
    const [invoiceLoading, setInvoiceLoading] = useState(false);
    const axios = useAxiosSecure();

    const downloadInvoice = async () => {
        setInvoiceLoading(true);
        try {
            const response = await axios.get(`payment/food-item/${paymentId}`, { responseType: 'blob' });
            const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
            const pdfUrl = URL.createObjectURL(pdfBlob);
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'invoice.pdf';
            document.body.appendChild(link);
            link.click();
        } catch (err) {
            console.log(err);
        }
        finally {
            setInvoiceLoading(false);
        }
    };

    return (
        <button
            onClick={downloadInvoice}
            disabled={invoiceLoading}
            className={`bg-primary text-white font-bold py-1 ${invoiceLoading ? 'px-6' : 'px-2'} rounded`}>
            {invoiceLoading ? <AiOutlineLoading3Quarters className="text-xl  animate-spin" /> : 'Invoice'}
        </button>
    );
};
export default InvoiceButton;