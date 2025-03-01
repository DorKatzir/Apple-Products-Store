import React, { useState } from 'react'
import { macbookModels } from '../data/index'

const Macbook = () => {

    const [selectedChip, setSelectedChip] = useState(0)

    function handleSelectedChip(index) {
        setSelectedChip(index)
    }

  return (
    <div className='flex flex-col items-center justify-around bg-white p-8'>
        
        <h1 className='2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8'>
            Choose your new MacBook Air.
        </h1>
        
        <div className='flex'>
            {macbookModels.map((macbook, index) => (
                 <button onClick={()=>handleSelectedChip(index)} key={ index } className={`2xl:w-36 md:w-26 w-28 2xl:h-18 md:h-12 h-12 flex flex-col justify-evenly items-center border ${index === 0 ? 'rounded-l-xl' : 'rounded-r-xl'} ${index === selectedChip ? 'border-2 border-blue-400' : 'border-gray-800'}`}
                 >
                    <span className='2xl:text-lg xl:text-sm text-xs font-bold text-gray-800'>with { macbook.chip } chip</span>
                    <span className='2xl:text-base xl:text-sm text-xs text-gray-600'>{ macbook.price }</span>
                </button>
            ))}          
        </div>

        

    </div>
  )
}

export default Macbook