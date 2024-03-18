import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useAuth } from '../../utils/auth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Discover = () => {

  const [latestBooks, setLatestBooks] = useState([])
  const [topBooks, setToptBooks] = useState([])
  // const [latestBooks, setLatestBooks] = useState([])
  const { user } = useAuth()


  useEffect(() => {
    axios.get('http://localhost:3001/api/book/list?type=latest&limit=6', {
      headers: {
        authorization: `bearer ${user.access_token}`
      }
    }).then(res => {
      setLatestBooks(res.data)
      axios.get('http://localhost:3001/api/book/list?type=top&limit=6', {
        headers: {
          authorization: `bearer ${user.access_token}`
        }
      }).then(res => {
        setToptBooks(res.data)
      })

    }).catch(err => toast(err.response?.data?.sqlMessage))
  }, [])

  return (
    <div className='w-[70%]'>
      <div>
        <h2 className='font-medium text-2xl'>Latest Arrival</h2>
        <p className=' text-neutral-400 mb-8 border-b dark:border-neutral-600 pb-2'>List of new books this month</p>

        <div className='gap-8 overflow-x-auto overflow-y-hidden flex pb-2'>
          {
            latestBooks.map((book, i) => <SingleBook book={book} latest={true} key={i}></SingleBook>)
          }
        </div>
      </div>



      <div className='mt-8'>
        <h2 className='font-medium text-2xl'>Top Picks</h2>
        <p className=' text-neutral-400 mb-8 border-b dark:border-neutral-600 pb-2'>Top books borroed by students</p>
        <div className='grid grid-cols-3'>
          {
            topBooks.map((book, i) => <SingleBook book={book} key={i}></SingleBook>)
          }
        </div>
      </div>

      {/* <div className='mt-8'>
        <h2 className='font-medium text-2xl'>For You</h2>
        <p className=' text-neutral-500 mb-4 border-b pb-2'>Recommended for you based on your record</p>
        <div className='flex gap-4'>
          {
            recommend.map((book, i) => <SingleBook book={book} key={i}></SingleBook>)
          }
        </div>
      </div> */}


    </div>
  )
}

const SingleBook = ({ book, latest }) => {
  const { book_id, title, author, publish, edition, borrowed, category, desc, stock, image } = book
  const navigate = useNavigate()
  return (
    <div className={`${latest ? 'w-[200px] flex-shrink-0' : 'w-[150px] min-h-[150px]'} hover:scale-105 cursor-pointer transition-all duration-300`} onClick={() => navigate(`/borrow/${book_id}`)}>
      <img src={image} alt="" className={`rounded-md object-cover`} />
      <h2 className='font-medium mt-2'>{title}</h2>
      <h3>{author}</h3>
    </div>
  )
}

export default Discover