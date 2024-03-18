import React from 'react'
import { Outlet } from 'react-router-dom'
import Tablink from '../../components/Tablink'

const Library = () => {
  return (
    <>
      <div className='bg-neutral-100 dark:bg-neutral-700 dark:border dark:border-neutral-600 w-fit px-1 py-1 rounded-full mb-4 flex'>
        <Tablink to='/' >Discover</Tablink>
        <Tablink to='/browser' >Browse</Tablink>
      </div>
      <Outlet />
    </>
  )
}

export default Library


