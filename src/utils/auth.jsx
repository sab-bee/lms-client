import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { clearCookie, cookie } from "./cookie";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [email, setEmail] = useState(null) // to store email to be verified
  const navigate = useNavigate()


  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const create = async (input) => {
    try {
      const res = await axios.post('http://localhost:3001/api/auth/register', input)
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
      const res = await axios.post('http://localhost:3001/api/auth/login', input)
      setUser(res.data)
      cookie('access_token', res.data.access_token, 365)
      navigate('/')
    } catch (error) {
      toast(error?.response?.data?.message, {
        id: 'err3'
      })
    }
  };

  const logout = async () => {
    const res = await axios.post('http://localhost:3001/api/auth/logout')
    clearCookie('access_token')
  };

  const verifyEmail = async (email) => {
    try {
      const res = await axios.post('http://localhost:3001/api/auth/verifyEmail', email)
      setEmail(email)
      navigate('/account/otp')
    } catch (error) {
      toast(error?.response?.data?.message, {
        id: 'err4'
      })
    }
  }

  const otp = async (otp) => {
    try {
      const res = await axios.post('http://localhost:3001/api/auth/otpCheck', { ...email, otp })
      navigate('/account/SetNewPassword')
    } catch (error) {
      toast(error?.response?.data?.message, {
        id: 'err5'
      })
    }
  }

  const setPass = async (password) => {
    try {
      const res = await axios.post('http://localhost:3001/api/auth/setPass', { ...email, password })
      navigate('/account')
    } catch (error) {
      toast(error?.response?.data?.message, {
        id: 'err6'
      })
    }

  }

  return (
    <AuthContext.Provider
      value={{ user, create, login, logout, verifyEmail, otp, setPass }}
    >{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
