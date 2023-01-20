import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
export const Team = ({isDarkMode}) => {
    const team=[
        {id:1,name:"Aakash Mukherjee",Profile:"https://avatars.githubusercontent.com/u/110044436?v=4",Github:"https://github.com/blackcode1996",Role:"CEO",linkedin:"https://www.linkedin.com/in/aakash-mukherjee-blackcode1996/",Responsebility:"Admin Panel,Backend"},
        {id:2,name:"Aniket Parmar",Profile:"https://avatars.githubusercontent.com/u/80318654?v=4",Github:"https://github.com/aniketparmar29",Role:"COO",linkedin:"https://www.linkedin.com/in/aniket-parmar-a42597239/",Responsebility:"Admin Panel,Backend"},
        {id:3,name:"Ranbir Singh",Profile:"https://avatars.githubusercontent.com/u/103633804?v=4",Github:"https://github.com/sranbir392",Role:"CFO",linkedin:"https://www.linkedin.com/in/ranbir-singh-a2789916a/",Responsebility:"Admin Panel,Backend"},
        {id:4,name:"Sajan Kumar",Profile:"https://avatars.githubusercontent.com/u/107640190?v=4",Github:"https://github.com/sajan1789",Role:"CMO",linkedin:"https://www.linkedin.com/in/sajan-kumar-gupta/",Responsebility:"Admin Panel,Backend"},
        {id:5,name:"Shivam Dubey",Profile:"https://avatars.githubusercontent.com/u/108024596?v=4",Github:"https://github.com/Shivam00002",Role:"CTO",linkedin:"https://www.linkedin.com/in/shivam-dubey-6127b4236/",Responsebility:"Admin Panel,Backend"},
    ]
  return (
    <div style={isDarkMode===true?{backgroundColor:"#001124",color:"white"}:{backgroundColor:"#0279f7",color:"black"}}>
        <h1 className='text-center text-4xl -mb-16'>Team</h1>
    <div className='w-full grid grid-cols-2 mt-8 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center py-8 ' name="team" >
        {team.map(({ id, name, Profile,Github,linkedin,Role,Responsebility }) => (
            <div
              key={id}
              className={`shadow-lg  duration-300 p-3 rounded-lg flex-col   ${isDarkMode===true?"shadow-blue-400":"shadow-blue-900"} ` }  
            >
              <img src={Profile} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{name}</p>
              <p>Role: {Role}</p>
              <div className='flex justify-around '>
                <a className='text-2xl'  href={linkedin}><FaLinkedin/></a>
                <a className='text-2xl' href={Github}><FaGithub/></a>
              </div>
            </div>
          ))}
    </div>
    </div>
  )
}
