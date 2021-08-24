import React from 'react'
import CalendarIcon from '../assets/icon/CalendarIcon'
import CheckCircle from '../assets/icon/CheckCircle'

function ChooseDate({ style }: any) {
    return (
        <div className={`flex flex-col items-start justify-start ${style}`}>
            <p className='font-rubik font-light text-base'>Choose date</p>
            <div className='cursor-pointer mt-2 border border-bw-orange bg-bw-white p-4 flex items-center justify-between w-full'>
                <div className='flex flex-row items-center justify-center'>
                    <CalendarIcon />
                    <p className='font-rubik text-base font-normal ml-3'>Tuesday, 17 Aug 2021</p>
                </div>
                <CheckCircle className='' />
            </div>
            <div className='cursor-pointer mt-2 border border-bw-dark-grey bg-bw-white p-4 flex items-center justify-between w-full'>
                <div className='flex flex-row items-center justify-center'>
                    <CalendarIcon />
                    <p className='font-rubik text-base font-normal ml-3'>Friday, 27 Aug 2021</p>
                </div>
                <CheckCircle className='hidden' />
            </div>
            <div className='cursor-pointer mt-2 border border-bw-dark-grey bg-bw-white p-4 flex items-center justify-between w-full'>
                <div className='flex flex-row items-center justify-center'>
                    <CalendarIcon />
                    <p className='font-rubik text-base font-normal ml-3'>Monday, 06 Sep 2021</p>
                </div>
                <CheckCircle className='hidden' />
            </div>
        </div>
    )
}

export default ChooseDate
