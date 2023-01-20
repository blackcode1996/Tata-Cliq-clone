import React from 'react'
import { Link } from 'react-router-dom'
import Switch from './Switch'

function ANavbar({isDarkMode,toggleDarkMode}) {
  const ophamburger = () =>{
    let hamburger = window.document.querySelector(".hamburger");
    hamburger.classList="hidden hamburger border p-2 xl:hidden md:hidden sm:hidden  ";
    let close = window.document.querySelector(".closeham");
    close.classList="block space-y-2 m-3 closeham mr-4 border p-2 px-4  xl:hidden md:hidden sm:hidden ";
    let menui = window.document.querySelector(".menuiji");
    menui.classList=isDarkMode===true?" flex-col  menuiji px-10 py-10 space-x-11 justify-end text-[45px]   sm:hidden xl:hidden   md:hidden ":"bg-slate-300 block flex-col  menuiji px-10 py-10 space-x-11 justify-end text-[45px]   sm:hidden xl:hidden   md:hidden ";
    let navbar = window.document.querySelector(".navbarj");
    navbar.classList="navbarj flex justify-between  sticky h-16 border-b-2 border-slate-900  xl:flex 2xl:flex  md:flex  ";
}
 const closehamburger = () =>{
    let jam = window.document.querySelector(".closeham");
    jam.classList="hidden closeham xl:hidden md:hidden sm:hidden ";
    let hamburger = window.document.querySelector(".hamburger");
    hamburger.classList="block space-y-2 m-3 hamburger border p-2 xl:hidden md-hidden sm:hidden";
    let menui = window.document.querySelector(".menuiji");
    menui.classList=isDarkMode===true?" hidden   menuiji px-28 py-4 space-x-11 justify-end text-[45px] sm-hidden xl:hidden  md:hidden ":"bg-slate-300 hidden   menuiji px-28 py-4 space-x-11 justify-end text-[45px] sm-hidden xl:hidden  md:hidden ";
    let navbar = window.document.querySelector(".navbarj");
    navbar.classList="navbarj flex justify-between h-16 sticky  border-b-2 border-slate-900  xl:flex 2xl:flex  md:flex ";
}

  return (
    <div name="Navbar" className='lg:sticky md:sticky xl:sticky sticky  top-0 z-100'>
      <nav className=' navbarj flex h-16  justify-between  border-b-2  border-slate-900 ' style={isDarkMode===true?{backgroundColor:"#001124",color:"white"}:{backgroundColor:"#0279f7",color:"black"}}>
        <div className='flex xl:w-[130px] w-[100%] justify-between'>
            <Link to="Home" smooth duration={1500}><img className='xl:h-[100%] h-[50%]' src={isDarkMode===true?"https://i.ibb.co/y459KXM/logo.png ":"https://i.ibb.co/ZhbkHdV/20230118-101537.png"} alt="logo" /></Link>
            <div>
            <h1 onClick={closehamburger} style={isDarkMode===true?{border:"1px solid white"}:{border:"1px solid black"}} className='space-y-2 m-3 xl:hidden md:hidden sm:hidden  border p-2 xl:text-[100px] md:text-[70px] hidden closeham'>X</h1>
            <div onClick={ophamburger} className="hamburger border p-2  xl:hidden md:hidden sm:hidden space-y-2 m-3" style={isDarkMode===true?{border:"1px solid white"}:{border:"1px solid black"}}>
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
            </div>
            </div>

            </div>
            <ul style={isDarkMode===true?{backgroundColor:"#001124",color:"white"}:{backgroundColor:"#0279f7",color:"black"}} className='hidden menui px-2 py-4 space-x-11 justify-end sm:flex  xl:flex 2xl:flex  md:flex'>
                <li className='hover:underline hover:text-blue-900 hover:underline-offset-8 menui1 cursor-pointer'><Link to="Home" smooth duration={1500}>Home</Link></li>
                <li className='hover:underline hover:text-blue-900 hover:underline-offset-8 cursor-pointer'><Link to="users" smooth duration={1500}>Users</Link></li>
                <li className='hover:underline hover:text-blue-900 hover:underline-offset-8 cursor-pointer'><Link to="product" smooth duration={1500}>Products</Link></li>
                <li className='hover:underline hover:text-blue-900 hover:underline-offset-8 cursor-pointer'><Link to="team" smooth duration={1500}>Team</Link></li>
                <li><Switch toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/></li>
        </ul>
      </nav>
      <ul style={isDarkMode===true?{backgroundColor:"#001124",color:"white"}:{backgroundColor:"#0279f7",color:"black"}}  className=" hidden  menuiji px-2 py-4 space-x-11 justify-end  xl:hidden   md:hidden">
                <li><Switch toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/></li>
                <li className='hover:underline hover:text-blue-900 hover:underline-offset-8 menui1 cursor-pointer'><Link to="Home" smooth duration={1500}>Home</Link></li>
                <li className='hover:underline hover:text-blue-900 hover:underline-offset-8 cursor-pointer'><Link to="users" smooth duration={1500}>Users</Link></li>
                <li className='hover:underline hover:text-blue-900 hover:underline-offset-8 cursor-pointer'><Link to="product" smooth duration={1500}>Products</Link></li>
                <li className='hover:underline hover:text-blue-900 hover:underline-offset-8 cursor-pointer'><Link to="team" smooth duration={1500}>Team</Link></li>
            </ul>
      <hr />
    </div>
  )
}

export default ANavbar