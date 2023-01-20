import React from 'react'
import UserTable from './UserTable'

export const Users = ({isDarkMode}) => {
  return (
    <div style={isDarkMode===true?{backgroundColor:"#001124",color:"white"}:{backgroundColor:"#0279f7",color:"black"}}>
      <UserTable/></div>
  )
}
