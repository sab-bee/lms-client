import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../utils/auth';

const Verify = () => {
  const { verifyEmail, setTimer } = useAuth()
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'onChange' });
  const onSubmit = data => {
    setTimer(60)
    verifyEmail(data)
  };
  return (
    <div>
      <h2 className="text-center font-medium text-2xl">
        Verify email
      </h2>
      <p className="text-center my-2 dark:text-slate-400">
        Verification code will be sent to this email
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={` mt-6 `}>

        <div className={`${errors.email ? 'mb-10' : 'mb-5'} relative transition-all`}>
          <input type="email" placeholder="example@g.bracu.ac.bd" className={`${errors.email ? 'border-red-300' : (watch().email && 'border-green-500')} block h-9 border px-4 rounded-md w-full outline-none focus:bg-neutral-50 dark:bg-neutral-600 dark:border-none`} {...register("email", {
            required: 'please enter your email', pattern: {
              value: /^[a-zA-Z0-9._%+-]+@g\.bracu\.ac\.bd$/i,
              message: 'please enter your organization email'
            }
          })} />
          <p className={`text-red-500 absolute`}>{errors.email?.message}</p>
        </div>

        <button type="submit" value={"Login"} className="w-full h-9 bg-black text-white rounded-md dark:bg-zinc-600">
          send
        </button>
      </form>
    </div>
  )
}

export default Verify