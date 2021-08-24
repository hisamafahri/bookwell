import React from 'react'
import CalendarIcon from '../assets/icon/CalendarIcon'

function CalendarDetails({ date }: any) {
    return (
        <div className='flex flex-row items-center justify-start mt-3'>
            <CalendarIcon />
            <p className='font-rubik font-normal text-base ml-3'>{ date }</p>
        </div>
    )
}

export default CalendarDetails
