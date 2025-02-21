import { useForm } from "react-hook-form";
import signInImg from "../../assets/Auth/signin.png";
import UseAuth from "../../Hooks/ContextHook/AuthContextHook/UseAuth";
import { useNavigate } from "react-router";

export default function Register() {
  const { createUser, updateUserProfile, googleLogin } = UseAuth();
  const navigate = useNavigate("/");
  // Create User
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const userFullName = data?.userFirstName + data?.userLastName;
    createUser(data?.userEmail, data?.userPassword)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        updateUserProfile(
          userFullName,
          "https://i.ibb.co.com/3YV0gCsr/My.jpg"
        ).then((res) => {
          console.log(res);
          navigate("/");
        });
      })
      .catch((err) => console.log(err));
  };
  // Social Login
  // Login with Google
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-full flex items-center justify-center bg-gray-200 p-6">
      <div className="relative bg-primary bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-xl p-6 lg:p-10 w-full max-w-7xl flex flex-col lg:flex-row items-center">
        {/* Left Side - Image */}
        <div className=" md:flex flex-1 mb-12 justify-center">
          <img
            className="w-10/12 h-10/12  mx-auto object-cover rounded-full shadow-lg border-4 border-white"
            src={signInImg}
            alt="Sign In"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2">
          {/* Header Title & Description */}
          <h2 className="text-xl  lg:text-2xl xl:text-4xl font-bold text-white text-center mb-4">
            Welcome to TaskFlow – Your Productivity Hub
          </h2>
          <p className="text-white text-center text-sm mb-6 px-4">
            Create your TaskFlow account and take control of your tasks
            effortlessly. Stay organized, collaborate seamlessly, and boost your
            productivity with our intuitive task management system. Join us
            today and streamline your workflow like never before!
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white">First Name</label>
                <input
                  {...register("userFirstName")}
                  type="text"
                  className="input input-bordered w-full bg-[#1E1E1E] text-white placeholder-gray-400 focus:outline-none focus:border-none"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="text-sm text-white">Last Name</label>
                <input
                  {...register("userLastName")}
                  type="text"
                  className="input input-bordered w-full bg-[#1E1E1E] text-white placeholder-gray-400 focus:outline-none focus:border-none"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-white">Email</label>
              <input
                {...register("userEmail")}
                type="email"
                className="input input-bordered w-full bg-[#1E1E1E] text-white placeholder-gray-400 focus:outline-none focus:border-none"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="text-sm text-white">Password</label>
              <input
                {...register("userPassword")}
                type="password"
                className="input input-bordered w-full bg-[#1E1E1E] text-white placeholder-gray-400 focus:outline-none focus:border-none"
                placeholder="********"
              />
            </div>

            <div>
              <label className="text-sm text-white">Confirm Password</label>
              <input
                {...register("userConfirmPassword")}
                type="password"
                className="input input-bordered w-full bg-[#1E1E1E] text-white placeholder-gray-400 focus:outline-none focus:border-none"
                placeholder="********"
              />
            </div>

            <button className="btn w-full bg-[#FF6767] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:bg-[#e85a5a] hover:shadow-lg hover:scale-105">
              Register
            </button>
          </form>

          {/* Social Login */}
          <div className="flex justify-center gap-4 mt-4">
            <p
              onClick={handleGoogleLogin}
              className="btn px-4 py-2 rounded-lg bg-white bg-opacity-20 text-black transition-all duration-300 hover:bg-white hover:text-[#FF6767] hover:shadow-lg hover:scale-105"
            >
              Google
            </p>
            <button className="btn px-4 py-2 rounded-lg bg-white bg-opacity-20 text-black transition-all duration-300 hover:bg-white hover:text-[#FF6767] hover:shadow-lg hover:scale-105">
              Facebook
            </button>
            <button className="btn px-4 py-2 rounded-lg bg-white bg-opacity-20 text-black transition-all duration-300 hover:bg-white hover:text-[#FF6767] hover:shadow-lg hover:scale-105">
              GitHub
            </button>
          </div>

          {/* Already Have an Account? */}
          <div className="text-center mt-6">
            <p className="text-white">
              Already have an account?{" "}
              <a
                href="/login"
                className="underline text-blue-600 font-bold hover:text-blue-700"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
