import React from 'react'
import CheckCircle from '../assets/icon/CheckCircle'
import Chevron from '../assets/icon/Chevron'
import DoubleButton from './DoubleButton'
import InputLabel from './InputLabel'
import ProposedDates from './ProposedDates'
import TextareaLabel from './TextareaLabel'
import VendorDropdown from './VendorDropdown'


function NewEventModal({ style }: any) {
    return (
        <div className={`fixed z-20 bg-bw-black bg-opacity-60 w-full h-full flex items-center justify-center ${style} overflow-y-scroll py-16`}>
            <div className='bg-bw-white mx-5 flex-1 max-w-sm mt-72'>
                <p className='font-rubik text-base font-normal text-center py-9 px-5'>Create New Event</p>
                <div className='mx-6'>
                    <InputLabel type='text' label='Event name' placeholder='event name' />
                    <VendorDropdown style='mt-6' />
                    <TextareaLabel label='Proposed location' placeholder='location' style='mt-6' />
                    <ProposedDates style='mt-6' />
                </div>
                <DoubleButton text1='Cancel' text2='Save' />
            </div>
        </div>
    )
}

export default NewEventModal
