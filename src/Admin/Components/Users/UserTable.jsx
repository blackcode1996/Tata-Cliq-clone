import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUSERSs } from "../../../Redux/AuthReducer/action";
import { Userrow } from "./Userrow";

const UserTable = () => {
  const dispatch = useDispatch();

  const users = useSelector((store) => store.AuthReducer.users);

  
  useEffect(() => {
      dispatch(getUSERSs);
    }, []);
    
  return (
    <>
        <div class="flex flex-col mt-8">
    <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table class="min-w-full">
                <thead>
                    <tr >
                        <th
                            class="px-10 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Name</th>
                        <th
                            class="px-6 pl-28 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Email</th>
                        <th
                            class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Edit</th>
                        <th
                            class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
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
                <div class="flex flex-col mt-8">
    <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table class="min-w-full">
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