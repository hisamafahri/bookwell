import React from 'react'

function DetailsText({ style, label, details }: any) {
    return (
        <div className={`flex flex-col items-start justify-start ${style}`}>
            <p className='font-rubik font-light text-sm'>{label}</p>
            <p className='font-rubik font-normal text-base'>{details}</p>
        </div>
    )
}

export default DetailsText
