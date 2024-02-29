import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import banner from '../../assets/banner.png'

const Account = () => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 h-screen '>
			<div className='bg-black lg:grid items-center hidden'>
				<img src={banner} alt="banner" className='w-[90%] mx-auto' />
			</div>
			<div className='grid items-center w-[80%] md:w-[50%] lg:w-[70%] xl:w-1/2 mx-auto'>
				<Outlet></Outlet>
			</div>
		</div>
	)
}

export default Account