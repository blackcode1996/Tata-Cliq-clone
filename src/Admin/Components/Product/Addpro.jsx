import React, {  useState } from 'react'
import { useDispatch,  } from 'react-redux'
import { addPRO } from "../../../Redux/AuthReducer/action";
const InitialState={
    id:Math.floor(Math.random(0*1000)),
    title:"",
    category:"",
    image:"",
    brand:"",
  }
const Addpro = ({isDarkMode}) => {
    const [state,setState]= useState(InitialState)
    const dispatch = useDispatch()
    
  
  
  const handleChange=(e)=>{
    const {name,value}=e.target;
  
    setState({
      ...state,
      [name]:value
    })
  }
  
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(state.title==="" || state.category===""|| state.image==="" || state.brand===""){
      alert("Please Enter all field")
    }else{
      let payload={
        id:state.id,
        title:state.title,
        image:state.image,
        category:state.category,
        brand:state.brand
      }
      dispatch(addPRO(payload))
      setState(InitialState)
    }
}
  return (
    <div  style={isDarkMode===true?{backgroundColor:"#001124",color:"white"}:{backgroundColor:"#0279f7",color:"black"}}>
    <form onSubmit={handleSubmit} className={`shadow-lg  duration-300  rounded-lg  w-96 flex-col justify-center m-auto border p-10 z-0 border-white  ${isDarkMode===true?"shadow-blue-400":"shadow-blue-900"} hover:scale-105` }>
        <h1 className='text-center text-4xl pb-5'>ADD PRODUCT</h1>
      <div className="relative z-0 w-full mb-6 group">
          <input  value={state.category} onChange={handleChange} type="text" name="category" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input value={state.brand} onChange={handleChange} type="text" name="brand" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Brand</label>
      </div>
        <div className="relative z-0 w-full mb-6 group">
            <input value={state.title} onChange={handleChange} type="text" name="title" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
        </div>
      
        <div className="relative z-0 w-full mb-6 group">
            <input value={state.image} onChange={handleChange} type="text" name="iamge" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product-Image-Link</label>
        </div>
      <button   type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
    </div>
  )
}

export default Addpro