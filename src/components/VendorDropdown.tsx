import React from 'react'
import Chevron from '../assets/icon/Chevron'

function VendorDropdown({ style }:  any) {
    return (
        <div className={`flex flex-col items-start justify-start ${style}`}>
            <p className='font-rubik font-light text-base'>Vendor</p>
            <div className='cursor-pointer border border-bw-font-grey bg-bw-white p-4 w-full flex items-center justify-between'>
                <p className='font-rubik text-base font-normal text-bw-font-grey'>Vendor name</p>
                <Chevron />
            </div>
        </div>
    )
}

export default VendorDropdown
