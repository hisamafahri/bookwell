import React from 'react'

function SingleButton({onClick, text}: any) {
    return (
        <div className='flex flex-row items-center justify-end mx-6 mt-12 mb-9'>
            <div onClick={ onClick } className='px-9 py-4 bg-bw-light-grey hover:bg-bw-dark-grey rounded cursor-pointer'>
                <p className='text-center font-rubik text-sm'>{ text }</p>
            </div>
        </div>
    )
}

export default SingleButton
