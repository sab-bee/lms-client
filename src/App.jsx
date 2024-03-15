import './App.css'
import { Routes, Route } from 'react-router-dom';
import Dashbaord from './pages/dashboard/Dashbaord';
import BookShelf from './pages/dashboard/BookShelf';
import Library from './pages/dashboard/Library';
import Request from './pages/dashboard/Request';
import AddNew from './pages/dashboard/AddNew';
import Due from './pages/dashboard/Due';
import Account from './pages/account/Account';
import Login from './pages/account/Login';
import Create from './pages/account/Create';
import Navbar from './components/Navbar';
import Access from './pages/dashboard/Access';
import Browser from './pages/dashboard/Browser';
import { AuthProvider } from './utils/auth';
import RequireAuth from './auth/RequireAuth'
import { Toaster } from 'react-hot-toast';
import Verify from './pages/account/Verify';
import Otp from './pages/account/Otp';
import SetNewPassword from './pages/account/SetNewPassword';


function App() {

  return (
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
            <Route path='/browser' element={<Browser></Browser>}></Route>
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
  )
}

export default App
