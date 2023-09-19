import React from 'react';
import moment from 'moment';
const Temp = () => {


  const unixTimestamp = 1694883414;
  const formattedDate = moment.unix(unixTimestamp).format('MMMM Do YYYY');
  const time = moment(formattedDate).format('HH:mm:ss');
  console.log(formattedDate);

  return (
    <div>
      <h1>{formattedDate}</h1>
    </div>
  );
};

export default Temp;
