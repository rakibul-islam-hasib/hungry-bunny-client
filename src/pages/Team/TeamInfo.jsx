import React from 'react';

const TeamInfo = () => {
    return (
        <div className='space-y-6'>
            <h1 className='text-5xl font-semibold py-10'>Team Information Here</h1>
            <div>
                <h1>Admin Mail</h1>
                <h4> <span>HungryAdmin@gmail.com</span></h4>
                <h4> <span>HUNGRY@6</span></h4>
            </div>
            <div>
                <h1>Restaurant Mail</h1>
                <h4> <span>HungryRestaurant@gmail.com</span></h4>
                <h4>  <span>HUNGRY@6</span></h4>
            </div>
        </div>
    );
};

export default TeamInfo;