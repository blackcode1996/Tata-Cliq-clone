import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUSERSs } from "../../../Redux/AuthReducer/action";
import { Userrow } from "./Userrow";

const UserTable = ({isDarkMode,}) => {
  const dispatch = useDispatch();

  const users = useSelector((store) => store.AuthReducer.users);
    console.log(users)
  
  useEffect(() => {
      dispatch(getUSERSs);
    }, [users]);
  return (
    <>
        <div className="flex flex-col mt-8">
    <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full">
                <thead style={isDarkMode===true?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}}>
                    <tr >
                        <th
                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 ">
                            Name</th>
                        <th
                            className="px-6 pl-28 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 ">
                            Email</th>
                        <th
                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 ">
                            Edit</th>
                        <th
                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 ">
                            Delete</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</div>
        {users.length > 0 &&
          users.map((el) => {
            return(
                <div  className="flex flex-col mt-8">
    <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full">
                        <tbody>
                        <Userrow key={el.id} id={el.id} name={el.name} profile={el.profile} email={el.email} password={el.password} />
                        </tbody>
                    </table>
                </div>
                </div>
                </div>
                );
          })}
    </>
  );
};


export default UserTable;