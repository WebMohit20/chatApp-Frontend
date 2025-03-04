import { Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Navbar from './components/Navbar'
import NotFound from "./pages/NotFound"
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from './store/features/authSlice'
import { useEffect,useState } from 'react'
import "./App.css"

const App = () => {
  const [isAuth,setIsAuth] = useState(false);
  const {user} = useSelector(state=>state.auth)
  const dispatch = useDispatch();
  useEffect(async ()=>{
    dispatch(checkAuth())
    
  },[]);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path='*' element={<NotFound/>} ></Route>
      </Routes>
    </div>
  )
}

export default App
