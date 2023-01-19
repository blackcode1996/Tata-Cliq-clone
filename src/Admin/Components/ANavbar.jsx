import React from 'react'
import { Link } from 'react-router-dom'
import Switch from './Switch'

function ANavbar({isDarkMode,toggleDarkMode}) {
  return (
    <div>
      <nav className='flex justify-between h-16' style={isDarkMode===true?{backgroundColor:"#001124",color:"white"}:{backgroundColor:"#0279f7",color:"black"}}>
        <img className='w-20' src="https://i.ibb.co/ZhbkHdV/20230118-101537.png " alt="logo" />
        <ul className='flex space-x-4 justify-end mt-4 mr-2'>
          <li><Link to="/admin">Home</Link></li>
          <li>Users</li>
          <li>Products</li>
          <li>Team</li>
          <li><Switch toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/></li>
        </ul>
      </nav>
      <hr />
    </div>
  )
}

export default ANavbar