import { useState } from 'react'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Recent from './components/Recent';
import Right from './components/Right';

function App() {

  return (
    <div className="w-full min-h-screen bg-white font-['Poppins'] flex flex-row">
      <Sidebar/>
      <section className='w-6/12 bg-slate-300'>
      left
      </section>
      <section className=''>
      <Right/>
      </section>
    </div>
  )
}

export default App
