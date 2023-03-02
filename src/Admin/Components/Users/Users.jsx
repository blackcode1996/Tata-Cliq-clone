import React from 'react'
import AddUsers from './AddUsers'
import UserTable from './UserTable'

export const Users = ({isDarkMode}) => {
  return (
    <div style={isDarkMode===true?{backgroundColor:"#001124",color:"white"}:{backgroundColor:"#0279f7",color:"black"}}>
      <AddUsers isDarkMode={isDarkMode}/>
      <UserTable isDarkMode={isDarkMode}/></div>
  )
}
