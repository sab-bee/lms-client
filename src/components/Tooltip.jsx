import React from 'react'
import style from './popover.module.css';

const Tooltip = ({ children, show }) => {
  return (
    <div className={` ${show ? style.show : style.hide} absolute top-2 border rounded-md right-0 md:-left-10 xl:left-0 min-w-[200px] bg-white`}>{children}</div>
  )
}

export default Tooltip