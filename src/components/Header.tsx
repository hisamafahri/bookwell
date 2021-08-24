import React from 'react'

function Header({ text, onClick }: any) {
    return (
        <div className='mx-5 sm:mx-12 lg:px-16 lg:max-w-7xl mt-12 flex flex-row items-end justify-between'>
                <div>
                    <p className='font-josefin-sans text-base font-semibold text-bw-font-grey'>Hi, { text }!</p>
                    <p className='font-josefin-sans font-semibold text-4xl mt-3'>Your events</p>
                </div>
                <div onClick={ onClick } className='border-b-4 border-bw-orange cursor-pointer'>
                    <p className='font-rubik text-base font-medium'>Filter</p>
                </div>
            </div>

    )
}

export default Header
