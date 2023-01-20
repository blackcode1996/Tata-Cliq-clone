import React from 'react'
import AFooter from '../Components/AFooter';
import ANavbar from '../Components/ANavbar'
import {Team}  from '../Components/Team';
import useDarkMode from '../hooks/useDarkMode';
export const Admin = () => {
  const [isDarkMode,toggleDarkMode] = useDarkMode();
  return (
    <div>
      <ANavbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <Team isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <AFooter  isDarkMode={isDarkMode}/>
    </div>
  )
}
