import React, { useState } from 'react';
import useDarkMode from '../hook/useDarkMode';
import { Moon, Sun } from 'lucide-react';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkSide(!darkSide);
  };

  return (
    <div className='absolute top-5 right-5'>
      <label htmlFor="dark" className='cursor-pointer'>
        {
          darkSide ? <Sun color='white' /> : <Moon />
        }
      </label>
      <input type='checkbox' id='dark' onChange={toggleDarkMode} checked={darkSide} className='hidden' />
    </div>

  );
}