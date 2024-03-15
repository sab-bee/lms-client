import React, { useState } from 'react'
import OtpForm from '../../components/OtpForm';
import { useAuth } from '../../utils/auth';

const Otp = () => {
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const { otp: authOtp } = useAuth()

  const handleOtp = (otp) => {
    let str = ''
    otp.map(code => {
      str += code;
    })
    authOtp(str)
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
      <button type="submit" value={"Login"} className="w-full h-9 bg-black text-white rounded-md mt-5" onClick={() => handleOtp(otp)}>
        Verify
      </button>
    </div>
  )
}

export default Otp