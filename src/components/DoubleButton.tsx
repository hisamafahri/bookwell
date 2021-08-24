import React from 'react'

function DoubleButton({ text1, text2, onClick }: any) {
    return (
        <div className='flex flex-row items-center justify-end mx-6 mt-12 mb-9'>
            <div onClick={ onClick } className='mr-2 px-9 py-4 bg-bw-light-grey hover:bg-bw-dark-grey rounded cursor-pointer'>
                <p className='text-center font-rubik text-sm'>{ text1 }</p>
            </div>
            <div className='px-9 py-4 bg-bw-orange hover:bg-bw-hover-orange rounded cursor-pointer'>
                <p className='text-center font-rubik text-sm text-bw-white'>{ text2 }</p>
            </div>
        </div>
    )
}

export default DoubleButton
