import React from 'react'
import PlusIcon from '../assets/icon/PlusIcon'

function FloatingActionButton() {
    return (
        <div className='fixed z-10 right-5 bottom-8 shadow-xl w-max cursor-pointer bg-bw-orange hover:bg-bw-hover-orange flex flex-row items-center justify-center p-4 rounded'>
            <PlusIcon />
            <p className='text-bw-white ml-1 font-rubik text-sm font-normal'>Create Event</p>
        </div>
    )
}

export default FloatingActionButton
