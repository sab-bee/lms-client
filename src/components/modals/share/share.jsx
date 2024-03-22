import React from 'react'
import style from './share.module.css';

const Share = ({ children, showModal, firstTimeSearch }) => {

  return (
    <div className={` ${showModal ? style.show : style.hide} px-6 py-4 absolute bottom-10 left-0 rounded-md w-[400px] bg-neutral-100 dark:bg-neutral-600 overflow-hidden  ${firstTimeSearch && 'hidden'}`}>{children}</div>
  )
}

export default Share