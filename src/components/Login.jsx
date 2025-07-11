import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import "./login.css";
import { useState } from "react";
import logo from "../assets/video-editing1.png";

const Login = () => {
  const [view, setView] = useState(false);

  return (
    <div className="login-cont">
      <div className="logoo ">
        <img className="w-[6rem] mb-3 mt-3" src={logo} alt="" />
      </div>
      <div className="login">
        <h1 className="text-[2.1rem] text-center font-bold mb-5">
          Log in to your account
        </h1>
        <div className="email w-full mb-3">
          <p className="text-[13px] font-600 mb-2">Email</p>
          <div className="input">
            <input type="email" placeholder="Enter email address" required />
          </div>
          <Link to='/forgot'><p className="text-right pt-5 text-blue-600 cursor-pointer">
            Forgot password?
          </p></Link>
        </div>
        <div className="email w-full">
          <p className="text-[13px] font-600 mb-2">Password</p>
          <div className="input flex">
            <input type="password" placeholder="Enter password" required />
            <div
              onClick={() => {
                setView(!view);
              }}
            >
              {!view ? (
                <FiEye className="text-[45px] rounded-full p-[6px] h-7 w-7 cursor-pointer hover:bg-[#ffffff5b] transition-all text-[#979595] mr-2 font-bold" />
              ) : (
                <FiEyeOff className="text-[25px] text-[#979595] mr-2 font-bold rounded-full p-[6px] h-7 w-7 cursor-pointer  transition-all" />
              )}
            </div>
          </div>
        </div>
        <Link to="/dashboard">
          <button className="bg-blue-600 block w-full text-white mt-6 opacity-[0.8] hover:opacity-[1] transition-all p-3 rounded-full">
            Login
          </button>
        </Link>
        <p className="text-center cursor-pointer mt-6">
          Don't have an account?<Link to='/register'><span className="text-blue-500">Register</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
