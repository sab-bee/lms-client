import './App.css'
import { Routes, Route } from 'react-router-dom';
import Dashbaord from './pages/dashboard/Dashbaord';
import BookShelf from './pages/dashboard/BookShelf';
import Borrow from './pages/dashboard/Borrow';
import Request from './pages/dashboard/Request';
import AddNew from './pages/dashboard/AddNew';
import Due from './pages/dashboard/Due';
import Account from './pages/account/Account';
import Login from './pages/account/Login';
import Create from './pages/account/Create';
import Navbar from './components/Navbar';
import Access from './pages/dashboard/Access';
function App() {

  return (
    <Navbar>
      <Routes>
        <Route path='/' element={<Dashbaord></Dashbaord>}>
          <Route index element={<BookShelf></BookShelf>}></Route>
          <Route path='/borrow' element={<Borrow></Borrow>}></Route>
          <Route path='/access' element={<Access></Access>}></Route>
          <Route path='/request' element={<Request></Request>}></Route>
          <Route path='/due' element={<Due></Due>}></Route>
          <Route path='/addnew' element={<AddNew></AddNew>}></Route>
        </Route>
        <Route path="/account" element={<Account />}>
          <Route index element={<Login />}></Route>
          <Route path="create" element={<Create />}></Route>
        </Route>
      </Routes>
    </Navbar>
  )
}

export default App
