import React, { useEffect, useState } from 'react';

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
        <div className='mb-10 dark:text-slate-200'>
            <h2 className='text-4xl text-orange-500 p-7 text-center font-extrabold'>Frequently Asked Questions</h2>
            {
                allQuestions.map((item) =>  <div key={item._id} className="card my-2">
                <details className='text-2xl font-bold'>
                    <summary className=''>{item.question}</summary>
                    <p className='my-5'>{item.answers}</p>
                </details>
            </div>)
            }
        </div>
    );
};

export default Faq;