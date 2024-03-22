import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../utils/auth'
import axios from '../../utils/axiosPublic'


const ReadBook = () => {
  const { _id } = useParams()
  const { user } = useAuth()

  const fn = async () => {
    const res = await axios.post(`/book/getbookbyid/`, { book_id: _id }, {
      headers: {
        authorization: `bearer ${user.access_token}`
      }
    })
    return res.data
  }

  const { isPending, error, data } = useQuery({
    queryKey: ['bookdata'],
    queryFn: fn
  })

  if (isPending) return <p>pending</p>
  if (error) return <p>eror</p>

  return (
    <div className='mt-20'>
      <h2 className='text-3xl font-medium'>{data.title}</h2>
      <p className='mt-5'>author - {data.author}</p>
      <p className='mb-5'>edition - {data.edition}</p>
      <span className='border px-2 py-1 rounded dark:border-neutral-600'>{data.genre}</span>
      <div className='flex gap-10 mt-12'>
        <img src={data.image} alt="" className='w-[193px] h-[235px] object-cover rounded-md' />
        <div className='justify-self-start space-y-5'>
          <h2 className='font-medium'>Description</h2>
          <p className='w-[642px]'>{data.description}</p>
     </div>
      </div>
    </div>
  )
}

export default ReadBook