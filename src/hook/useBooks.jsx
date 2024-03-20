import { useEffect, useState } from 'react'
import { useAuth } from '../utils/auth'
import axios from '../utils/axiosSecured'

const useBooks = (reference_book_id) => {
  const { user } = useAuth()
  const [isPending, setisPending] = useState(false)
  const [pendingBooks, setPendingBooks] = useState([])

  const [isBorrowed, setIsBorrowed] = useState(false)
  const [borrowedBooks, setBorrowedBooks] = useState([])

  useEffect(() => {

    // pending books
    axios.get(`/transaction/pending/${user.student_id}`).then((res) => {
      setPendingBooks(res.data)
      const book = res.data.find((book) => book.book_id === reference_book_id)
      if (book) {
        setisPending(true)
      }
    }).catch(err => console.log(err))


    // borrowed books
    axios.get(`/transaction/borrowed/${user.student_id}`).then((res) => {
      setBorrowedBooks(res.data)
      const book = res.data.find((book) => book.book_id === reference_book_id)
      if (book) {
        setIsBorrowed(true)
      }
    }).catch((err) => console.log(err.response?.data))

  }, [])

  return { isPending, pendingBooks, isBorrowed, borrowedBooks }
}

export default useBooks