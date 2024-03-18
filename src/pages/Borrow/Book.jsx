import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../utils/auth';
import toast from 'react-hot-toast';

const Book = ({ book }) => {
  const { book_id, title, author, image, description, edition, genre, stock } = book;
  const { user } = useAuth()
  const [isRequested, setIsRequested] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:3001/api/transaction/pending/${user.student_id}`, {
      headers: {
        authorization: `bearer ${user.access_token}`
      }
    }).then((res) => {
      const book = res.data.find((book) => book.book_id === book_id)
      if (book) {
        setIsRequested(true)
      }
    }).catch(err => console.log(err))
  }, [])

  function handleBorrow() {
    axios.post('http://localhost:3001/api/transaction/request', {
      student_id: user.student_id,
      book_id
    }, {
      headers: {
        authorization: `bearer ${user.access_token}`
      }
    }).then((res) => {
      toast(res?.data?.message)
      if (res.status === 200) {
        setIsRequested(true)
      }

    }).catch((err) => {
      console.log(err)
    })
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
          <p>stock - {stock}</p>
          {
            user.student_id && <>
              {
                isRequested ?
                  <button className='bg-neutral-50 dark:bg-neutral-500 px-8 py-1 rounded border dark:border-neutral-600' disabled >requested</button> :
                  <button className='bg-black text-white px-8 py-1 rounded dark:bg-neutral-500' onClick={handleBorrow}>borrow</button>
              }</>
          }
        </div>
      </div>


    </div>
  )
}

export default Book