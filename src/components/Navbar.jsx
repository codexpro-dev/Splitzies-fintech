import logo from "../assets/video-editing.png";
import { RiHome5Fill } from "react-icons/ri";
import { RiPagesFill } from "react-icons/ri";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { PiWarningCircleLight } from "react-icons/pi";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [selected, setSelected] = useState("dashboard");

  return (
    <div className="navB">
      <div className="navbar">
        <div className="nav">
          <div className="nav-links">
            <div className="logo">
              <img src={logo} />
            </div>
            <div className="links-txt">
              <p
                onClick={() => setSelected("dashboard")}
                className={`flex items-center cursor-pointer p-2 rounded ${
                  selected === "dashboard" ? "bg-[rgba(101,15,101,0.57)]" : ""
                }`}
              >
                <RiHome5Fill className={`hover:text-purple-900 text-[25px] mr-3 ${
                  selected === 'dashboard' ? 'text-[#cceec9fd]' : 'text-[#6e6ee3]'
                  }`} />
                Dashboard
                {selected === "dashboard" && (
                  <MdOutlineArrowForwardIos className="ml-auto text-[rgba(248, 226, 248, 0.769)]" />
                )}
              </p>

              <p
                onClick={() => setSelected("subscriptions")}
                className={`flex items-center cursor-pointer p-2 rounded ${
                  selected === "subscriptions"
                    ? "bg-[rgba(128,0,128,0.458)]"
                    : ""
                }`}
              >
                <RiPagesFill className={`hover:text-purple-900 text-[25px] mr-3 ${
                  selected === 'subscriptions' ? 'text-[#cceec9fd]' : 'text-[#6e6ee3]'
                  }`} />
                Subscriptions
                {selected === "subscriptions" && (
                  <MdOutlineArrowForwardIos className="ml-auto text-[rgba(248, 226, 248, 0.769)]" />
                )}
              </p>

              <p
                onClick={() => setSelected("transactions")}
                className={`flex items-center cursor-pointer p-2 rounded ${
                  selected === "transactions"
                    ? "bg-[rgba(128,0,128,0.458)]"
                    : ""
                }`}
              >
                <RiNotificationBadgeFill className={`hover:text-purple-900 text-[25px] mr-3 ${
                  selected === 'transactions' ? 'text-[#cceec9fd]' : 'text-[#6e6ee3]'
                  }`} />
                Transactions
                {selected === "transactions" && (
                  <MdOutlineArrowForwardIos className="ml-auto text-[rgba(248, 226, 248, 0.769)]" />
                )}
              </p>

              <p
                onClick={() => setSelected("account")}
                className={`flex items-center cursor-pointer p-2 rounded ${
                  selected === "account" ? "bg-[rgba(128,0,128,0.458)]" : ""
                }`}
              >
                <IoPerson className={`hover:text-purple-900 text-[25px] mr-3 ${
                  selected === 'account' ? 'text-[#cceec9fd]' : 'text-[#6e6ee3]'
                  }`} />
                Account
                {selected === "account" && (
                  <MdOutlineArrowForwardIos className="ml-auto text-[rgba(248, 226, 248, 0.769)]" />
                )}
              </p>
            </div>
            <div className="div">
              <div className="app">
                <div className="flex justify-between mb-1  align-middle">
                  <div className="install">
                    <FiDownload className="text-lg" />
                    <p className="pl-3 font-bold">Install App</p>
                  </div>
                  <p className="bg-[#ffffffd8] h-5 pb-[-3px] mt-1 w-12 rounded-full text-purple-950 text-center text-[12px] font-bold ">
                    New
                  </p>
                </div>
                <p className="text-[#ffffffd5]">
                  Install Splitzies for faster access and offline features.
                </p>
                <button className="bg-white text-center pt-2 pb-2 mt-[12px]  text-purple-950 font-semibold flex w-full rounded-full">
                  <p className="pr-3 text-[14px]">Install Now</p>
                  <FiDownload className="text-lg" />
                </button>
              </div>
            </div>
            <div className="line"></div>
            <div className="div dev">
              <div className="app apk">
               <div className="install one">
                 <PiWarningCircleLight className="text-lg" />
              <p className="pl-3 font-bold">
                Need Help?</p>
               </div>
              <p className="text-[#ffffffd5]">Have questions about your subscription?</p>
              <button className="bg-white text-center pt-2 pb-2 mt-[12px]  text-purple-950 font-semibold flex w-full rounded-full">
                <p className="pr-3 text-[14px]">Contact Support</p>
                <MdOutlineArrowForwardIos />
                </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
