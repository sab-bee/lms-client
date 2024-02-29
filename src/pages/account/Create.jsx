import React from 'react'
import { Link } from 'react-router-dom'

const Create = () => {
  const handleSubmit = () => {

  }
  return (
    <div>
      <h2 className="text-center font-medium text-2xl">
        Create an account
      </h2>
      <p className="text-center my-2">
        Enter your email below to create an account
      </p>
      <form onSubmit={handleSubmit} className="space-y-5 mt-6">
        <input type="text" placeholder="student name" className='block h-9 border px-4 rounded-md w-full outline-none focus:bg-neutral-50' />
        <input type="text" placeholder="student id" className='block h-9 border px-4 rounded-md w-full outline-none focus:bg-neutral-50' />
        <input type="email" placeholder="name@example.com" className='block h-9 border px-4 rounded-md w-full outline-none focus:bg-neutral-50' />
        <input type="password" placeholder="••••••••••••" className='block h-9 border px-4 rounded-md w-full outline-none focus:bg-neutral-50' />
        <button type="submit" value={"Login"} className="w-full h-9 bg-black text-white rounded-md">
          Continue
        </button>
      </form>

      <p className="mt-8">
        By clicking continue, you agree to our <a href="" className='underline'>Terms of Service </a> and<a href="" className='underline'> Privacy
          Policy.</a>
      </p>
      <Link to={"/account"} className="mx-auto block w-fit mt-12">
        Already have an account?
      </Link>
    </div>
  )
}

export default Create