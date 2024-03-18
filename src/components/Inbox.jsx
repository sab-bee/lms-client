import React from 'react'
import style from './inbox.module.css';

const Inbox = ({ children, showInbox, firstTime }) => {
  return (
    <div className={` ${showInbox ? style.show : style.hide} fixed bottom-2 right-20 min-h-[320px] border rounded-md bg-white dark:bg-neutral-700 dark:border-neutral-600 flex ${firstTime && 'hidden'}`}>{children}</div>
  )
}

export default Inbox