import React from 'react'
import style from './inbox.module.css';

const Inbox = ({ children, showInbox, firstTime }) => {
  return (
    <div className={` ${showInbox ? style.show : style.hide} fixed bottom-2 right-2 min-h-[320px] border rounded-md bg-white flex ${firstTime && 'hidden'}`}>{children}</div>
  )
}

export default Inbox