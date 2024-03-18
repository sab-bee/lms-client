import './App.css'
import { Routes, Route } from 'react-router-dom';
import Dashbaord from './pages/dashboard/Dashbaord';
import BookShelf from './pages/dashboard/BookShelf';
import Library from './pages/Library/Library';
import Request from './pages/dashboard/Request';
import AddNew from './pages/dashboard/AddNew';
import Due from './pages/dashboard/Due';
import Account from './pages/account/Account';
import Login from './pages/account/Login';
import Create from './pages/account/Create';
import Navbar from './components/Navbar';
import Access from './pages/dashboard/Access';
import Browser from './pages/Library/Browser';
import { AuthProvider } from './utils/auth';
import RequireAuth from './auth/RequireAuth'
import { Toaster } from 'react-hot-toast';
import Verify from './pages/account/Verify';
import Otp from './pages/account/Otp';
import SetNewPassword from './pages/account/SetNewPassword';
import Switcher from './components/switcher';
import Borrow from './pages/Borrow/Borrow';
import Book from './pages/Borrow/Book';
import Discover from './pages/Library/Discover';


function App() {

  return (
    <div className='dark:bg-black'>
      <Switcher />

      <AuthProvider>
        <Toaster />
        <Navbar>
          <Routes>
            <Route path='/' element={<RequireAuth><Dashbaord /></RequireAuth>} >
              <Route index element={<BookShelf></BookShelf>}></Route>
              <Route path='/library' element={<Library></Library>}></Route>
              <Route path='/access' element={<Access></Access>}></Route>
              <Route path='/request' element={<Request></Request>}></Route>
              <Route path='/due' element={<Due></Due>}></Route>
              <Route path='/addnew' element={<AddNew></AddNew>}></Route>
              <Route path='/library' element={<Library />}>
                <Route index element={<Discover />}></Route>
                <Route path='browser' element={<Browser />}></Route>
              </Route>

              <Route path='/borrow/:_id' element={<Borrow />}>
                <Route index element={<Book />}></Route>
              </Route>
            </Route>
            <Route path="/account" element={<Account />}>
              <Route index element={<Login />}></Route>
              <Route path="create" element={<Create />}></Route>
              <Route path='reset' element={<Verify />}></Route>
              <Route path='otp' element={<Otp />}></Route>
              <Route path='setnewpass' element={<SetNewPassword />}></Route>
            </Route>

          </Routes>
        </Navbar>
      </AuthProvider >
    </div>
  )
}

export default App
