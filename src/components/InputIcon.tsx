import React from 'react'

function InputIcon({ icon, title, type, placeholder, style }: any) {
    return (
        <div className={`flex flex-col items-start justify-start ${style}`}>
            <p className='font-rubik font-light text-base'>{title}</p>
            <div className='flex flex-row items-start justify-center w-full'>
                <div className='p-4 bg-bw-light-grey flex-shrink-0 mb-1'>
                    {icon}
                </div>
                <input type={type} placeholder={placeholder} className='flex-1 font-rubik py-4 pr-4 focus:ring-0 focus:outline-none bg-bw-light-grey font-light' />
            </div>
        </div>
    )
}

export default InputIcon
