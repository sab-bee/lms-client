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

  const handlePaste = (event) => {
    const pastedText = event.clipboardData.getData('text');
    const pasteArray = pastedText.split('');
    const newOTP = [...otp];

    // Distribute each character of the pasted text into corresponding fields
    pasteArray.forEach((character, index) => {
      if (inputRefs.current[index]) {
        newOTP[index] = character;
        inputRefs.current[index].value = character;
        inputRefs.current[index].disabled = false;

        // Move focus to the next input if not the last input
        if (index < otp.length - 1) {
          inputRefs.current[index + 1].focus();
        }
      }
    });

    setOTP(newOTP);
  }

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
          onPaste={handlePaste}
          className="border border-neutral-200 w-12 h-12 text-2xl grid rounded-md outline-none focus:border-blue-200 focus:border-2 text-center dark:bg-neutral-700 dark:border-none"
          autoComplete="off"
          disabled
        />
      ))}
    </div>
  );
}

export default OtpForm;
