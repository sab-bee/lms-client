import React from 'react'

const Book = ({ book }) => {
  const { title, author, image } = book;
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

export default Book