import React, { useState } from 'react'
import Dashlink from '../../components/Dashlink'
import { Outlet, useLocation } from 'react-router-dom'
import Inbox from '../../components/Inbox';
import { Trash2, Bolt, BookOpenText, Library as Shelf, Mail, MailOpen } from 'lucide-react';
import Tablink from '../../components/Tablink';

const Dashbaord = () => {
  const [isInbox, setIsInbox] = useState(false)
  const [isReadMessage, setIsReadMessage] = useState(false)
  const [textToRead, setTextToRead] = useState(false)
  const [openId, setOpenId] = useState(-1)
  const [mobileNav, setMobileNav] = useState(false)
  const { pathname } = useLocation()
  const messages = [
    {
      from: 'Delwar',
      sub: 'Share request',
      text: "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ex sint error voluptatem voluptatum magnam dolorem asperiores, voluptates, ullam in quis totam deserunt! Quasi reprehenderit laudantium neque ab adipisci dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ex sint error voluptatem voluptatum magnam dolorem asperiores, voluptates, ullam in quis totam deserunt! Quasi reprehenderit laudantium neque ab adipisci dolore.",
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

  const handleReadMessage = (message, id) => {
    if (id === openId) {
      setIsReadMessage(!isReadMessage)
    } else {
      setOpenId(id)
      setIsReadMessage(true)
    }
    setTextToRead(message)
  }
  return (
    <div className='flex min-h-screen'>
      <button className='bg-black text-white fixed p-3 rounded-full bottom-4 right-4' onClick={handleInbox}>
        {
          isInbox ? <MailOpen /> : <Mail />
        }
        <span className={`-top-2 text-black bg-slate-200 right-0 font-medium w-5 h-5 rounded-full grid items-center justify-center text-sm transition-color absolute`}>1</span>
      </button>
      <Inbox showInbox={isInbox} firstTime={firstTime}>
        <div className={`cs-shadow ${isReadMessage || 'hidden'} absolute w-full top-0 -left-full h-[320px] border rounded-md py-4 pt-0 bg-white overflow-y-auto overscroll-contain`}>
          <div className='border-b py-2 px-4'>
            <button className='ml-auto block w-fit'>
              <Trash2 size={20} strokeWidth={1.5} />
            </button>
          </div>
          <h2 className='font-medium px-6'>{textToRead.from}</h2>
          <h3 className='font-medium border-b pb-2 mb-2 px-6'>{textToRead.sub}</h3>
          <p className='px-6'>{textToRead.text}</p>

        </div>

        <div className='space-y-4 p-4 w-[350px] cs-shadow'>
          {
            messages.length === 0 ? <h2 className='text-center text-lg text-neutral-300'>no message found</h2> : messages.map((message, i) => {
              return (
                <div key={i} className={`${message.unread && 'bg-neutral-50'} border p-3 rounded-md cursor-pointer hover:bg-neutral-50 transition-colors`
                } onClick={() => handleReadMessage(message, i)}>
                  <h2 className={`${message.unread && 'font-medium'}`}>{message.from}</h2>
                  <h3 className={`${message.unread && 'font-medium'} text-sm`}>{message.sub}</h3>
                  <p className='text-neutral-500 text-sm'>{message.text.slice(0, 60) + '...'}</p>
                </div>
              )
            })

          }
        </div>
      </Inbox >

      {/* sidebar */}
      <div className='w-[20%] bg-white z-10 dark:bg-black dark:text-white'>
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

          </div>
          <div className='mt-20'>
            <h2 className='ml-4 account-type font-medium text-lg mb-5'>Dashboard</h2>
            <Dashlink to='/' className='flex gap-2 items-center mb-1'><Shelf size={18} />My Book Shelf</Dashlink>
            <Dashlink className='flex gap-2 items-center mb-1' to='/library'><BookOpenText size={18} />Library</Dashlink>
            <Dashlink className='flex gap-2 items-center mb-1' to='/access'><Bolt size={18} />Access</Dashlink>
          </div>
        </div>
      </div >

      <div className='divider h- w-[1px] bg-neutral-200'></div>
      <div className='w-[80%]' onClick={() => setIsInbox(false)}>
        <div className='content w-[90%] mx-auto mb-8'>
          {
            (pathname.includes('browser') || pathname.includes('library')) &&
            <div className='bg-neutral-100 w-fit px-1 py-1 rounded-md mb-4 flex'>
              <Tablink to='/library'>Discover</Tablink>
              <Tablink to='/browser'>Browse</Tablink>
            </div>
          }
          <Outlet />
        </div>
      </div>
    </div >
  )
}

export default Dashbaord