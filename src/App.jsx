import { useState } from 'react'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Recent from './components/Recent';
import Right from './components/Right';
import JobCard from './components/JobCard';
import GraphCard from './components/GraphCard';
import Announcement from './components/Announcement';
import Upcoming from './components/Upcoming';

function App() {

  return (
    <div className="w-full max-h-screen bg-white font-['Poppins'] flex flex-row">
      <Sidebar/>
      <div className='flex flex-col flex-grow'>
        <Header/>
        <div className='flex flex-col md:flex md:flex-col md:gap-3 md:flex-grow lg:flex-row lg:w-full lg:items-stretch'>
      
      {/* left container */}
      <div className='flex-grow'>
      <div className='text-xl ml-4 mr-4 mt-4 font-semibold text-[#161E54]'>Dashboard</div>
      <JobCard/>
      <GraphCard/>
      <div className=''></div>
      <Announcement/>
      </div>


      {/* recent and upcoming */}
      <div className=' flex flex-col md:flex-row md:flex lg:flex-col md:items-stretch md:justify-stretch lg:mt-11 flex-grow lg:items-stretch'>
      <Recent/>
      <Upcoming/>
      </div>

      </div>
      </div>
     
    </div>
  )
}

export default App
