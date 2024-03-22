import axios from 'axios';
import React, { useState } from 'react'
import { useAuth } from '../../utils/auth';
import toast from 'react-hot-toast';
import useBooks from '../../hook/useBooks';
import 'react-day-picker/dist/style.css';
import Share from '../../components/modals/share/share';
import { useForm } from 'react-hook-form';

const Book = ({ book }) => {
  const { book_id, title, author, image, description, edition, genre, stock } = book;
  const { user } = useAuth()
  const { isPending, isBorrowed, refetch } = useBooks(book_id)
  const [showModal, setshowModal] = useState(false)
  const [firstTimeSearch, setFirstTimeSearch] = useState(true)


  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'onChange' });
  const onSubmit = data => {
    login(data)
  };


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

  function handleReserve() {

  }

  function handleShare() {
    setFirstTimeSearch(false)
    setshowModal(!showModal)
  }

  function handleRender() {
    if (isPending) {
      return <button className='bg-black text-white px-8 py-1 rounded dark:bg-neutral-600 disabled cursor-not-allowed' >Pending</button>
    }

    if (isBorrowed) {
      return <button className='bg-black text-white px-8 py-1 rounded dark:bg-neutral-600 disabled cursor-not-allowed'>Borrowed</button>
    }

    if (stock <= 0) {
      return <div className='space-x-4'>
        <button className='bg-black text-white px-8 py-1 rounded dark:bg-purple-500 ' onClick={handleReserve}>Reserve</button>
        <button className='bg-black text-white px-8 py-1 rounded dark:bg-neutral-600 ' onClick={handleShare}>Ask a friend</button>
      </div>
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
        <div className='justify-self-start space-y-5 relative'>
          <Share showModal={showModal} firstTimeSearch={firstTimeSearch} >
            <form onSubmit={handleSubmit(onSubmit)} className="">

              {/* id */}
              <div className={`${errors.user_id ? 'mb-10' : 'mb-5'} relative transition-all `}>
                <input type="text" placeholder="student id" className={`${errors.user_id ? 'border-red-300 dark:border-red-500' : (watch().id && 'dark:border-green-500 border-green-500')} block h-9 border px-4 rounded-md w-full outline-none focus:bg-neutral-50 dark:bg-neutral-700 dark:text-white dark:border-none`} {...register("user_id", {
                  required: 'please enter friends student id', pattern: {
                    value: /^.{8}$/i,
                    message: 'should be 8 character long'
                  }
                })} />
                <p className={`text-red-500 dark:text-neutral-200 text-sm absolute -bottom-6`}>{errors.user_id?.message}</p>
              </div>

              <button type="submit" value={"Login"} className="w-fit mx-auto block px-5 h-9 text-white rounded-md bg-black dark:bg-purple-500">
                Ask
              </button>
            </form>
          </Share>
          <h2 className='font-medium'>Description</h2>
          <p className='w-[642px]'>{description}</p>
          <p>
            {
              stock <= 0 ? 'out of stock' : `stock - ${stock}`
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