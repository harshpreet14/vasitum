import React from 'react';

const Recent = () => {
  return (
    <div className="rounded-lg p-4 max-w-sm mx-auto text-white">
      <div className="text-lg bg-[#1B204A] rounded-lg p-4 text-start font-semibold">Recently Activity</div>
      <div className='bg-[#161E54]'>
      <p className="text-sm mb-1">10.40 AM, Fri 10 Sept 2021</p>
      <h3 className="text-md font-bold mb-2">You Posted a New Job</h3>
      <p className="text-sm mb-4">Kindly check the requirements and terms of work and make sure everything is right.</p>
      <p className="text-sm mb-4">Today you makes 12 Activity</p>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        See All Activity
      </button>
      </div>
    </div>
  );
};

export default Recent;
