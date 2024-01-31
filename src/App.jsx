import { useState } from 'react'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Recent from './components/Recent';
import Right from './components/Right';
import JobCard from './components/JobCard';
import GraphCard from './components/GraphCard';
import Announcement from './components/Announcement';

function App() {

  return (
    <div className="w-full min-h-screen bg-white font-['Poppins'] flex flex-row">
      <Sidebar/>
      <section className='w-6/12 bg-slate-300'>
      left
      </section>
      <section className='w-3/12'>
      <JobCard/>
      <GraphCard/>
      <Announcement/>
      </section>
    </div>
  )
}

export default App
