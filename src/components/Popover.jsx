import React from 'react'
import style from './popover.module.css';

const Popover = ({ children, profilePop, firstTime }) => {
  return (
    <div className={` ${profilePop ? style.show : style.hide} absolute top-2 border rounded-md right-0 md:-right-20 min-w-[200px] bg-white dark:bg-zinc-600 dark:border-none ${firstTime && 'hidden'}`}>{children}</div>
  )
}

export default Popover