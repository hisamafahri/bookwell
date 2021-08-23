import Avatar from 'boring-avatars'
import React from 'react'
import Chevron from '../assets/icon/Chevron'
import Logo from '../assets/svg/Logo'

function NavBar({ text }: any) {
    return (
        <div className='shadow-xl w-full px-5 sm:px-12 py-8'>
            <div className='lg:px-16 lg:max-w-7xl flex flex-row items-center justify-between '>
                <Logo />
                <div className='flex flex-row items-center justify-center hover:bg-bw-light-grey rounded px-2 py-2 cursor-pointer'>
                    <Avatar size={24} name="Mary Edwards" variant="beam" colors={["#FFE4AA", "#FCA699", "#E2869B", "#C9729F", "#583B7E"]} />
                    <p className='mr-1 ml-2 font-rubik text-xs font-medium'>{text}</p>
                    <Chevron />
                </div>
            </div>
        </div>
    )
}

export default NavBar
