import React from 'react'
import useBooks from '../../hook/useBooks'
import { useNavigate } from 'react-router-dom'

const BookShelf = () => {
  const { borrowedBooks } = useBooks()
  
  return (
    <div className='w-3/4'>
      <h2 className='font-medium text-2xl'>My Books</h2>
      <p className=' text-neutral-400 mb-8 border-b dark:border-neutral-600 pb-2'>List of borrowed books</p>
      <div className='grid grid-cols-3'>
        {
          borrowedBooks.map((book, i) => <SingleBook key={i} book={book}></SingleBook>)
        }
      </div>
    </div>
  )
}


const SingleBook = ({ book }) => {
  const { book_id, title, author, publish, edition, borrowed, category, desc, stock, image } = book

  const navigate = useNavigate()

  return (
    <div className={`w-[200px] cursor-pointer`} onClick={() => navigate(`/readbook/${book_id}`)}>
      <img src={image} alt="" className={`rounded-md object-cover h-[300px] w-[400px]`} />
      <h2 className='font-medium mt-2'>{title}</h2>
      <h3>{author}</h3>
    </div>
  )
}

export default BookShelf