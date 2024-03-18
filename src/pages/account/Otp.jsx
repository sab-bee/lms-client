import React, { useState } from 'react'
import OtpForm from '../../components/OtpForm';
import { useAuth } from '../../utils/auth';
import { useEffect } from 'react';

const Otp = () => {
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const { otp: authOtp, verifyEmail, timer, setTimer } = useAuth()

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevSeconds => {
        if (timer === 0) {
          clearInterval(intervalId);
          return 0
        } else {
          return prevSeconds - 1;
        }
      })
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timer])

  const handleOtp = (otp) => {
    setTimer(60)
    authOtp(otp.join(''))
  }

  const handleResend = () => {
    const email = JSON.parse(localStorage.getItem('email'))
    verifyEmail({ ...email })
    setTimer(60)
  }

  return (
    <div>
      <h2 className="text-center font-medium text-2xl">
        OTP
      </h2>
      <p className="text-center my-2 dark:text-slate-400">
        A 6 digit code has been sent to your email
      </p>
      <OtpForm otp={otp} setOTP={setOTP}></OtpForm>

      {
        timer === 0 ?
          <button type="submit" value={"Login"} className="w-full h-9 bg-black text-white rounded-md mt-5 dark:bg-neutral-600" onClick={handleResend}>
            Resend
          </button> :
          <button type="submit" value={"Login"} className="w-full h-9 bg-black text-white rounded-md mt-5 dark:bg-neutral-600" onClick={() => handleOtp(otp)}>
            Verify
          </button>
      }


      <p className='text-center mt-2 text-neutral-500 dark:text-slate-400'>
        {
          timer === 0 ? `otp has expired` : <span>otp expires in <span className='text-xl'>{timer}</span> seconds</span>
        }
      </p>
    </div>
  )
}

export default Otp