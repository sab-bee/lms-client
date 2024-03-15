import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

function OtpForm({ otp, setOTP }) {
  const inputRefs = useRef([]);
  useEffect(() => {
    inputRefs.current[0].focus()
    inputRefs.current[0].disabled = false;
  }, [])

  // Function to handle input change
  const handleChange = (index, event) => {
    const newOTP = [...otp];
    newOTP[index] = event.target.value;

    // Move focus to the next input if not last input and value is entered
    if (index < otp.length - 1 && event.target.value !== '') {
      inputRefs.current[index + 1].disabled = false;
      inputRefs.current[index + 1].focus();
    }

    setOTP(newOTP);
  };

  // Function to handle key press and move focus backward if needed
  const handleKeyPress = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-center gap-5">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyPress(index, e)}
          className="border border-neutral-200 w-12 h-12 text-2xl grid rounded-md outline-none focus:border-blue-200 focus:border-2 text-center"
          autoComplete="off"
          disabled
        />
      ))}
    </div>
  );
}

export default OtpForm;
