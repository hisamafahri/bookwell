import React from 'react'

function TextareaLabel({ style, label, placeholder }: any) {
    return (
        <div className={`flex flex-col items-start justify-start ${style}`}>
            <p className='font-rubik font-light text-base'>{ label }</p>
            <textarea rows={3} placeholder={ placeholder } className='flex-1 font-rubik p-4 focus:ring-0 focus:outline-none bg-bw-light-grey font-light w-full'></textarea>
        </div>
    )
}

export default TextareaLabel
