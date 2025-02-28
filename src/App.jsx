import React from 'react'
import { useState } from 'react'
import Controls from './components/Controls'
import Navbar from './components/Navbar'

const App = () => {
  const [frameZoom, setFrameZoom] = useState(false)
  const [activePage, setActivePage] = useState(0)

  function toggleZoom(){
    setFrameZoom(!frameZoom)
  }

  function handleNavClick (pageIndex) {
    setActivePage(pageIndex)
  }

  return (
    <div className='w-full h-screen grid place-items-center'>
      <div className={`${frameZoom && 'min-w-[97vw] min-h-[97vh]'} w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh borde border-gray-30 rounded-2xl resiz overflow-aut relativ transition-al duration-100`}>
        
        <Navbar handleNavClick={handleNavClick} activePage={activePage} />                  
        <Controls toggleZoom={toggleZoom} frameZoom={frameZoom} />  

      </div>
    </div>
  )
}

export default App