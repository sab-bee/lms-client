import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Popover from './Popover'
import Search from './search'
import { useAuth } from '../utils/auth'
import { LogOut } from 'lucide-react'

const Navbar = ({ children }) => {
  const { pathname } = useLocation()
  const [profilePop, setProfilePop] = useState(false)
  const [firstTime, setFirstTime] = useState(true)
  const [firstTimeSearch, setFirstTimeSearch] = useState(true)
  const [searchPop, setSearchPop] = useState(false)
  const auth = useAuth()
  const navigate = useNavigate()

  function handlePop(e) {
    e.stopPropagation()
    setProfilePop(!profilePop)
    setFirstTime(false)
  }

  function handleSearch(e) {
    const value = e.target.value;
    if (value.length > 0) {
      setSearchPop(true);
    } else {
      setSearchPop(false);
    }
    setFirstTimeSearch(false)
  }

  function handleLogout() {
    auth.logout()
    navigate('/account')
  }

  return (
    <div className='xl:w-[85%] mx-auto bg-white' onClick={() => setProfilePop(false)}>
      {
        pathname.includes('account') || <nav className='w-[80%] mx-auto'>
          <div className='flex justify-between items-center h-28'>
            <div>icon</div>
            <div>
              <div className='flex gap-x-4 items-center'>
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
                  <input type="text" className='h-9 border rounded-md px-8 w-[250px] outline-none focus:bg-neutral-50 placeholder:-translate-y-[2px] shadow shadow-[rgba(0,0,0,0.04)]' placeholder='quick search' onChange={handleSearch} />
                  {
                    <Search searchPop={searchPop} firstTimeSearch={firstTimeSearch}>
                      <div className='p-4'>
                        hello
                      </div>
                    </Search>
                  }
                </div>

                <div className='cursor-pointer' onClick={handlePop}>
                  <img src="https://picsum.photos/200/300?grayscale" alt="" className='w-9 h-9 rounded-full' />
                  <div className='trigger relative'>
                    {
                      <Popover profilePop={profilePop} firstTime={firstTime}>

                        <div className='border-b px-5 py-2 hover:bg-neutral-50'>
                          <h2>Admin</h2>
                          <p>admin@mail.com</p>
                        </div>
                        <div className='border-b'>
                          <Link to='/profile' className='block hover:bg-neutral-50 px-5 py-2'>Profile</Link>
                          <Link to='/settings' className='block hover:bg-neutral-50 px-5 py-2'>Settings</Link>
                        </div>
                        {
                          auth.user && <button className='px-5 py-2 hover:bg-neutral-50 w-full flex items-center gap-2' onClick={handleLogout}><LogOut size={18} /> Logout</button>
                        }


                      </Popover>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      }

      < div className='' > {children}</div >
    </div >
  )
}

export default Navbar