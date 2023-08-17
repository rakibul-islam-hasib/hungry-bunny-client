import React from 'react';

const Temp = () => {

    const clickHandler = () => {
        console.log("click");
        fetch('http://localhost:5000/set-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'test',
                email: 'test@test.com',
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div>
            <h1>Temp</h1>
            <button
                onClick={clickHandler}
                className='px-9 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
            >Button</button>
        </div>
    );
};

export default Temp;