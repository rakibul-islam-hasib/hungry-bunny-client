import React, { useEffect, useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

const Faq = () => {
    const [ allQuestions, setAllQuestions ] = useState([])
    
    useEffect(()=>{
        fetch('faq.json')
        .then(res => res.json())
        .then(data => {
            setAllQuestions(data)
            console.log(data);
        })
    },[])
    return (
        <div className='mb-10'>
            <h2 className='text-4xl text-orange-500 p-7 text-center font-extrabold'>Frequently Asked Questions</h2>
            {
                allQuestions.map((item) =>  <div key={item._id} className="card">
                <Accordion activeIndex={0}>
                    <AccordionTab className='mt-3 mb-3 text-2xl hover:bg-orange-400 p-3 rounded-lg hover:text-white hover:text-4xl' header={item.question}>
                        <p className="m-0">
                            {item.answers}
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>)
            }
        </div>
    );
};

export default Faq;