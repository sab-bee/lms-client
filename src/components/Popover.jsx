import React from 'react'
import style from './popover.module.css';

const Popover = ({ children, profilePop, firstTime }) => {
  return (
    <div className={` ${profilePop ? style.show : style.hide} absolute top-2 border rounded-md right-0 md:-left-10 xl:left-0 min-w-[200px] bg-white ${firstTime && 'hidden'}`}>{children}</div>
  )
}

export default Popover