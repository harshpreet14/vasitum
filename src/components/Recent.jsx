import React from 'react';

const Recent = () => {
  return (
    <div className="m-4 text-white flex flex-col items-stretch min-h-80 md:min-h-80 md:max-h-96 lg:max-h-80 ">
      <div className="text-md bg-[#1B204A] rounded-t-lg p-4 text-start  text-white dark:bg-[#5e43f3]">Recent Activity</div>
      <div className='p-5 rounded-b-lg bg-[#161E54] dark:bg-[#7a5af5] flex flex-col'>
        <div className=' flex flex-col md:gap-5 lg:gap-0'>
        <span className='text-xs mb-4 text-[#FFFFFF] font-sans'>10.40 AM, Thu 01 Feb 2024</span>
        <span className='text-xl mb-3'>You posted a New Job</span>
        <p className='text-sm font-sans mb-6'>Kindly check the requirements and terms of work and make sure everything is right.</p>
        </div>
        <div className='flex flex-col sm:pb-4'>
        <p className='text-sm mb-4 md:mb-6  lg:mb-4'>Today you makes 12 Activity</p>
        <button className='p-2 bg-[#FF5151] justify-start rounded-lg w-1/2 hover:bg-[#e60000] md:mb-6 lg:mb-0'>See All Activity</button>
      </div>
      </div>
      
    </div>
  );
};

export default Recent;
