import React from 'react'

function TripleButton({ text1, text2, text3 }: any) {
    return (
        <div className='flex flex-col items-end justify-end mx-6 mt-12 mb-9'>
            <div className='px-9 py-4 bg-bw-orange hover:bg-bw-hover-orange rounded cursor-pointer'>
                <p className='text-center font-rubik text-sm text-bw-white'>{ text3 }</p>
            </div>
            <div className='px-9 py-4 bg-bw-red rounded cursor-pointer mt-2'>
                <p className='text-center font-rubik text-sm text-bw-white'>{ text2 }</p>
            </div>
            <div className='px-9 py-4 bg-bw-light-grey hover:bg-bw-dark-grey rounded cursor-pointer mt-2'>
                <p className='text-center font-rubik text-sm'>{ text1 }</p>
            </div>
            
        </div>
    )
}

export default TripleButton
