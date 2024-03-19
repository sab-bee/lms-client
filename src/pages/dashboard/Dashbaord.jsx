import React, { useState } from 'react'
import Dashlink from '../../components/Dashlink'
import { Outlet } from 'react-router-dom'
import { Bolt, BookOpenText, Library as Shelf, Bell } from 'lucide-react';

const Dashbaord = () => {

  const notifications = [
    {
      from: 'Delwar',
      text: 'Share request',
    },
    {
      from: 'Library',
      text: 'your request for a book has accepted'
    }
  ]


  return (
    <div className='flex min-h-screen'>
      {/* sidebar */}
      <div className='w-[20%] bg-white z-10 dark:bg-neutral-800 dark:text-white'>
        <div className='menu w-[90%] mx-auto select-none'>
          <div>
            <h2 className='ml-4 mb-5 account-type font-medium text-lg'>Premium Account</h2>
            <div className='flex mb-1 justify-between mx-4  text-lg'>
              <p className=''>Borrowed</p>
              <span>3</span>
            </div>
            <div className='flex mb-1 justify-between mx-4 border-b dark:border-neutral-600 pb-2  text-lg'>
              <p>Due</p>
              <span>4</span>
            </div>

          </div>
          <div className='mt-20'>
            <h2 className='ml-4 account-type font-medium text-lg mb-5'>Dashboard</h2>
            <Dashlink className='flex gap-2 items-center mb-1' to='/'><BookOpenText size={18} />Library</Dashlink>
            <Dashlink to='/bookshelf' className='flex gap-2 items-center mb-1'><Shelf size={18} />My Book Shelf</Dashlink>
            <Dashlink className='flex gap-2 items-center mb-1' to='/access' ><Bolt size={18} />Access</Dashlink>
          </div>
        </div>
      </div >

      <div className='divider w-[1px] bg-neutral-200 dark:bg-neutral-600'></div>
      <div className='w-[80%]'>
        <div className='content w-[90%] mx-auto mb-8'>

          <Outlet />
        </div>
      </div>
    </div >
  )
}

export default Dashbaord