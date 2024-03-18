import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../utils/auth'
import { useForm } from "react-hook-form";

const Create = () => {
  const { create } = useAuth()
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'onChange' });
  const onSubmit = data => {
    create(data)
  };

  return (
    <div>
      <h2 className="text-center font-medium text-2xl">
        Create an account
      </h2>
      <p className="text-center my-2 dark:text-slate-400">
        Enter your email below to create an account
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={` mt-6 `}>

        {/* name */}

        <div className={`${errors.name ? 'mb-10' : 'mb-5'} relative transition-all`}>
          <input type="text" placeholder="student name" className={`${errors.name ? 'border-red-300' : (watch().name && 'border-green-500')} block h-9 border px-4 rounded-md w-full outline-none focus:bg-neutral-50 dark:bg-neutral-700 dark:border-none`}
            {...register('name', {
              required: 'plese enter your name',
              pattern: {
                value: /^[A-Za-z' ]{2,}$/i,
                message: 'name includes atleast 2 character and no special character',
              },
            })} />
          <p className={` text-red-500 absolute`}>{errors.name?.message}</p>
        </div>

        {/* id */}
        <div className={`${errors.id ? 'mb-10' : 'mb-5'} relative transition-all`}>
          <input type="text" placeholder="student id" className={`${errors.id ? 'border-red-300' : (watch().id && 'border-green-500')} block h-9 border px-4 rounded-md w-full outline-none focus:bg-neutral-50 dark:bg-neutral-700 dark:border-none`} {...register("id", {
            required: 'please enter student id', pattern: {
              value: /^.{8}$/i,
              message: 'should be 8 character long'
            }
          })} />
          <p className={`text-red-500 absolute`}>{errors.id?.message}</p>
        </div>



        {/* email */}
        <div className={`${errors.email ? 'mb-10' : 'mb-5'} relative transition-all`}>
          <input type="email" placeholder="example@g.bracu.ac.bd" className={`${errors.email ? 'border-red-300' : (watch().email && 'border-green-500')} block h-9 border px-4 rounded-md w-full outline-none focus:bg-neutral-50 dark:bg-neutral-700 dark:border-none`} {...register("email", {
            required: 'please enter your email', pattern: {
              value: /^[a-zA-Z0-9._%+-]+@g\.bracu\.ac\.bd$/i,
              message: 'please enter your organization email'
            }
          })} />
          <p className={`text-red-500 absolute`}>{errors.email?.message}</p>

        </div>


        {/* password */}
        <div className={`${errors.password ? 'mb-10' : 'mb-5'} relative transition-all`}>
          <input type="password" placeholder="••••••••••••" className={`${errors.password ? 'border-red-300' : (watch().password && 'border-green-500')} block h-9 border px-4 rounded-md w-full outline-none focus:bg-neutral-50 dark:bg-neutral-700 dark:border-none`} {...register("password", {
            required: 'please create an unique password', pattern: {
              value: /^.{8,}$/i,
              message: 'atleast 8 characters long'
            }
          })} />
          <p className={`text-red-500 absolute`}>{errors.password?.message}</p>

        </div>

        <button type="submit" value={"Login"} className="w-full h-9 bg-black text-white rounded-md dark:bg-neutral-600">
          Continue
        </button>
      </form>

      <p className="mt-8">
        By clicking continue, you agree to our <a href="" className='underline'>Terms of Service </a> and<a href="" className='underline'> Privacy
          Policy.</a>
      </p>
      <Link to={"/account"} className="mx-auto block w-fit mt-12 underline">
        Already have an account?
      </Link>
    </div>
  )
}

export default Create