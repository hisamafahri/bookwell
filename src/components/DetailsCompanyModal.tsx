import React from 'react'
import CalendarIcon from '../assets/icon/CalendarIcon'
import CalendarDetails from './CalendarDetails'
import DateDetails from './DateDetails'
import DetailsText from './DetailsText'
import SingleButton from './SingleButton'
import TripleButton from './TripleButton'

function DetailsModal({ style, onClick }: any) {
    return (
        <div className={`fixed z-20 bg-bw-black bg-opacity-60 w-full h-full flex items-center justify-center ${style} overflow-y-scroll py-16`}>
            <div className='bg-bw-white mx-5 flex-1 max-w-sm mt-72'>
                <p className='font-rubik text-base font-normal text-center py-9 px-5'>Details</p>
                <div className='mx-6'>
                    <DetailsText label='Created on' details='11 Aug 2021, 13:02' />
                    <DetailsText label='Event name' details='Wellness event name 2021' style='mt-6' />
                    <DetailsText label='Company' details='Google, LLC' style='mt-6' />
                    <DetailsText label='Proposed location' details='Googleplex, 1600 Amphitheatre Pkwy, Mountain View, CA 94043, United States' style='mt-6' />
                    <DateDetails date1='Tuesday, 17 Aug 2021' date2='Friday, 27 Aug 2021' date3='Monday, 06 Sep 2021' style='mt-6' />
                </div>
                <SingleButton onClick={onClick} text='Close' />
            </div>
        </div>
    )
}

export default DetailsModal
