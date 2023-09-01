import React, { useEffect, useState } from 'react';
import { GoDotFill } from 'react-icons/go';

const Faq = () => {
    const [ allQuestions, setAllQuestions ] = useState([])
    
    useEffect(()=>{
        fetch('faq.json')
        .then(res => res.json())
        .then(data => {
            setAllQuestions(data)
            // console.log(data);
        })
    },[])
    
    return (
        <div className='mb-10 dark:text-slate-200 font-sans'>
            <h2 className='text-4xl text-orange-500 p-7 text-center font-extrabold'>Frequently Asked Questions</h2>
            <div className='md:flex'>
                <div className='md:w-[40%] pr-6'>
            <h2 className='text-4xl font-bold'>Every day help for our customers</h2>
            <p className='mt-5 mb-5 text-2xl'>
            Ask a Question for feature, you enable users to seek assistance and provide valuable feedback, which can lead to a better overall user experience on your food delivery platform.
            </p>
            <ul className='p-4 text-2xl'>
                <li className='flex items-center'><span className='text-orange-500 mr-2'><GoDotFill/> </span><span>Managment</span></li>
                <li className='flex items-center'><span className='text-orange-500 mr-2'><GoDotFill/> </span><span>Food Quality and Taste</span></li>
                <li className='flex items-center'><span className='text-orange-500 mr-2'><GoDotFill/> </span><span>Special Requests</span></li>
                <li className='flex items-center'><span className='text-orange-500 mr-2'><GoDotFill/> </span><span>Promotions and Discounts</span></li>
                <li className='flex items-center'><span className='text-orange-500 mr-2'><GoDotFill/> </span><span>Menu Queries</span></li>
                <li className='flex items-center'><span className='text-orange-500 mr-2'><GoDotFill/> </span><span>Account Assistance</span></li>
                <li className='flex items-center'><span className='text-orange-500 mr-2'><GoDotFill/> </span><span>Promotions and Loyalty Programs</span></li>
            </ul>
                </div>
            <div className='md:w-[60%]'>
            {
                allQuestions.map((item) =>  <div key={item._id} className="card my-2">
                <details className='text-2xl font-bold'>
                    <summary className='hover:bg-orange-400 hover:text-white rounded-xl p-2'>{item.question}</summary>
                    <p className='my-3 p-3'>{item.answers}</p>
                </details>
            </div>)
            }
            </div>
            </div>
        </div>
    );
};

export default Faq;