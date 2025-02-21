import { useEffect, useState } from "react";
import { FaTachometerAlt, FaTasks, FaClipboardCheck, FaListAlt, FaCog, FaQuestionCircle, FaBars, FaSignOutAlt } from "react-icons/fa";

import { Link, Outlet } from "react-router";
import UseAuth from "../../Hooks/ContextHook/AuthContextHook/UseAuth";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [collapse, setCollapse] = useState(false);
  const { user,logOutUser } = UseAuth();
  // const isDarkMode = true;
const handleLogOut=()=>{
  logOutUser()
  .then(()=>{
    toast.success("User Log Out Successfull")
  })

}
  // console.log(usersInfo.role);
  useEffect(() => {
    const updateCollapseState = () => {
      if (window.innerWidth <= 560) {
        setCollapse(true);
      } else {
        setCollapse(false);
      }
    };

    updateCollapseState();

    window.addEventListener("resize", updateCollapseState);

    return () => {
      window.removeEventListener("resize", updateCollapseState);
    };
  }, []);

  const handleCollapse = () => setCollapse(!collapse);

  const users = true;

  return (
<main className="bg-gray-100">
<div className="min-h-screen  container mx-auto gap-12 flex">
      {/* <Helmet>
        <title>Edubrige || Dashboard</title>
      </Helmet> */}
      {/* Left Section: Sidebar */}
      <div
        className={`bg-primary   text-white p-4 py-12 transition-all duration-300 shadow-lg ${
          collapse ? "w-20" : "w-64"
        } hidden md:block`}
      >
        <div
          className={`flex flex-col h-full ${collapse ? "items-center" : ""}`}
        >
       {/* Sidebar Header */}
<div className="h-36 flex items-center justify-center">
  <h2
    className="text-lg  flex-col sm:text-xl font-bold cursor-pointer flex items-center gap-4 transition-all duration-300"
    onClick={handleCollapse}
  >
    <img
      className="rounded-full w-12 h-12 sm:w-14 sm:h-14 object-cover border-2 border-gray-300 shadow-lg"
      src={user?.photoURL}
      alt="User Profile"
    />

    {!collapse && (
      <div className="flex flex-col items-center">
        <p className="font-semibold text-gray-800 dark:text-gray-200">
          {user?.displayName}
        </p>
        <p className="text-sm text-white ">
          {user?.email}
        </p>
      </div>
    )}
  </h2>
</div>


          {/* Navigation Menu */}
          <div className="flex-1">
            <nav className="w-full">
     {/* Navigation Menu */}
<ul className="space-y-4 flex flex-col flex-1">
  {users && (
    <>
      <li className="hover:bg-gray-700 rounded-lg p-2 transition">
        <Link to="/dashboard/my-profile" className="flex items-center gap-2">
          {collapse ? <FaTachometerAlt size={28} /> : <FaTachometerAlt />}
          {!collapse && <span>Dashboard</span>}
        </Link>
      </li>
      <li className="hover:bg-gray-700 rounded-lg p-2 transition">
        <Link to="/dashboard/my-application" className="flex items-center gap-2">
          {collapse ? <FaTasks size={28} /> : <FaTasks />}
          {!collapse && <span>Vital Task</span>}
        </Link>
      </li>
      <li className="hover:bg-gray-700 rounded-lg p-2 transition">
        <Link to="/dashboard/my-review" className="flex items-center gap-2">
          {collapse ? <FaClipboardCheck size={28} /> : <FaClipboardCheck />}
          {!collapse && <span>My Task</span>}
        </Link>
      </li>
    </>
  )}

  <li className="hover:bg-gray-700 rounded-lg p-2 transition">
    <Link to="/scholarships" className="flex items-center gap-2">
      {collapse ? <FaListAlt size={28} /> : <FaListAlt />}
      {!collapse && <span>Task Categories</span>}
    </Link>
  </li>
  <li className="hover:bg-gray-700 rounded-lg p-2 transition">
    <Link to="/" className="flex items-center gap-2">
      {collapse ? <FaCog size={28} /> : <FaCog />}
      {!collapse && <span>Settings</span>}
    </Link>
  </li>
  <li className="hover:bg-gray-700 rounded-lg p-2 transition">
    <Link to="/about" className="flex items-center gap-2">
      {collapse ? <FaQuestionCircle size={28} /> : <FaQuestionCircle />}
      {!collapse && <span>Help</span>}
    </Link>
  </li>

  {/* Logout Button */}
  <li className="mt-auto">
    <button
      onClick={handleLogOut}
      className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-700 text-white font-semibold p-2 rounded-lg transition"
    >
      <FaSignOutAlt size={collapse ? 28 : 20} />
      {!collapse && <span>Log Out</span>}
    </button>
  </li>
</ul>

            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Toggle */}
      <div
        className={`md:hidden sticky -top-20 left-0 bg-gray-900 text-white p-4 transition-all duration-300 shadow-l ${
          collapse ? "w-20" : "w-44"
        }`}
      >
        <span
          onClick={handleCollapse}
          className={`flex py-4 text-xl font-bold mb-6 cursor-pointer items-center gap-2 ${
            !collapse ? "" : "justify-center items-center"
          }`}
        >
          {collapse ? (
            <FaBars size={20} />
          ) : (
            <>
              <FaBars size={20} /> EduBridge
            </>
          )}
        </span>
        <nav className="w-full">
  {/* Navigation Menu */}
