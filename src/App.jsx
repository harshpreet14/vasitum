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
    <div className="w-full min-h-screen bg-white font-['Poppins'] flex flex-col">
      <JobCard/>
      <GraphCard/>
      <Announcement/>
      <Upcoming/>
    </div>
  )
}

export default App
