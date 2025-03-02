import React from 'react'
import { watchModels } from '../data/index'

const Watch = () => {
  return (
    <div className='flex flex-col items-center justify-around bg-white h-full py-8 px-4'>
         <h1 className='2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8'>
            Which Apple Watch is right for you?
        </h1>

        <div className='w-full flex justify-around'>
            <div className='w-60 h-[430px] flex flex-col justify-around group'>

                <div className='w-full h-64 mb-4 overflow-hidden relative'>
                    <img src="images/watch10-side.png" alt="watch" className='absolute w-full h-full object-contain opacity-100 group-hover:opacity-0 transition duration-300' />
                    <img src="images/watch10.png" alt="watch" className='absolute w-full h-full object-contain opacity-0 group-hover:opacity-100 transition duration-300' />
                </div>
                <h3 className='2xl:text-xl xl:text-lg text-sm font-semibold'>Apple Watch Series 10</h3>
                <a href="#" className='my-2 text-base text-blue-400'>From $399</a>
                <div className='md:text-sm text-xs text-gray-700 my-2'>
                    <span className='block'>45mm or 41mm case size</span>
                    <span className='block'>45mm or 41mm case size</span>
                    <span className='block'>45mm or 41mm case size</span>
                </div>
                <button type="button" className='w-min font-bold tracking-wide text-sm py-1 px-3 bg-blue-400 rounded-full text-white mt-4 md:mt-0 mb-8'>Buy</button>

            </div>

        </div>
       
        {/* <div className='grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2'>
            {watchModels.map((watch, index) => (
            <div key={index} className='flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg'>
                <img src={watch.img} alt={watch.name} className='w-64 h-64 object-cover rounded-full' />
                <div className='mt-4'>
                <h2 className='text-xl font-bold'>{watch.name}</h2>
                <p className='text-gray-500'>{watch.description}</p>
                <p className='text-gray-500'>{watch.price}</p>
                </div>
            </div>
            ))}
        </div> */}
    </div>
  )
}

export default Watch