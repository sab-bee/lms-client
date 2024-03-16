import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Book from './Book'
import axios from 'axios'
import { useAuth } from '../../utils/auth'

const Borrow = () => {
  const { _id } = useParams()
  const [book, setBook] = useState(null)
  const { user } = useAuth()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios.post('http://localhost:3001/api/book/getbookbyid/', { book_id: _id }, {
      headers: {
        authorization: `bearer ${user.access_token}`
      }
    }).then(res => {
      setBook(res.data)
    }).catch(err => toast(err.response?.data?.message))
  }, [])

  return (
    <div><Book book={book} /></div>
  )
}

export default Borrow