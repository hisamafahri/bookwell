import React from 'react'
import CheckCircle from '../assets/icon/CheckCircle'


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
                    <div className='flex flex-row items-center justify-end mx-6 mt-12 mb-9'>
                        <div className='mr-2 px-9 py-4 bg-bw-light-grey hover:bg-bw-dark-grey rounded cursor-pointer'>
                            <p className='text-center font-rubik text-sm'>Cancel</p>
                        </div>
                        <div className='px-9 py-4 bg-bw-orange hover:bg-bw-hover-orange rounded cursor-pointer'>
                            <p className='text-center font-rubik text-sm text-bw-white'>Apply</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default FilterModal