<ul className="space-y-4 flex flex-col flex-1">
  {users && (
    <>
      <li className="hover:bg-gray-700 rounded-lg p-2 transition">
        <Link to="/dashboard/my-profile" className="flex items-center gap-2">
          {collapse ? <FaTachometerAlt size={28} /> : <FaTachometerAlt />}
          {!collapse && <span>Dashboard</span>}
        </Link>
      </li>
      <li className="hover:bg-gray-700 rounded-lg p-2 transition">
        <Link to="/dashboard/my-application" className="flex items-center gap-2">
          {collapse ? <FaTasks size={28} /> : <FaTasks />}
          {!collapse && <span>Vital Task</span>}
        </Link>
      </li>
      <li className="hover:bg-gray-700 rounded-lg p-2 transition">
        <Link to="/dashboard/my-review" className="flex items-center gap-2">
          {collapse ? <FaClipboardCheck size={28} /> : <FaClipboardCheck />}
          {!collapse && <span>My Task</span>}
        </Link>
      </li>
    </>
  )}

  <li className="hover:bg-gray-700 rounded-lg p-2 transition">
    <Link to="/scholarships" className="flex items-center gap-2">
      {collapse ? <FaListAlt size={28} /> : <FaListAlt />}
      {!collapse && <span>Task Categories</span>}
    </Link>
  </li>
  <li className="hover:bg-gray-700 rounded-lg p-2 transition">
    <Link to="/" className="flex items-center gap-2">
      {collapse ? <FaCog size={28} /> : <FaCog />}
      {!collapse && <span>Settings</span>}
    </Link>
  </li>
  <li className="hover:bg-gray-700 rounded-lg p-2 transition">
    <Link to="/about" className="flex items-center gap-2">
      {collapse ? <FaQuestionCircle size={28} /> : <FaQuestionCircle />}
      {!collapse && <span>Help</span>}
    </Link>
  </li>

  {/* Logout Button */}
  <li className="mt-auto">
    <button
      onClick={handleLogOut}
      className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-700 text-white font-semibold p-2 rounded-lg transition"
    >
      <FaSignOutAlt size={collapse ? 28 : 20} />
      {!collapse && <span>Log Out</span>}
    </button>
  </li>
</ul>

        </nav>
      </div>

    {/* Right Section: Main Content */}
<div className="flex-1 h-[91.67vh] my-auto border  shadow rounded-2xl bg-white">
  <Outlet />
</div>

    </div>
</main>
  );
};

export default Dashboard;
