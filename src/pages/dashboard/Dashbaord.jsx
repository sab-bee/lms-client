import React, { useState } from 'react'
import Dashlink from '../../components/Dashlink'
import { Outlet } from 'react-router-dom'
import { IoLibraryOutline, IoBookOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";
import { GoInbox } from "react-icons/go";
import Inbox from '../../components/Inbox';
import { Trash2 } from 'lucide-react';

const Dashbaord = () => {
  const [isInbox, setIsInbox] = useState(false)
  const [isReadMessage, setIsReadMessage] = useState(false)
  const [textToRead, setTextToRead] = useState(false)

  const messages = [
    {
      from: 'Delwar',
      sub: 'Share request',
      text: "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ex sint error voluptatem voluptatum magnam dolorem asperiores, voluptates, ullam in quis totam deserunt! Quasi reprehenderit laudantium neque ab adipisci dolore.",
      unread: true
    },
    {
      from: 'Library',
      sub: 'Deadline warning',
      text: 'You have 1 days left',
      unread: false
    }
  ]

  const [firstTime, setFirstTime] = useState(true)

  const handleInbox = (event) => {
    event.stopPropagation()
    setIsInbox(!isInbox)
    setFirstTime(false)
  }

  const handleReadMessage = (message) => {
    setIsReadMessage(true)
    setTextToRead(message)
  }
  return (
    <div className='flex'>
      <Inbox showInbox={isInbox} firstTime={firstTime}>

        <div className={`${isReadMessage || 'hidden'} absolute w-full  top-0 -left-full h-[320px] border rounded-md py-4 pt-0 bg-white`}>
          <div className='border-b py-2 px-2'>
            <button className='ml-auto block w-fit'>
              <Trash2 size={20} strokeWidth={1.5} />
            </button>
          </div>
          <h2 className='font-medium px-4'>{textToRead.from}</h2>
          <h3 className='font-medium border-b pb-2 mb-2 px-4'>{textToRead.sub}</h3>
          <p className='px-4'>{textToRead.text}</p>

        </div>

        <div className='space-y-4 p-4 w-[350px]'>
          {
            messages.length === 0 ? <h2 className='text-center text-lg text-neutral-300'>no message found</h2> : messages.map((message, i) => {
              return (
                <div key={i} className={`${message.unread && 'bg-neutral-50'} border p-3 rounded-md cursor-pointer hover:bg-neutral-50 transition-colors`
                } onClick={() => handleReadMessage(message)}>
                  <h2 className={`${message.unread && 'font-medium'}`}>{message.from}</h2>
                  <h3 className={`${message.unread && 'font-medium'} text-sm`}>{message.sub}</h3>
                  <p className='text-neutral-500 text-sm'>{message.text.slice(0, 60) + '...'}</p>
                </div>
              )
            })

          }
        </div>
      </Inbox >

      <div className='w-[20%]'>
        <div className='menu w-[90%] mx-auto select-none'>
          <div>
            <h2 className='ml-4 mb-5 account-type font-medium text-lg'>Premium Account</h2>
            <div className='flex mb-1 justify-between mx-4'>
              <p>Borrowed</p>
              <span>3</span>
            </div>
            <div className='flex mb-1 justify-between mx-4 border-b pb-2'>
              <p>Due</p>
              <span>4</span>
            </div>

            <div className={` flex mb-1 justify-between items-center cursor-pointer py-[6px] px-4 rounded-md transition-color hover:bg-neutral-50`} onClick={handleInbox}>
              <p className={`flex items-center gap-2`}> <GoInbox />Inbox</p>
              <span className={`font-medium w-5 h-5 rounded-full bg-black text-white grid items-center justify-center text-sm transition-color`}>1</span>
            </div>
          </div>
          <div className='mt-20'>
            <h2 className='ml-4 account-type font-medium text-lg mb-5'>Dashboard</h2>
            <Dashlink to='/' className='flex gap-2 items-center mb-1'><IoLibraryOutline />Book Shelf</Dashlink>
            <Dashlink className='flex gap-2 items-center mb-1' to='/borrow'><IoBookOutline />Borrow</Dashlink>
            <Dashlink className='flex gap-2 items-center mb-1' to='/access'><RiSettingsLine />Access</Dashlink>
          </div>
        </div>
      </div >
      <div className='divider h- w-[1px] bg-neutral-200'></div>
      <div className='w-[80%]' onClick={() => setIsInbox(false)}>
        <div className='content w-[90%] mx-auto'>
          <Outlet />
        </div>
      </div>
    </div >
  )
}

export default Dashbaord