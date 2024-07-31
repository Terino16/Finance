"use client"
import { useUser } from '@clerk/nextjs';
import React from 'react'

const WelcomePage = () => {
    const {user,isLoaded} =useUser();
  return (
    <div className='space-y-2 mb-4'>
        <h2 className='text-2xl  lg:text-4xl text-white font-medium'>
            Welcome Back {isLoaded? user?.firstName:" "}
        </h2>

        <p className='text-sm lg:text-base text-red-400'>
            This is your financial overview report
        </p>
    </div>
  )
}

export default WelcomePage