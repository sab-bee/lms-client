import axios from '../utils/axiosPublic'

import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [timer, setTimer] = useState(0)
  const navigate = useNavigate()


  // useEffect(() => {
  //   localStorage.setItem('user', JSON.stringify(user))
  // }, [user])

  const create = async (input) => {
    try {
      const res = await axios.post('/auth/register', input)
      toast(res?.data?.message)
      navigate('/account')

    } catch (err) {
      if (err?.response?.data?.errno === 1452) {
        toast('student id does not belong to us', {
          id: 'err1'
        })
        return
      }
      if (err?.response?.data?.errno === 1062) {
        toast('an account associated with this email already exist', {
          id: 'err1'
        })
        return
      }
      toast(err?.response?.data?.message, {
        id: 'err2'
      })
    }

    /* 
    sample data

    sabbir
    19301142
    sabbir@g.bracu.ac.bd
    raccoonskt
    */
  }

  const login = async (input) => {
    try {
      const res = await axios.post('/auth/login', input)
      setUser(res.data)
      localStorage.setItem('user', JSON.stringify(res.data))
      navigate('/')
    } catch (error) {
      toast(error?.response?.data?.message, {
        id: 'err3'
      })
    }
  };

  const logout = async () => {
    const res = await axios.post('/auth/logout')
    localStorage.removeItem('user')
    navigate('/account')
  };

  const verifyEmail = async (email) => {
    try {
      const res = await axios.post('/auth/verifyEmail', email)
      localStorage.setItem("email", JSON.stringify(email))
      navigate('/account/otp')
    } catch (error) {
      toast(error?.response?.data?.message, {
        id: 'err4'
      })
    }
  }

  const otp = async (otp) => {
    const email = JSON.parse(localStorage.getItem('email'))
    try {
      const res = await axios.post('/auth/otpCheck', { ...email, otp })
      navigate('/account/setnewpass')
    } catch (error) {
      console.log(error)
      toast(error?.response?.data?.message, {
        id: 'err5'
      })
    }
  }

  const setPass = async ({ password }) => {
    const email = JSON.parse(localStorage.getItem('email'))
    try {
      const res = await axios.post('/auth/setPass', { ...email, password })
      navigate('/account')
    } catch (error) {
      toast(error?.response?.data?.message, {
        id: 'err6'
      })
    }

  }

  return (
    <AuthContext.Provider
      value={{ user, create, login, logout, verifyEmail, otp, setPass, timer, setTimer }}
    >{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
