import React, { useState } from 'react';

const UserPayment = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handlePayment = event => {
        event.preventDefault();
        const form = event.target;
        const cardNum = form.cardNum.value;
        const cvc = form.cvc.value;
        const expire = form.expire.value;
        const cardholder = form.cardholder.value;
        

        const newPayment = { cvc, expire, cardNum, cardholder }

        console.log(newPayment);

        // // send data to the server
        // fetch('', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newAccount)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'Successfull',
        //                 showClass: {
        //                   popup: 'animate__animated animate__fadeInDown'
        //                 },
        //                 hideClass: {
        //                   popup: 'animate__animated animate__fadeOutUp'
        //                 }
        //               })
        //         }
        //     })


    }
    return (
        <>
            <div className='mt-20'>
                <h1 className='text-2xl font-bold'>Payment method</h1>
            </div>
            <div>
                <form className='form md:w-full sm:w-full bg-purple-200 p-10 rounded-lg' onSubmit={handlePayment}>
                    <h2 className="text-3xl font-extrabold text-start mb-2">Connected payment methods</h2>
                       

                    <h2 className="text-3xl font-extrabold text-start mb-2">New Payment method</h2>

                    {/* form card number, expiration and CVC name row */}
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Card Number</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="cardNum" placeholder="XXXX - XXXX - XXXX - XXXX" className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Expiration</span>
                            </label>
                            <label className="input-group">
                                <input type="expire" name="expire" id="" placeholder='MM / YYYY' className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">CVC</span>
                            </label>
                            <label className="input-group">
                                <input type="cvc" name="cvc" id="" placeholder='XXX' className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                    </div>
                    {/* form Cardholder row */}
                    <div className="md:flex mb-6">
                        <div className="form-control md:full lg:w-full">
                            <label className="label">
                                <span className="label-text">Cardholder</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="cardholder" placeholder="Enter Name on Card" className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                        
                    </div>


                    
                        

                        <div className='text-end'>
                            
                            <input type="submit" value="Add New Payment Method" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-2 ms-2 " />

                        </div>
                    


                </form>
            </div>

        </>
    );
};

export default UserPayment;