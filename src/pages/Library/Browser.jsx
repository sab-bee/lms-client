import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useAuth } from '../../utils/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Browser = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'onChange' });
  const [books, setBooks] = useState([])
  const { user } = useAuth()

  const onSubmit = data => {
    axios.post('http://localhost:3001/api/book/search/', data, {
      headers: {
        authorization: `bearer ${user.access_token}`
      }
    }).then(res => {
      setBooks(res.data)
    }).catch(err => toast(err.response?.data?.message))
  };

  return (
    <div className='w-[70%]'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex gap-4 mt-10'>
        <div className='relative'>
          <input type="text" placeholder='write title or the author' className='h-9 border px-4 rounded-md outline-none focus:bg-neutral-50 shadow shadow-[rgba(0,0,0,0.04)] placeholder:-translate-y-[2px] w-full dark:bg-neutral-700 dark:border-neutral-600' {...register('query', {
            required: 'please type something'
          }
          )} />
          <p className='absolute text-red-400'>{errors.query?.message}</p>
        </div>
        <button type="submit" className='transition-colors block bg-black dark:bg-neutral-500 text-white h-9 px-6 rounded-md' >search</button>
      </form>

      <div className='grid grid-cols-4 mt-10 gap-8'>
        {
          books.map((book, key) => <SingleBook book={book} key={key}></SingleBook>)
        }
      </div>
    </div>
  )
}

const SingleBook = ({ book }) => {
  const { title, author, image, book_id } = book
  const navigate = useNavigate()
  return (<div onClick={() => navigate(`/borrow/${book_id}`)} className='hover:scale-105 cursor-pointer transition-all duration-300'>
    <img src={image} alt="" className='rounded-md' />
    <h2 className='font-medium mt-2'>{title}</h2>
    <p className='text-neutral-500'>{author}</p>
  </div>)
}
export default Browser