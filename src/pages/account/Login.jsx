import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../utils/auth'
import { useForm } from 'react-hook-form'

const Login = () => {
	const { login } = useAuth()
	const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'onChange' });
	const onSubmit = data => {
		login(data)
	};

	return (
		<div>
			<h2 className="text-center font-medium text-2xl">
				Login to your account
			</h2>
			<p className="text-center my-2">
				Use your credential to login to your account
			</p>

			<form onSubmit={handleSubmit(onSubmit)} className="mt-6">

				{/* id */}
				<div className={`${errors.user_id ? 'mb-10' : 'mb-5'} relative transition-all`}>
					<input type="text" placeholder="student id" className={`${errors.user_id ? 'border-red-300' : (watch().id && 'border-green-500')} block h-9 border px-4 rounded-md w-full outline-none focus:bg-neutral-50`} {...register("user_id", {
						required: 'please enter student id', pattern: {
							value: /^\d{8}$/i,
							message: 'should be number and 8 digit long'
						}
					})} />
					<p className={`text-red-500 absolute`}>{errors.user_id?.message}</p>
				</div>


				{/* password */}
				<div className={`${errors.password ? 'mb-10' : 'mb-5'} relative transition-all`}>
					<input type="password" placeholder="••••••••••••" className={`${errors.password ? 'border-red-300' : (watch().password && 'border-green-500')} block h-9 border px-4 rounded-md w-full outline-none focus:bg-neutral-50`} {...register("password", {
						required: 'please enter your password'
					})} />
					<p className={`text-red-500 absolute`}>{errors.password?.message}</p>

				</div>


				<button type="submit" value={"Login"} className="w-full h-9 text-white rounded-md bg-black ">
					Login
				</button>
			</form>
			<Link to='/account/reset' className="block ml-auto mt-2 w-fit underline">forgot password</Link>
			<Link to={"/account/create"} className="mx-auto block w-fit mt-12 underline">
				Don't have account?
			</Link>
		</div>
	)
}

export default Login