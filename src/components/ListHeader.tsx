import React from 'react'

function ListHeader({ name }: any) {
    return (
        <div className='hidden md:grid text-center mt-9 p-5 sm:py-5 sm:px-12 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-between cursor-pointer lg:rounded'>
                <div>
                    <p className='pl-6 font-rubik font-light text-base'>Created on</p>
                </div>
                <div>
                    <p className='pl-6 font-rubik font-light text-base'>Event on</p>
                </div>
                <div>
                    <p className='hidden sm:block pl-6 font-rubik font-light text-base'>{ name }</p>
                </div>
                <div>
                    <p className='hidden sm:block pl-6 font-rubik font-light text-base'>Status</p>
                </div>
            </div>
    )
}

export default ListHeader
