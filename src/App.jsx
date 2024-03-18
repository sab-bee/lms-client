import './App.css'
import { Routes, Route } from 'react-router-dom';
import Dashbaord from './pages/dashboard/Dashbaord';
import BookShelf from './pages/bookshelf/BookShelf';
import Library from './pages/library/Library';
import AddNew from './pages/admin/AddNew';
import Account from './pages/account/Account';
import Login from './pages/account/Login';
import Create from './pages/account/Create';
import Navbar from './components/Navbar';
import Access from './pages/dashboard/Access';
import Browser from './pages/library/Browser';
import { AuthProvider } from './utils/auth';
import { Toaster } from 'react-hot-toast';
import Verify from './pages/account/Verify';
import Otp from './pages/account/Otp';
import SetNewPassword from './pages/account/SetNewPassword';
import Switcher from './components/switcher';
import Borrow from './pages/borrow/Borrow';
import Book from './pages/borrow/Book';
import Discover from './pages/library/Discover';
import ReadBook from './pages/bookshelf/ReadBook';
import RequireStudent from './auth/RequireStudent';
import RequireAdmin from './auth/RequireAdmin';
import Control from './pages/admin/Control';


function App() {

  return (
    <>
      <AuthProvider>
        <Toaster />
        <Navbar>
          <Routes>
            <Route path='/' element={<Dashbaord />} >
              <Route path='' element={<Library />}>
                <Route index element={<Discover />}></Route>
                <Route path='browser' element={<Browser />}></Route>
              </Route>
              <Route path='/bookshelf' element={<RequireStudent><BookShelf /></RequireStudent>}></Route>
              <Route path='/access' element={<RequireStudent><Access /></RequireStudent>}></Route>

              <Route path='/readbook/:_id' element={<Borrow />}>
                <Route index element={<ReadBook />}></Route>
              </Route>

              <Route path='/borrow/:_id' element={<Borrow />}>
                <Route index element={<Book />}></Route>
              </Route>


              {/* admin routes */}

              <Route path='/control' element={<RequireAdmin><Control /></RequireAdmin>}></Route>
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
    </>
  )
}

export default App
