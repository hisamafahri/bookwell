import React from 'react'
import DetailsText from './DetailsText'
import DoubleButton from './DoubleButton'
import TextareaLabel from './TextareaLabel'


function RejectModal({ style }: any) {
    return (
        <div className={`fixed z-20 bg-bw-black bg-opacity-60 w-full h-full flex items-center justify-center ${style} overflow-y-scroll py-16`}>
            <div className='bg-bw-white mx-5 flex-1 max-w-sm'>
                <p className='font-rubik text-base font-normal text-center py-9 px-5'>Details</p>
                <div className='mx-6'>
                    <DetailsText label='Event name' details='Wellness Event 2021' />
                    <TextareaLabel label='Reason of rejection' placeholder='reason of rejection' style='mt-6' />
                </div>
                <DoubleButton text1='Cancel' text2='Reject' />
            </div>
        </div>
    )
}

export default RejectModal
