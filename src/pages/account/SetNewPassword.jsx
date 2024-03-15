import React, { useState } from 'react'
import { useAuth } from '../../utils/auth'
import { useForm } from 'react-hook-form'

const SetNewPassword = () => {
  const { setPass } = useAuth()
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'onChange' });
  const onSubmit = data => {
    setPass(data)
  };

  return (
    <div>
      <h2 className="text-center font-medium text-2xl">
        Set up new password
      </h2>
      <p className="text-center my-2">
        create new unique password
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        {/* password */}
        <div className={`${errors.password ? 'mb-10' : 'mb-5'} relative transition-all`}>
          <input type="password" placeholder="••••••••••••" className={`${errors.password ? 'border-red-300' : (watch().password && 'border-green-500')} block h-9 border px-4 rounded-md w-full outline-none focus:bg-neutral-50`} {...register("password", {
            required: 'please enter your password'
          })} />
          <p className={`text-red-500 absolute`}>{errors.password?.message}</p>
        </div>


        <button type="submit" value={"Login"} className="w-full h-9 text-white rounded-md bg-black ">
          set
        </button>
      </form>

    </div>
  )
}

export default SetNewPassword