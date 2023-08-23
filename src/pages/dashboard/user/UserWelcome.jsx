import React from 'react';

const UserWelcome = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-4xl text-orange-500 font-bold'>Welcome to Hungry Bunny user name</h1>
<div className='flex justify-between mr-9 mb-7'>
<h1 className='text-2xl mt-4 font-bold'>your added card items</h1>
<button className="bg-orange-500 text-2xl hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex restaurants-center">
                payment
              </button>
</div>
            <table className="w-full text-left">
  <thead>
    <tr>
      <th>#</th>
      <th>name of food</th>
      <th>price</th>
      <th>status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones </td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
      <td>pending</td>
    </tr>
  </tbody>
</table>
        </div>
    );
};

export default UserWelcome;