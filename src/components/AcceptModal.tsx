import React from 'react'
import CalendarIcon from '../assets/icon/CalendarIcon'
import CheckCircle from '../assets/icon/CheckCircle'
import ChooseDate from './ChooseDate'
import DetailsText from './DetailsText'
import DoubleButton from './DoubleButton'

function AcceptModal({ style, onClick }: any) {
    return (
        <div className={`fixed z-20 bg-bw-black bg-opacity-60 w-full h-full flex items-center justify-center ${style} overflow-y-scroll py-16`}>
            <div className='bg-bw-white mx-5 flex-1 max-w-sm'>
                <p className='font-rubik text-base font-normal text-center py-9 px-5'>Accept Proposal</p>
                <div className='mx-6'>
                    <DetailsText label='Event name' details='Wellness event 2021' />
                    <ChooseDate style='mt-6' />
                </div>
                <DoubleButton onClick={onClick} text1='Cancel' text2='Confirm' />
            </div>
        </div>
    )
}

export default AcceptModal
