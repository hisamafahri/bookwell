import React from 'react'

function ProposedDates({ style }:any) {
    return (
        <div className={`flex flex-col items-start justify-start ${style}`}>
            <p className='font-rubik font-light text-base'>Proposed dates</p>
            <input type='date' placeholder='DD:MM:YYYY' className='flex-1 font-rubik p-4 focus:ring-0 focus:outline-none bg-bw-light-grey font-light w-full' />
            <input type='date' placeholder='DD:MM:YYYY' className='flex-1 font-rubik p-4 focus:ring-0 focus:outline-none bg-bw-light-grey font-light w-full mt-2' />
            <input type='date' placeholder='DD:MM:YYYY' className='flex-1 font-rubik p-4 focus:ring-0 focus:outline-none bg-bw-light-grey font-light w-full mt-2' />
        </div>
    )
}

export default ProposedDates
