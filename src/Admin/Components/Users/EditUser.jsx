import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getUSERSs, UpdateUser } from "../../../Redux/AuthReducer/action";

function EditUser() {
 
  const {id}=useParams()
  const [currentData,setCurrentData]= useState({email:"",profile:"",name:"",password:""})
  const dispatch= useDispatch()
  const navigate= useNavigate()
  const users = useSelector((store) => store.AuthReducer.users);

  
  useEffect(() => {
      dispatch(getUSERSs);
    }, [dispatch,users]);

  useEffect(()=>{
  const user= users.find((item)=>item.id===Number(id))
  user && setCurrentData(user)

  },[id,users])
  const handleChange=(e)=>{
    const {name,value}=e.target;
  
    setCurrentData({
      ...currentData,
      [name]:value
    })
  }
  
const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(UpdateUser(id,currentData)).then(() => {
    navigate("/admin")
  })
}


  return (
    <>
    <div>
    <h1>Edit product</h1>
    <form onSubmit={handleSubmit}>
      
        <input type="text" name='name' value={currentData.name} 
        onChange={handleChange}/> <br />
        <input type="email" name='email' value={currentData.email}  
          onChange={handleChange} /> <br />
        <input type="url" name='profile' value={currentData.profile}
           onChange={handleChange} /> <br />
        <input type="text" name='password' value={currentData.password}
           onChange={handleChange} /> <br />
        <button type="submit" value="Submit">Update</button>
      </form>

  
    </div>
  </>

  )
}

export default EditUser