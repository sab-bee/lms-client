import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../utils/auth';

const Reset = () => {
  const { reset } = useAuth()
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'onChange' });
  const onSubmit = data => {
    create(data)
  };
  return (
    <div>
      <h2 className="text-center font-medium text-2xl">
        Reset password
      </h2>
      <p className="text-center my-2">
        Enter your email address to reset password
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={` mt-6 `}>
        {/* email */}
        <div className={`${errors.email ? 'mb-10' : 'mb-5'} relative transition-all`}>
          <input type="email" placeholder="example@g.bracu.ac.bd" className={`${errors.email ? 'border-red-300' : (watch().email && 'border-green-500')} block h-9 border px-4 rounded-md w-full outline-none focus:bg-neutral-50`} {...register("email", {
            required: 'please enter your email', pattern: {
              value: /^[a-zA-Z0-9._%+-]+@g\.bracu\.ac\.bd$/i,
              message: 'please enter your organization email'
            }
          })} />
          <p className={`text-red-500 absolute`}>{errors.email?.message}</p>
        </div>

        {/* password */}
        <div className={`${errors.password ? 'mb-10' : 'mb-5'} relative transition-all`}>
          <input type="password" placeholder="••••••••••••" className={`${errors.password ? 'border-red-300' : (watch().password && 'border-green-500')} block h-9 border px-4 rounded-md w-full outline-none focus:bg-neutral-50`} {...register("password", {
            required: 'please enter your password'
          })} />
          <p className={`text-red-500 absolute`}>{errors.password?.message}</p>

        </div>

        <button type="submit" value={"Login"} className="w-full h-9 bg-black text-white rounded-md">
          Reset
        </button>
      </form>
    </div>
  )
}

export default Reset