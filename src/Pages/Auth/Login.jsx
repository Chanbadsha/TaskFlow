/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import loginImg from "../../assets/Auth/login.png";
import UseAuth from "../../Hooks/ContextHook/AuthContextHook/UseAuth";
import toast from "react-hot-toast";
import { useLocation } from "react-router";

export default function Login() {
  const {handleEmailLogin}= UseAuth()
  const location = useLocation()
  console.log(location)
  // Login User
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    handleEmailLogin(data?.userEmail,data?.userPassword)
    .then(res=>{
      console.log(res)
      toast.success("User Login Suceessfull")
    })
    .catch(err=>{
      console.log(err)
    })
  };

  const handleGoogleLogin = () => {};

  return (
    <div className="min-h-full flex items-center justify-center bg-gray-200 p-4 sm:p-6">
      <div className="relative  bg-primary bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 w-full max-w-4xl lg:max-w-6xl flex flex-col lg:flex-row items-center">
        {/* Left Side - Image */}
        <div className="hidden md:flex flex-1 justify-center">
          <img
            className="w-4/5 h-auto max-w-xs sm:max-w-sm md:max-w-md object-cover rounded-full shadow-lg border-4 border-white"
            src={loginImg}
            alt="Login"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-8">
          {/* Header Title & Description */}
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-white text-center mb-3">
            Welcome Back to TaskFlow
          </h2>
          <p className="text-white text-center text-sm sm:text-base mb-6 px-2">
            Sign in to access your dashboard and stay on top of your tasks.
            Keep track of your projects, collaborate with your team, and boost productivity.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-sm text-white">Email</label>
              <input
                {...register("userEmail")}
                type="email"
                className="input input-bordered w-full bg-[#1E1E1E] text-white placeholder-gray-400 focus:outline-none focus:border-none rounded-lg p-3"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="text-sm text-white">Password</label>
              <input
                {...register("userPassword")}
                type="password"
                className="input input-bordered w-full bg-[#1E1E1E] text-white placeholder-gray-400 focus:outline-none focus:border-none rounded-lg p-3"
                placeholder="********"
              />
            </div>

            <button className="btn w-full bg-[#FF6767] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:bg-[#e85a5a] hover:shadow-lg hover:scale-105">
              Login
            </button>
          </form>

          {/* Social Login */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-4">
            <p
              onClick={handleGoogleLogin}
              className="btn px-4 py-2 rounded-lg bg-white bg-opacity-20 text-black transition-all duration-300 hover:bg-white hover:text-[#FF6767] hover:shadow-lg hover:scale-105 cursor-pointer"
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
              Don't have an account?{" "}
              <a
                href="/register"
                className="underline text-blue-600 font-bold hover:text-blue-700"
              >
                Register Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
