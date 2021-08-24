import React, { useState } from 'react'
import CheckCircle from '../assets/icon/CheckCircle'
import DoubleButton from './DoubleButton'

function FilterModal({ style, onClick }: any) {
    const [accepted, setAccepted] = useState(true)
    const [waiting, setWaiting] = useState(true)
    const [rejected, setRejected] = useState(true)
    return (
        <div className={`fixed z-20 bg-bw-black bg-opacity-60 w-full h-full flex items-center justify-center ${ style }`}>
                <div className='bg-bw-white mx-5 flex-1 max-w-sm'>
                    <p className='font-rubik text-base font-normal text-center py-9 px-5'>Filter</p>
                    <div>
                        <div onClick={() => setAccepted(!accepted)} className={`cursor-pointer mt-2 mx-6 border ${accepted ? 'border-bw-orange' : 'border-bw-font-grey'} bg-bw-white p-4 flex items-center justify-between`}>
                            <p className={`font-rubik text-base font-normal ${accepted ? 'text-bw-black' : 'text-bw-font-grey'}`}>Accepted</p>
                            <CheckCircle className={accepted ? '' : 'hidden'} />
                        </div>
                        <div onClick={() => setWaiting(!waiting)} className={`cursor-pointer mt-2 mx-6 border ${waiting ? 'border-bw-orange' : 'border-bw-font-grey'} bg-bw-white p-4 flex items-center justify-between`}>
                            <p className={`font-rubik text-base font-normal text-bw-font-grey ${waiting ? 'text-bw-black' : 'text-bw-font-grey'}`}>Waiting for Confirmation</p>
                            <CheckCircle className={waiting ? '' : 'hidden'} />
                        </div>
                        <div onClick={() => setRejected(!rejected)} className={`cursor-pointer mt-2 mx-6 border ${rejected ? 'border-bw-orange' : 'border-bw-font-grey'} bg-bw-white p-4 flex items-center justify-between`}>
                            <p className={`font-rubik text-base font-normal ${rejected ? 'text-bw-black' : 'text-bw-font-grey'}`}>Rejected</p>
                            <CheckCircle className={rejected ? '' : 'hidden'} />
                        </div>
                    </div>
                    <DoubleButton onClick={onClick} text1='Cancel' text2='Apply' />
                </div>
            </div>
    )
}

export default FilterModal
