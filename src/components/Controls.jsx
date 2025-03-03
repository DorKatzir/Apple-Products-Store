import React from 'react'

function Controls({ toggleZoom, frameZoom, resetPage, activePage }) {
  return (
    <div className='absolute top-3 right-3 space-x-2 z-10'>
        <button onClick={toggleZoom} className='text-2xl text-pink-400 cursor-pointer'>
            <i className={ frameZoom ? 'bx bxs-zoom-out' : 'bx bxs-zoom-in'}></i>
        </button>
        <button onClick={ resetPage } className={`text-2xl ${activePage !== 0 ? 'text-red-400 cursor-pointer' : 'text-neutral-300 cursor-not-allowed'}`}>
            <i className='bx bx-x-circle'></i>
        </button>
    </div>
  )
}

export default Controls