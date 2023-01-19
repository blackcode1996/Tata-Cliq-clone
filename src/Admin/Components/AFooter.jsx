import React from 'react'

function AFooter({isDarkMode}) {
  return (
    <div className='text-center text-sm absolute left-[32rem] bottom-0' style={isDarkMode===true?{backgroundColor:"#001124",color:"white"}:{backgroundColor:"#0279f7",color:"black"}}>
      © 2023 FORMAL CLiCK | All rights reserved</div>
  )
}

export default AFooter