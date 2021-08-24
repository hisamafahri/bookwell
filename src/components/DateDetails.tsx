import React from 'react'
import CalendarDetails from './CalendarDetails'
CalendarDetails

function DateDetails({ date1, date2, date3, style }: any) {
    return (
        <div className={`flex flex-col items-start justify-start ${style}`}>
            <p className='font-rubik font-light text-base'>Proposed dates</p>
            <CalendarDetails date={ date1 } />
            <CalendarDetails date={ date2 } />
            <CalendarDetails date={ date3 } />
        </div>
    )
}

export default DateDetails
