import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Account = () => {
	return (
		<div className='grid h-screen '>
			<div className='grid items-center w-[80%] sm:w-[400px] lg:w-[500px] mx-auto'>
				<Outlet></Outlet>
			</div>
		</div>
	)
}

export default Account