import React from 'react'

function Header({ text }: any) {
    return (
        <div className='mx-5 mt-12 flex flex-row items-end justify-between'>
                <div>
                    <p className='font-josefin-sans text-base font-semibold text-bw-font-grey'>Hi, { text }!</p>
                    <p className='font-josefin-sans font-semibold text-4xl mt-3'>Your events</p>
                </div>
                <div className='border-b-4 border-bw-orange cursor-pointer'>
                    <p className='font-rubik text-base font-medium'>Filter</p>
                </div>
            </div>

    )
}

export default Header
