import { useState, useEffect } from 'react'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Recent from './components/Recent';
import JobCard from './components/JobCard';
import GraphCard from './components/GraphCard';
import Announcement from './components/Announcement';
import Upcoming from './components/Upcoming';

function App() {

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#1a1625] font-['Poppins'] flex flex-row">
      <Sidebar/>
      <div className='flex flex-col flex-grow'>
        <Header/>
        <div className='flex flex-col md:flex md:flex-col md:gap-1 md:flex-grow lg:flex-row lg:w-full lg:items-stretch p-5'>
      
     
      <div className='flex-grow'>
      <div className='text-xl ml-4 mr-4 mt-4 font-semibold text-[#161E54] lg:w-4/6 dark:text-white'>Dashboard</div>
      <JobCard/>
      <GraphCard/>
      <div className=''></div>
      <Announcement/>
      </div>

      <div className='flex flex-col md:flex-row md:flex lg:flex-col md:items-stretch md:justify-stretch lg:mt-11 flex-grow lg:items-stretch lg:w-2/6 md:flex-shrink flex-gap-auto'>
      <Recent/>
      <Upcoming/>
      </div>

      </div>
      </div>
     
    </div>
  )
}

export default App


/*<div className='flex flex-col md:flex-row md:flex lg:flex-col md:items-stretch md:justify-stretch lg:mt-11 flex-grow lg:items-stretch lg:w-2/6'>
      <Recent/>
      <Upcoming/>
      </div>*/