import React, { useEffect, useState } from 'react'
import axios from '../../utils/axiosPublic'
import { useAuth } from '../../utils/auth'


const Manage = () => {
  const [books, setBooks] = useState([])
  const [reload, setReload] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    axios.post('/transaction/bookbystatus', { status: 'pending' }, {
      headers: {
        authorization: `bearer ${user.access_token}`
      }
    }).then((res) => setBooks(res.data))
  }, [reload])

  return (
    <div className='overflow-auto'>
      <div className="border dark:border-neutral-500 rounded-xl w-[1000px]">
        <table className="text-left w-full text-sm ">
          <thead>
            <tr className='grid grid-cols-9 border-b dark:border-neutral-500 gap-x-4'>
              <th className='pl-5 font-medium col-span-2'>Title</th>
              <th className='font-medium'>Book Id</th>
              <th className='font-medium'>Student Id</th>
              <th className='font-medium'>Issue Date</th>
              <th className='font-medium'>Due Date</th>
              <th className='font-medium col-span-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              books.map((book, i) => <TableRow book={book} setReload={setReload} key={i} user={user}></TableRow>)
            }
          </tbody>
          <tfoot>
            <tr className='grid grid-cols-9 gap-x-4'>
              <th className='pl-5 font-normal text-neutral-400 col-span-2'>Name</th>
              <th className='font-normal text-neutral-400'>Issue</th>
              <th className='font-normal text-neutral-400'>Due Date</th>
              <th className='font-normal text-neutral-400'>Days Left</th>
              <th className='font-normal text-neutral-400 col-span-2'>Action</th>
            </tr>
          </tfoot>

        </table>
      </div>
    </div>
  )
}


const TableRow = ({ book, setReload, user }) => {
  const { title, book_id, student_id, transaction_id, issue_date, due_date } = book;

  const handleApprove = () => {
    axios.post('/transaction/action', { approve: true, transaction_id, book_id }, {
      headers: {
        authorization: `bearer ${user.access_token}`
      }
    }).then((res) => {
      console.log(res.data)
      setReload(prev => !prev)
    })
  }

  const handleDeny = () => {
    axios.post('/transaction/action', { approve: false, transaction_id, book_id }, {
      headers: {
        authorization: `bearer ${user.access_token}`
      }
    }).then((res) => {
      console.log(res.data)
      setReload(prev => !prev)
    })
  }

  return <tr className='grid grid-cols-9 border-b dark:border-neutral-600 py-2 gap-x-4 items-center'>
    <td className='pl-5 col-span-2'>{title}</td>
    <td className='' >{book_id}</td>
    <td className='' >{student_id}</td>
    <td className='' >{issue_date}</td>
    <td className='' >{due_date}</td>
    <td className='pr-5 space-x-3 col-span-2'>
      <button className='h-8 bg-black dark:bg-purple-500  text-white rounded-md px-5' onClick={handleApprove}>Approve</button>
      <button className='h-8 bg-black dark:bg-purple-500 text-white rounded-md px-5' onClick={handleDeny}>Deny</button>
    </td>
  </tr>
}

export default Manage