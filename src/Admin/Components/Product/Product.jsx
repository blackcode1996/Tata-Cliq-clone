import React from 'react'
import Addpro from './Addpro'
import PRotable from './PRotable'

export const Product = ({isDarkMode}) => {
  return (
    <div style={isDarkMode===true?{backgroundColor:"#001124",color:"white"}:{backgroundColor:"#0279f7",color:"black"}}>
      <Addpro isDarkMode={isDarkMode}/>
      <PRotable isDarkMode={isDarkMode}/></div>
  )
}
