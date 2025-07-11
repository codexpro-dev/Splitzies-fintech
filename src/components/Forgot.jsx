import React from "react";
import logo from "../assets/video-editing1.png";
import "./login.css";
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <div className="login-cont">
      <div className="logoo ">
        <img className="w-[6rem] mb-3 mt-3" src={logo} alt="" />
      </div>
      <div className="login" style={{height: '23rem'}}>
        <h1 className="text-[2rem] whitespace-nowrap text-center font-bold mb-2">
          Forgot Your Password?
        </h1>
        <p className="text-center text-[#000000af] text-[18px] mb-4">We'll send you an email with instructions to reset your password.</p>
        <div className="email w-full">
          <div className="input flex">
            <input type="password" placeholder="Enter password" required />
          </div>
        </div>
        <button className="bg-blue-600 block w-full text-white mt-6 p-3 rounded-full">
          Reset Password
        </button>
        <Link to="/">
          <button className="block w-full hover:bg-[#ebebfc] text-black mt-4 opacity-[0.8] hover:opacity-[1] transition-all p-3 rounded-full">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Forgot;
