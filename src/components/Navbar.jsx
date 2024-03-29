import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Search from './modals/search/search'
import { useAuth } from '../utils/auth'
import { LogOut } from 'lucide-react'
import Switcher from './switcher'
import axios from '../utils/axiosPublic'
import ProfileModal from './modals/profile/ProfileModal'

const Navbar = ({ children }) => {
  const { pathname } = useLocation()
  const [profilePop, setProfilePop] = useState(false)
  const [firstTime, setFirstTime] = useState(true)
  const [firstTimeSearch, setFirstTimeSearch] = useState(true)
  const [searchPop, setSearchPop] = useState(false)
  const { user, logout } = useAuth()

  const [quickBooks, setQuickBooks] = useState([])
  const navigate = useNavigate()

  function handlePop(e) {
    e.stopPropagation()
    setProfilePop(!profilePop)
    setFirstTime(false)
  }

  function handleSearch(e) {
    const value = e.target.value;
    setQuickBooks([])
    setSearchPop(false)

    if (value.length > 0) {
      axios.post(`/book/quicksearch`, { query: value }, {
        headers: {
          authorization: `bearer ${user.access_token}`
        }
      }).then((res) => {
        setQuickBooks(res.data)
        setSearchPop(true);
      }).catch((err) => {
        console.log(err.response.data)
      })
    }

    setFirstTimeSearch(false)
  }

  function handleLogout() {
    logout()
  }

  return (
    <div className='xl:w-[85%] mx-auto bg-white rounded-3xl dark:bg-neutral-800 dark:text-neutral-200 overflow-hidden relative shadow-xl select-none' onClick={() => setProfilePop(false)}>
      <Switcher />
      {
        pathname.includes('account') || <nav className='w-[80%] mx-auto'>
          <div className='flex justify-center items-center h-28'>
            <div className='relative'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input type="text" className='h-9 border rounded-md px-8 w-[400px] outline-none focus:bg-neutral-50 placeholder:-translate-y-[2px] shadow shadow-[rgba(0,0,0,0.04)] dark:bg-neutral-700 dark:border-neutral-600' placeholder='quick search' onChange={handleSearch} />

              <Search searchPop={searchPop} firstTimeSearch={firstTimeSearch}>
                {
                  quickBooks?.map(({ title, book_id }, i) => <div key={i} className='p-4 hover:bg-neutral-100 hover:dark:bg-neutral-600 cursor-pointer transition-colors' onClick={() => {
                    setQuickBooks([])
                    navigate(`/borrow/${book_id}`)
                  }}>
                    {title}
                  </div>)
                }
              </Search>

            </div>

            <div className='cursor-pointer absolute top-5 right-16' onClick={handlePop}>
              <img src="https://picsum.photos/200/300?grayscale" alt="" className='w-9 h-9 rounded-full' />
              <div className='trigger relative'>
                {
                  <ProfileModal profilePop={profilePop} firstTime={firstTime}>

                    <div className='border-b px-5 py-2  dark:border-neutral-500 cursor-default'>
                      <h2>{user?.user_name}</h2>
                      <p>{user?.email}</p>
                    </div>
                    <div className='border-b dark:border-neutral-500'>
                      <Link to='/profile' className='block hover:bg-neutral-100 px-5 py-2 hover:dark:bg-neutral-800 rounded-md m-1'>Profile</Link>
                      <Link to='/settings' className='block hover:bg-neutral-100 px-5 py-2 hover:dark:bg-neutral-800 rounded-md m-1'>Settings</Link>
                    </div>
                    {
                      user && <div className='px-5 py-2 hover:bg-neutral-100 flex items-center gap-2 hover:dark:bg-neutral-800 rounded-md m-1' onClick={handleLogout}><LogOut size={18} /> Logout</div>
                    }
                  </ProfileModal>
                }
              </div>
            </div>
          </div>
        </nav>
      }

      <div> {children}</div >
    </div >
  )
}

export default Navbar