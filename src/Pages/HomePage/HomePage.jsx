import { FaRegClock, FaTasks, FaUsers } from "react-icons/fa";
import { Link } from "react-router";
import UseAuth from "../../Hooks/ContextHook/AuthContextHook/UseAuth";
import Dashboard from "../Dashboard/Dashboard";

const Homepage = () => {
  const {user}= UseAuth()
  return (
  <>
  {user ? <> <Dashboard></Dashboard></>:<>
  
    <div className="bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20 border-b-4 border-gray-300">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-semibold mb-4">Boost Your Productivity with Taskflow</h2>
          <p className="text-lg mb-8">Manage tasks, track progress, and collaborate with your team—all in one place.</p>
          <Link to="/register" className="bg-white text-primary px-6 py-3 rounded-lg text-lg hover:bg-gray-100 transition">Get Started</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden border-b-4 border-gray-300">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl font-semibold mb-6 tracking-wide animate__animated animate__fadeIn">Features</h2>
          <p className="text-lg mb-12 opacity-80 animate__animated animate__fadeIn animate__delay-1s">
            Discover the amazing features that make Taskflow the best choice for managing your tasks and team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Task Management */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 border border-gray-300">
              <div className="w-20  h-20 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <FaTasks className="text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Task Management</h3>
              <p className="text-gray-700 mb-4">Create, assign, and prioritize tasks effortlessly to keep your team organized.</p>
              <p className="text-gray-700 opacity-80">Streamline workflows with an easy-to-use task management system.</p>
            </div>

            {/* Time Tracking */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 border border-gray-300">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <FaRegClock className="text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Time Tracking</h3>
              <p className="text-gray-700 mb-4">Track time spent on tasks and boost team productivity with ease.</p>
              <p className="text-gray-700 opacity-80">Get detailed reports and analytics on task completion and time usage.</p>
            </div>

            {/* Team Collaboration */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 border border-gray-300">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <FaUsers className="text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Team Collaboration</h3>
              <p className="text-gray-700 mb-4">Collaborate with teammates in real-time and manage workflows together.</p>
              <p className="text-gray-700 opacity-80">Stay connected and ensure smooth communication within your team.</p>
            </div>

          </div>
        </div>

        {/* Background Circles */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full opacity-10 animate__animated animate__zoomIn animate__delay-2s"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full opacity-10 animate__animated animate__zoomIn animate__delay-3s"></div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden border-b-4 border-gray-300">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl font-semibold mb-6 tracking-wide animate__animated animate__fadeIn">
            How It Works
          </h2>
          <p className="text-lg mb-12 opacity-80 animate__animated animate__fadeIn animate__delay-1s">
            Taskflow is designed to help you manage tasks efficiently and improve productivity. Here’s how it works:
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 border border-gray-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary">1. Create Tasks</h3>
              <p className="text-gray-700 mb-4">Start by adding your tasks, deadlines, and priorities to keep everything organized.</p>
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <FaTasks className="text-2xl" />
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 border border-gray-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary">2. Track Time</h3>
              <p className="text-gray-700 mb-4">Use the built-in time tracker to log the hours spent on each task.</p>
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <FaRegClock className="text-2xl" />
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 border border-gray-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary">3. Collaborate</h3>
              <p className="text-gray-700 mb-4">Invite your team members to collaborate and work together in real-time.</p>
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <FaUsers className="text-2xl" />
              </div>
            </div>

          </div>
        </div>

        {/* Background Circles */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full opacity-20 animate__animated animate__zoomIn animate__delay-2s"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full opacity-20 animate__animated animate__zoomIn animate__delay-3s"></div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20 relative overflow-hidden border-b-4 border-gray-300">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl font-semibold mb-6 tracking-wide animate__animated animate__fadeIn">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 opacity-80 animate__animated animate__fadeIn animate__delay-1s">
            Join Taskflow today and take control of your tasks and team productivity!
          </p>
          <Link
            to="/register"
            className="bg-white text-primary px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Start Your Free Trial
          </Link>
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full opacity-10 animate__animated animate__zoomIn animate__delay-2s"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full opacity-10 animate__animated animate__zoomIn animate__delay-3s"></div>
      </section>

    </div>
  
  </>}
  </>
  );
};

export default Homepage;
