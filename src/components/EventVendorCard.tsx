import React from 'react'
import Chevron from '../assets/icon/Chevron'

function EventVendorCard({ eventName, companyName, statusIcon, dateCreated }: any) {
    return (
        <div className='lg:px-16 lg:max-w-7xl'>
            <div className='bg-bw-xl-grey mt-2 p-5 sm:py-5 sm:px-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-between cursor-pointer hover:bg-bw-light-grey lg:rounded'>
                <div className='hidden md:block'>
                    <p className='pl-6 font-rubik font-light text-base'>{dateCreated}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-rubik text-base font-medium'>{eventName}</p>
                    <p className='sm:hidden font-rubik font-light text-sm'>{companyName}</p>
                </div>
                <div className='hidden sm:block'>
                    <p className='pl-6 font-rubik font-light text-base'>{companyName}</p>
                </div>
                <div className='flex items-end justify-end'>
                    <div className='flex flex-row items-center justify-center'>
                        {statusIcon}
                        <Chevron className='transform -rotate-90 ml-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventVendorCard
