import React from 'react'
import style from './search.module.css';

const Search = ({ children, searchPop, firstTimeSearch }) => {
  return (
    <div className={` ${searchPop ? style.show : style.hide} absolute top-10 border rounded-md right-0 md:-left-10 xl:left-0 min-w-[200px] bg-white ${firstTimeSearch && 'hidden'}`}>{children}</div>
  )
}

export default Search