import React, { useState } from 'react'
import CalendarIcon from '../assets/icon/CalendarIcon'
import CheckCircle from '../assets/icon/CheckCircle'

function ChooseDate({ style }: any) {
    const [selected, setSelected] = useState(0)

    return (
        <div className={`flex flex-col items-start justify-start ${style}`}>
            <p className='font-rubik font-light text-base'>Choose date</p>
            <div onClick={() => setSelected(0)} className={`cursor-pointer mt-2 border ${selected == 0 ? 'border-bw-orange' : 'border-bw-dark-grey'} bg-bw-white p-4 flex items-center justify-between w-full`}>
                <div className='flex flex-row items-center justify-center'>
                    <CalendarIcon />
                    <p className='font-rubik text-base font-normal ml-3'>Tuesday, 17 Aug 2021</p>
                </div>
                <CheckCircle className={selected == 0 ? '' : 'hidden' } />
            </div>
            <div onClick={() => setSelected(1)} className={`cursor-pointer mt-2 border ${selected == 1 ? 'border-bw-orange' : 'border-bw-dark-grey'} bg-bw-white p-4 flex items-center justify-between w-full`}>
                <div className='flex flex-row items-center justify-center'>
                    <CalendarIcon />
                    <p className='font-rubik text-base font-normal ml-3'>Friday, 27 Aug 2021</p>
                </div>
                <CheckCircle className={selected == 1 ? '' : 'hidden' } />
            </div>
            <div onClick={() => setSelected(2)} className={`cursor-pointer mt-2 border ${selected == 2 ? 'border-bw-orange' : 'border-bw-dark-grey'} bg-bw-white p-4 flex items-center justify-between w-full`}>
                <div className='flex flex-row items-center justify-center'>
                    <CalendarIcon />
                    <p className='font-rubik text-base font-normal ml-3'>Monday, 06 Sep 2021</p>
                </div>
                <CheckCircle className={selected == 2 ? '' : 'hidden' } />
            </div>
        </div>
    )
}

export default ChooseDate
