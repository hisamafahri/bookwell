import React from 'react'
import KeyIcon from '../assets/icon/KeyIcon'
import UserIcon from '../assets/icon/UserIcon'
import Logo from '../assets/svg/Logo'
import InputIcon from '../components/InputIcon'
import MainButton from '../components/MainButton'
import { Link, useHistory } from 'react-router-dom'


function Login() {

    const history = useHistory();

    return (
        <div className='mx-5 sm:mx-24 md:mx-40 lg:grid lg:grid-cols-2 lg:mx-0'>
            <div className='lg:flex lg:justify-end'>
                <div className='lg:mr-24 lg:w-80'>
                    <Logo className='mt-16 mb-12' />
                    <div>
                        <p className='font-josefin-sans text-bw-font-grey text-base font-semibold' >Login</p>
                        <p className='font-josefin-sans text-4xl font-semibold'>Welcome back!</p>
                        <p className='font-rubik font-light text-base mt-4 mb-12'>Oh, hi! I believe you are here for a reason. Wait a minute, who are you?</p>
                    </div>
                    <InputIcon icon={<UserIcon />} title='Username' type='text' placeholder='your username' />
                    <InputIcon icon={<KeyIcon />} title='Password' type='password' placeholder='your password' style='mt-4' />
                    <MainButton onClick={() => history.push('/company')} style='mt-12 mb-16' text='Login to your Account' backgroundColor='bg-bw-orange' hoverBackgroundColor='bg-bw-hover-orange' textColor='text-bw-white' />
                </div>
            </div>
            <div className='hidden lg:block'>
                <div className='bg-bw-orange h-full flex flex-col items-start justify-center pl-12'>
                    <p className='font-josefin-sans text-bw-white font-bold text-7xl'>"<br />Feel better, <br />Work better.</p>
                    <p className='font-rubik text-base text-bw-white w-72 mt-4'>--- You can learn to be a better person becuase wellness are meant for any mind, any group, anyone.</p>
                </div>
            </div>
        </div>
    )
}

export default Login
