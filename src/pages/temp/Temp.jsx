import React from 'react';
import moment from 'moment';
import { fireConfetti } from '../../utils/confetti';
const Temp = () => {


  const unixTimestamp = 1694883414;
  const formattedDate = moment.unix(unixTimestamp).format('MMMM Do YYYY');
  const time = moment(formattedDate).format('HH:mm:ss');
  console.log(formattedDate);

  return (
    <div>
      <h1>{formattedDate}</h1>
    <button className='bg-black text-white'  onClick={()=>fireConfetti()} >Fire</button>



    </div>
  );
};

export default Temp;
