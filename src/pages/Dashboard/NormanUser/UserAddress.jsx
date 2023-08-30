import React, { useState } from 'react';

const UserAddress = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleAccount = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const last = form.last.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const newAccount = { name, last, email, phone }

        console.log(newAccount);

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
                <h1 className='text-2xl font-bold'>Address</h1>
            </div>
            <div>
                <form className='form md:w-full sm:w-full  p-10 rounded-lg' onSubmit={handleAccount}>
                    <h2 className="text-3xl font-extrabold text-start mb-8">Existing Shipping Addresses</h2>

                    <div className='lg:flex md:flex justify-around'>
                        <div className="relative flex w-full max-w-[25rem] max-h-[8rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-10 me-7">
                            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-2xl  bg-white bg-clip-border text-gray-700">
                            <img className='h-[130px] w-[130px] rounded-2xl m-auto p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIKw0aSHbklS0Ufdqhf3a5kLdb99BSI2_xJA&usqp=CAU" alt="" />
                            </div>
                            <div className="p-4">
                                <h6 className="mb-1 block font-sans text-lg font-bold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                                    Country Name
                                </h6>
                                <h4 className="mb-2 block font-sans text-sm font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    country Address 
                                </h4>
                                <p className="mb-2 pb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                    Address 
                                </p>
                            </div>
                        </div>
                        <div className="relative flex w-full max-w-[25rem] max-h-[8rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-2xl  bg-white bg-clip-border text-gray-700">
                            <img className='h-[130px] w-[130px] rounded-2xl m-auto p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIKw0aSHbklS0Ufdqhf3a5kLdb99BSI2_xJA&usqp=CAU" alt="" />
                            </div>
                            <div className="p-4">
                                <h6 className="mb-1 block font-sans text-lg font-bold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                                    Country Name
                                </h6>
                                <h4 className="mb-2 block font-sans text-sm font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    country Address 
                                </h4>
                                <p className="mb-2 pb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                    Address 
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-extrabold text-start mb-5 mt-5">New Shipping Addresses</h2>

                    {/* form country, city and state name row */}
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Country</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="country" placeholder="Enter country" className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">State</span>
                            </label>
                            <label className="input-group">
                                <input type="state" name="state" id="" placeholder='Enter state' className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <label className="input-group">
                                <input type="city" name="city" id="" placeholder='Enter city' className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                    </div>
                    {/* form Address row */}
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Address line 1</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="address-one" placeholder="Enter Address" className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Address line 2</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="address-two" placeholder="Enter Address (Optional)" className="input input-bordered w-full rounded p-2" />
                            </label>
                        </div>
                    </div>





                    <div className='text-end'>

                        <input type="submit" value="Add New Address" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-2 ms-2 " />

                    </div>



                </form>
            </div>

        </>
    );
};

export default UserAddress;