import axios from 'axios';
import React, { useState } from 'react'
import { useAuth } from '../../utils/auth';
import toast from 'react-hot-toast';
import useBooks from '../../hook/useBooks';
import 'react-day-picker/dist/style.css';

const Book = ({ book }) => {
  const { book_id, title, author, image, description, edition, genre, stock } = book;
  const { user } = useAuth()
  const { isPending, isBorrowed, refetch } = useBooks(book_id)

  function handleBorrow() {
    axios.post('http://localhost:3001/api/transaction/request', {
      student_id: user.student_id,
      book_id
    }, {
      headers: {
        authorization: `bearer ${user.access_token}`
      }
    }).then((res) => {
      refetch()
      toast(res?.data?.message)

    }).catch((err) => {
      console.log(err)
    })
  }

  function handleRender() {
    if (isPending) {
      return <button className='bg-black text-white px-8 py-1 rounded dark:bg-neutral-600 disabled cursor-not-allowed' >Pending</button>
    }

    if (isBorrowed) {
      return <button className='bg-black text-white px-8 py-1 rounded dark:bg-neutral-600 disabled cursor-not-allowed'>Borrowed</button>
    }

    if (stock <= 0) {
      return <button className='bg-black text-white px-8 py-1 rounded dark:bg-purple-500 ' onClick={handleBorrow}>Reserve</button>
    }

    return <button className='bg-black text-white px-8 py-1 rounded dark:bg-purple-500 ' onClick={handleBorrow}>Borrow</button>

  }

  return (
    <div className='mt-20'>
      <h2 className='text-3xl font-medium'>{title}</h2>
      <p className='mt-5'>author - {author}</p>
      <p className='mb-5'>edition - {edition}</p>
      <span className='border px-2 py-1 rounded dark:border-neutral-600'>{genre}</span>
      <div className='flex gap-10 mt-12'>
        <img src={image} alt="" className='w-[193px] h-[235px] object-cover rounded-md' />
        <div className='justify-self-start space-y-5'>
          <h2 className='font-medium'>Description</h2>
          <p className='w-[642px]'>{description}</p>
          <p>
            {
              stock <= 0 ? 'out of stock' : `stock - ${ stock }`
            }
          </p>

          {
            // if user is student [not admin]
            user.student_id && handleRender()
          }
        </div>
      </div>
    </div>
  )
}

export default Book