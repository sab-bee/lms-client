import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

	const handleSubmit = () => {

	}
	return (
		<div>
			<h2 className="text-center font-medium text-2xl">
				Login to your account
			</h2>
			<p className="text-center my-2">
				Use your credential to login to your account
			</p>
			<form onSubmit={handleSubmit} className="space-y-5 mt-6">
				<input type='text' placeholder="student id" className='block h-9 border px-4 rounded-md w-full outline-none focus:bg-neutral-50' />
				<input type="password" placeholder="••••••••••••" className='block h-9 border px-4 rounded-md w-full outline-none focus:bg-neutral-50' />
				<button type="submit" value={"Login"} className="w-full h-9 text-white rounded-md bg-black ">
					Login
				</button>
			</form>
			<button className="block ml-auto mt-2">forgot password</button>
			<Link to={"/account/create"} className="mx-auto block w-fit mt-12">
				Don't have account?
			</Link>
		</div>
	)
}

export default Login