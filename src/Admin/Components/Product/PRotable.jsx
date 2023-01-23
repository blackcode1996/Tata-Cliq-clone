import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getpro } from "../../../Redux/AuthReducer/action";
import { Prorow } from "./Prorow";

const PRotable = ({isDarkMode,}) => {
  const dispatch = useDispatch();

  const pro = useSelector((store) => store.AuthReducer.pro);
    console.log(pro)
  
  useEffect(() => {
      dispatch(getpro);
    }, [pro]);
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
                            Title</th>
                        <th
                            className="px-6 pl-28 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 ">
                            Category</th>
                        <th
                            className="px-6 pl-28 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 ">
                            Brand</th>
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
        {pro.length > 0 &&
          pro.map((el) => {
            return(
                <div  className="flex flex-col mt-8">
    <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full">
                        <tbody>
                        <Prorow key={el.id} id={el.id} title={el.title} image={el.image} category={el.category} brand={el.brand} />
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


export default PRotable;