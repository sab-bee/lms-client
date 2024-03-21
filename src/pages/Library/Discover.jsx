import axios from '../../utils/axiosPublic'
import React, { useEffect } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../utils/auth'

const Discover = () => {

  const [latestBooks, setLatestBooks] = useState([])
  const [topBooks, setToptBooks] = useState([])
  const { user } = useAuth()

  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    axios.get('/book/list?type=latest&limit=6', {
      headers: {
        authorization: `bearer ${user.access_token}`
      }
    }).then(res => {
      setLatestBooks(res.data)
      axios.get('/book/list?type=top&limit=6', {
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
            latestBooks.map((book, i) => <SingleBook book={book} latest={true} key={i} setIsHovered={setIsHovered} isHovered={isHovered}></SingleBook>)
          }
        </div>
      </div>



      <div className='mt-8'>
        <h2 className='font-medium text-2xl'>Best Collection</h2>
        <p className=' text-neutral-400 mb-8 border-b dark:border-neutral-600 pb-2'>Top books borroed by students</p>
        <div className='grid grid-cols-4 gap-2'>
          {
            topBooks.map((book, i) => <SingleBook book={book} key={i} setIsHovered={setIsHovered} isHovered={isHovered}></SingleBook>)
          }
        </div>
      </div>
    </div>
  )
}

const SingleBook = ({ book, latest, setIsHovered, isHovered }) => {
  const { book_id, title, author, publish, edition, borrowed, category, desc, stock, image } = book

  const navigate = useNavigate()


  return (
    <div className={`${latest ? 'w-[200px] flex-shrink-0' : 'w-[150px] min-h-[150px]'} cursor-pointer transition-all group duration-300`} onClick={() => navigate(`/borrow/${book_id}`)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={image} alt="" className={`rounded-md object-cover ${latest ? 'h-[300px] w-[400px]':'h-[200px] w-[300px]'} ${isHovered && 'grayscale opacity-50'} group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300`} />
      <h2 className='font-medium mt-2'>{title}</h2>
      <h3>{author}</h3>
    </div>
  )
}

export default Discover