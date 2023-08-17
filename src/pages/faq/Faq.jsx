import React, { useEffect, useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

const Faq = () => {
    const [ allQuestions, setAllQuestions ] = useState([])
    
    useEffect(()=>{
        fetch('faq.json')
        .then(res => res.json())
        .then(data => {
            setAllQuestions(data)
            console.log(data.answers);
        })
    },[])
    return (
        <div>
            {/* {
                allQuestions.map((item) => )
            } */}
        </div>
    );
};

export default Faq;
