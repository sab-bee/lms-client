import React, { useState } from 'react'
import OtpForm from '../../components/OtpForm';
import { useAuth } from '../../utils/auth';
import { useEffect } from 'react';

const Otp = () => {
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const { otp: authOtp, verifyEmail } = useAuth()

  const [count, setCount] = useState(60);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevSeconds => {
        if (count === 0) {
          clearInterval(intervalId);
          return 0
        } else {
          return prevSeconds - 1;
        }
      })
    }, 1000);
    return () => clearInterval(intervalId);
  }, [count])

  const handleOtp = (otp) => {
    authOtp(otp.join(''))
  }

  const handleResend = () => {
    const email = JSON.parse(localStorage.getItem('email'))
    verifyEmail({ ...email })
    setCount(60)
  }

  return (
    <div>
      <h2 className="text-center font-medium text-2xl">
        OTP
      </h2>
      <p className="text-center my-2">
        A 6 digit code has been sent to your email
      </p>
      <OtpForm otp={otp} setOTP={setOTP}></OtpForm>

      {
        count === 0 ?
          <button type="submit" value={"Login"} className="w-full h-9 bg-black text-white rounded-md mt-5" onClick={handleResend}>
            Resend
          </button> :
          <button type="submit" value={"Login"} className="w-full h-9 bg-black text-white rounded-md mt-5" onClick={() => handleOtp(otp)}>
            Verify
          </button>
      }


      <p className='text-center mt-2 text-neutral-500'>
        {
          count === 0 ? `otp has expired` : <span>otp expires in <span className='text-xl'>{count}</span> seconds</span>
        }
      </p>
    </div>
  )
}

export default Otp