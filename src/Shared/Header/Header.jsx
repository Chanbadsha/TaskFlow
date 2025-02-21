import { FaBell, FaCalendarAlt, FaSearch } from "react-icons/fa";
import "./Header.css";
import { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router";
import UseAuth from "../../Hooks/ContextHook/AuthContextHook/UseAuth";
export default function Header() {
  const [date, setDate] = useState(null);
  const [day, setDay] = useState(null);
  const {user}= UseAuth()
  useEffect(() => {
    setDay(moment().format("dddd"));
    setDate(moment().subtract(10, 'days').calendar());
  }, []);

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("Hi")
  }
  return (
    <nav className=" bg-base-100 shadow-sm">
      <div className="container navbar justify-between mx-auto">
        <div className="">
          <Link className="btn btn-outline outline-none border-none active:bg-transparent hover:bg-transparent hover:shadow-none text-xl lg:text-4xl">
            <span className="letter">T</span>
            <span className="letter">a</span>
            <span className="letter">s</span>
            <span className="letter">k</span>
            <span className="letter">F</span>
            <span className="letter">l</span>
            <span className="letter">o</span>
            <span className="letter">w</span>
          </Link>
        </div>
        <div className="flex items-center md:flex-1 gap-2">
          <div className="flex w-full items-center">
            <form onSubmit={handleSubmit} className="hidden md:block lg:w-[50%] md:w-[70%] w-full mx-auto">
              <div className="flex space-x-1">
                <input
                  type="text"
                  className=" md:flex-1 w-full   px-4 py-2 text-primary bg-white border rounded-full  border-[var(--primary)] focus:ring-[var(--primary)] focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search your task here..."
                />
                <button className="btn btn-ghost bg-primary btn-text btn-circle ">
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>
          <div className="dropdown hidden md:block dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost bg-primary btn-text btn-circle"
            >
              <FaBell />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
          <li>No nottificatin yet</li>
            </ul>
          </div>
          {user ? (
  <>
    <div className="btn hidden md:flex items-center justify-center bg-primary text-white hover:bg-primary-dark rounded-full p-3 transition duration-200 ease-in-out">
      <FaCalendarAlt className="text-xl" />
    </div>
    <div className="hidden md:flex flex-col text-center font-medium ml-4">
      <span className="text-lg text-black font-semibold">{day}</span>
      <span className="text-gray-700 text-sm">{date}</span>
    </div>
  </>
) : (
  <div className="">
    <Link
      to="/login"
      className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition duration-200 ease-in-out"
    >
      Login
    </Link>
  </div>
)}

        </div>
      </div>
    </nav>
  );
}
