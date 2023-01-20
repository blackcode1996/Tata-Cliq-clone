import React from 'react'
import AFooter from '../Components/AFooter';
import ANavbar from '../Components/ANavbar'
import {Team}  from '../Components/Team';
import useDarkMode from '../hooks/useDarkMode';
import {Users} from '../Components/Users/Users'
export const Admin = () => {
  const [isDarkMode,toggleDarkMode] = useDarkMode();
  return (
    <div>
      <ANavbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <Users isDarkMode={isDarkMode}/>
      <Team isDarkMode={isDarkMode}/>
      <AFooter  isDarkMode={isDarkMode}/>
    </div>
  )
}
