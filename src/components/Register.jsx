import React from 'react'
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import "./login.css";
import { useState } from "react";
import logo from "../assets/video-editing1.png";
import logow from "../assets/flag.png";
import { IoIosArrowDown } from "react-icons/io";


const Register = () => {
  const [view, setView] = useState(false);

  return (
    <div className="login-cont">
      <div className="logoo">
        <img className="w-[6rem] mb-3 mt-3" src={logo} alt="" />
      </div>
      <div className="login" style={{height: '45rem'}}>
        <h1 className="text-[2.1rem] text-center font-bold mb-2 ">
          Create Account
        </h1>
        <p className="text-center text-[#000000af] text-[18px] mb-5">Let's get started with setting up your account.</p>
        <div className="email w-full mb-3">
          <p className="text-[13px] font-600 mb-2">First Name</p>
          <div className="input">
            <input type="text" placeholder="First Name" required />
          </div>
        </div>
        <div className="email w-full mb-3">
          <p className="text-[13px] font-600 mb-2">Last Name</p>
          <div className="input">
            <input type="text" placeholder="Last Name" required />
          </div>
        </div>
        <div className="email w-full mb-3">
          <p className="text-[13px] font-600 mb-2">Email</p>
          <div className="input">
            <input type="email" placeholder="Enter your email" required />
          </div>
        </div>
        <div className="email w-full mb-3">
          <p className="text-[13px] font-600 mb-2">Phone Number</p>
          <div className="input">
            <div className='ml-2 flex align-middle cursor-pointer'>
                <img src={logow} className='h-6 w-6 mr-1 rounded-full opacity-60' alt="" />
                <div><IoIosArrowDown className='visible flex mt-1 mr-2 text-[#535252bd]' /></div>
                <span className='text-[#2a2929] mr-3'>+234</span>
            </div>
            <input type="text" />
          </div>
          <span className='text-[#535252bd] text-[13px]'>Include country code {'(e.g. +234)'}</span>
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
            Create Account
          </button>
        </Link>
        <p className="text-center cursor-pointer mt-6">
          Already have an account?<Link to='/'> <span className="text-blue-500">Login</span></Link>
        </p>
      </div>
      <div className="terms mb-4">
        <h6 className='text-[12px] text-[#616161]'>By clicking continue, you agree to our <br /> <span className='hover:text-blue-500 underline cursor-pointer'>Terms of Service</span> and <span className='hover:text-blue-500 underline cursor-pointer'>Privacy Policy</span>.</h6>
      </div>
    </div>
  )
}

export default Register
