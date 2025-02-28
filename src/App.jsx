import React from 'react'
import Controls from './components/Controls'

const App = () => {
  return (
    <div className='w-full h-screen grid place-items-center'>
      <div className="w-[70vw] 
                      h-[85vh] 
                      min-w-[70vw] 
                      min-h-[85vh] 
                      max-w-[90vw] 
                      max-h-[90vh]
                      border
                      border-gray-300
                      rounded-2xl 
                      resize
                      overflow-auto">

      </div>
      <Controls />
    </div>
  )
}

export default App