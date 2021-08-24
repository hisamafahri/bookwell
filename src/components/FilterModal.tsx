import React from 'react'
import CheckCircle from '../assets/icon/CheckCircle'
import DoubleButton from './DoubleButton'

function FilterModal({ style }: any) {
    return (
        <div className={`fixed z-20 bg-bw-black bg-opacity-60 w-full h-full flex items-center justify-center ${ style }`}>
                <div className='bg-bw-white mx-5 flex-1 max-w-sm'>
                    <p className='font-rubik text-base font-normal text-center py-9 px-5'>Filter</p>
                    <div>
                        <div className='cursor-pointer mt-2 mx-6 border border-bw-orange bg-bw-white p-4 flex items-center justify-between'>
                            <p className='font-rubik text-base font-normal'>Accepted</p>
                            <CheckCircle />
                        </div>
                        <div className='cursor-pointer mt-2 mx-6 border border-bw-font-grey bg-bw-white p-4 flex items-center justify-between'>
                            <p className='font-rubik text-base font-normal text-bw-font-grey'>Waiting for Confirmation</p>
                            <CheckCircle className='hidden' />
                        </div>
                        <div className='cursor-pointer mt-2 mx-6 border border-bw-font-grey bg-bw-white p-4 flex items-center justify-between'>
                            <p className='font-rubik text-base font-normal text-bw-font-grey'>Rejected</p>
                            <CheckCircle className='hidden' />
                        </div>
                    </div>
                    <DoubleButton text1='Cancel' text2='Apply' />
                </div>
            </div>
    )
}

export default FilterModal
