import React from 'react';

const Recent = () => {
  return (
    <div className="m-4 text-white flex flex-col md:min-w-60">
      <div className="text-md bg-[#1B204A] rounded-t-lg p-4 text-start  text-white">Recent Activity</div>
      <div className='p-5 rounded-b-lg bg-[#161E54] flex flex-col'>
        <div className=' flex flex-col'>
        <span className='text-xs mb-3 text-gray-50 font-sans'>10.40 AM, Thu 01 Feb 2024</span>
        <span className='text-lg mb-2'>You posted a New Job</span>
        <p className='text-sm font-sans mb-6'>Kindly check the requirements and terms of work and make sure everything is right.</p>
        </div>
        <div className='flex flex-col'>
        <p className='text-sm font-sans mb-3'>Today you makes 12 Activity</p>
        <button className='p-2 bg-[#FF5151] justify-start rounded-lg w-1/2'>See All Activity</button>
      </div>
      </div>
      
    </div>
  );
};

export default Recent;
