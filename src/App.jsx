import React from 'react'
import { useState } from 'react'
import Controls from './components/Controls'
import Navbar from './components/Navbar'
// import Home from './components/Home'
// import IPhone from './components/IPhone'
// import Macbook from './components/Macbook'
// import Watch from './components/Watch'
import IMac from './components/IMac'



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
      <div className={`flex ${frameZoom && 'min-w-[97vw] min-h-[97vh]'} w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-100`}>
        
        <Navbar handleNavClick={handleNavClick} activePage={activePage} />                  
        <Controls toggleZoom={toggleZoom} frameZoom={frameZoom} />
        <div className='flex-grow'>
          {/* <Home /> */}
          {/* <IPhone /> */}
          {/* <Macbook /> */}
          {/* <Watch /> */}
          <IMac />
        </div>  

      </div>
    </div>
  )
}

export default App