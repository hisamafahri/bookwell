import React from 'react'

function InputLabel({ style, label, type, placeholder }: any) {
    return (
        <div className={`flex flex-col items-start justify-start ${style}`}>
            <p className='font-rubik font-light text-base'>{ label }</p>
            <input type={ type } placeholder={ placeholder } className='flex-1 font-rubik p-4 focus:ring-0 focus:outline-none bg-bw-light-grey font-light w-full' />
        </div>
    )
}

export default InputLabel
