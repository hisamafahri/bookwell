import React from 'react'
import Chevron from '../assets/icon/Chevron'

function EventCard({ eventName, eventVendor, statusIcon }: any ) {
    return (
        <div className='bg-bw-xl-grey mt-2 p-5 flex flex-row items-center justify-between cursor-pointer hover:bg-bw-light-grey'>
                <div className='flex flex-col'>
                    <p className='font-rubik text-base font-medium'>{ eventName }</p>
                    <p className='font-rubik font-light text-sm'>{ eventVendor }</p>
                </div>
                <div className='flex flex-row items-center justify-center'>
                    { statusIcon }
                    <Chevron className='transform -rotate-90 ml-2' />
                </div>
            </div>

    )
}

export default EventCard
