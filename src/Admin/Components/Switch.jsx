import { useState } from "react";

function Switch({isDarkMOde,toggleDarkMode}) {
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-6";
  return (
    <>
      <div className=" ">

        <div
          className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
            toggleDarkMode(!isDarkMOde);
          }}
        >
          <div
            className={
              "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
              (toggle ? null : toggleClass)
            }
          ></div>
        </div>
      </div>
    </>
  );
}

export default Switch;
