import { FaRegClock, FaTasks, FaUsers } from "react-icons/fa";
import { Link } from "react-router"; // Corrected import
import UseAuth from "../../Hooks/ContextHook/AuthContextHook/UseAuth";
import Dashboard from "../Dashboard/Dashboard";

const Homepage = () => {
  const { user } = UseAuth();

  return (
    <>
      {user ? (
        <Dashboard />
      ) : (
        <div className="bg-gray-50 text-gray-900">
          {/* Hero Section */}
          <section
            className="bg-cover bg-center bg-no-repeat text-white py-24 border-b-2 border-gray-300"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/Fkr4wfT/recomandation.jpg')",
            }}
          >
            <div className="max-w-7xl mx-auto text-center px-6 bg-transparent bg-opacity-50 py-16 rounded-lg">
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Boost Your Productivity with{" "}
                <span className="text-primary">Taskflow</span>
              </h2>
              <p className="text-lg mb-10 font-semibold text-gray-800">
                Manage tasks, track progress, and collaborate with your team—all
                in one place.
              </p>
              <Link
                to="/register"
                className="bg-[var(--primary)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 hover:text-primary transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 text-primary relative overflow-hidden border-b-4 border-gray-300">
            <div className="max-w-7xl mx-auto text-center px-6">
              <h2 className="text-4xl font-semibold mb-6 tracking-wide animate__animated animate__fadeIn">
                Features
              </h2>
              <p className="text-lg mb-12 opacity-80 animate__animated animate__fadeIn animate__delay-1s">
                Discover the amazing features that make Taskflow the best choice
                for managing your tasks and team.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Feature Cards */}
                {[
                  {
                    icon: <FaTasks className="text-3xl" />,
                    title: "Task Management",
                    desc1:
                      "Create, assign, and prioritize tasks effortlessly to keep your team organized.",
                    desc2:
                      "Streamline workflows with an easy-to-use task management system.",
                  },
                  {
                    icon: <FaRegClock className="text-3xl" />,
                    title: "Time Tracking",
                    desc1:
                      "Track time spent on tasks and boost team productivity with ease.",
                    desc2:
                      "Get detailed reports and analytics on task completion and time usage.",
                  },
                  {
                    icon: <FaUsers className="text-3xl" />,
                    title: "Team Collaboration",
                    desc1:
                      "Collaborate with teammates in real-time and manage workflows together.",
                    desc2:
                      "Stay connected and ensure smooth communication within your team.",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 border border-gray-300"
                  >
                    <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{feature.desc1}</p>
                    <p className="text-gray-700 opacity-80">{feature.desc2}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-16 text-primary relative overflow-hidden border-b-4 border-gray-300">
            <div className="max-w-7xl mx-auto text-center px-6">
              <h2 className="text-4xl font-semibold mb-6 tracking-wide animate__animated animate__fadeIn">
                How It Works
              </h2>
              <p className="text-lg mb-12 opacity-80 animate__animated animate__fadeIn animate__delay-1s">
                Taskflow is designed to help you manage tasks efficiently and
                improve productivity. Here’s how it works:
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                {/* Steps */}
                {[
                  {
                    icon: <FaTasks className="text-2xl" />,
                    title: "Create Tasks",
                    desc: "Start by adding your tasks, deadlines, and priorities to keep everything organized.",
                  },
                  {
                    icon: <FaRegClock className="text-2xl" />,
                    title: "Track Time",
                    desc: "Use the built-in time tracker to log the hours spent on each task.",
                  },
                  {
                    icon: <FaUsers className="text-2xl" />,
                    title: "Collaborate",
                    desc: "Invite your team members to collaborate and work together in real-time.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 border border-gray-300"
                  >
                    <h3 className="text-2xl font-semibold mb-4 text-primary">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{step.desc}</p>
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                      {step.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="bg-gradient-to-r from-primary to-accent text-white py-20 relative overflow-hidden border-b-4 border-gray-300">
            <div className="max-w-7xl mx-auto text-center px-6">
              <h2 className="text-4xl font-semibold mb-6 tracking-wide animate__animated animate__fadeIn">
                Ready to Get Started?
              </h2>
              <p className="text-lg mb-8 opacity-80 animate__animated animate__fadeIn animate__delay-1s">
                Join Taskflow today and take control of your tasks and team
                productivity!
              </p>
              <Link
                to="/register"
                className="bg-white text-primary px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Start Your Free Trial
              </Link>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Homepage;
