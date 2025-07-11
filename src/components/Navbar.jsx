import logo from "../assets/video-editing1.png";
import { RiHome5Fill } from "react-icons/ri";
import { RiPagesFill } from "react-icons/ri";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { PiWarningCircleLight } from "react-icons/pi";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [selected, setSelected] = useState("");
  const location = useLocation()



  useEffect(() => {
      const path = location.pathname.split("/")[1]; 
      // e.g., "/subscriptions" → "subscriptions"
      setSelected(path || "dashboard"); // fallback to "dashboard" if path is empty
    }, [location.pathname]);

  return (
    <div className="navB">
      <div className="navbar">
        <div className="nav">
          <div className="nav-links">
            <div className="logo">
              <img src={logo} />
            </div>
            <div className="links-txt">
              <Link to="/dashboard">
                <p
                  onClick={() => setSelected("dashboard")}
                  className={`flex items-center text-[#00000085] cursor-pointer p-2 rounded ${
                    selected === "dashboard"
                      ? "bg-[rgba(99,128,255,0.185)] text-blue-500"
                      : ""
                  }`}
                >
                  <RiHome5Fill
                    className={` text-[25px] mr-3 ${
                      selected === "dashboard"
                        ? "text-[#6e6ee3]"
                        : "text-[#84a3eb]"
                    }`}
                  />
                  Dashboard
                  {selected === "dashboard" && (
                    <MdOutlineArrowForwardIos className="ml-auto text-[rgba(248, 226, 248, 0.769)]" />
                  )}
                </p>
              </Link>

              <Link to="/subscription">
              <p
                onClick={() => setSelected("subscription")}
                className={`flex items-center cursor-pointer p-2 rounded ${
                  selected === "subscription"
                    ? "bg-[rgba(99,128,255,0.185)] text-blue-500"
                    : "text-[#00000085]"
                }`}
              >
                <RiPagesFill
                  className={` text-[25px] mr-3 ${
                    selected === "subscription"
                      ? "text-[#6e6ee3]"
                      : "text-[#84a3eb]"
                  }`}
                />
                Subscriptions
                {selected === "subscription" && (
                  <MdOutlineArrowForwardIos className="ml-auto  text-blue-500" />
                )}
              </p>
              </Link>

              <Link to="/transactions">
              <p
                onClick={() => setSelected("transactions")}
                className={`flex items-center cursor-pointer p-2 rounded ${
                  selected === "transactions"
                    ? "bg-[rgba(99,128,255,0.185)] text-blue-500"
                    : "text-[#00000085]"
                }`}
              >
                <RiNotificationBadgeFill
                  className={` text-[25px] mr-3 ${
                    selected === "transactions"
                      ? "text-[#6e6ee3]"
                      : "text-[#84a3eb]"
                  }`}
                />
                Transactions
                {selected === "transactions" && (
                  <MdOutlineArrowForwardIos className="ml-auto text-blue-500" />
                )}
              </p>
              </Link>

              <Link to='/account'>
              <p
                onClick={() => setSelected("account")}
                className={`flex items-center cursor-pointer p-2 rounded ${
                  selected === "account"
                    ? "bg-[rgba(99,128,255,0.185)] text-blue-500"
                    : "text-[#00000085]"
                }`}
              >
                <IoPerson
                  className={` text-[25px] mr-3 ${
                    selected === "account" ? "text-[#6e6ee3]" : "text-[#84a3eb]"
                  }`}
                />
                Account
                {selected === "account" && (
                  <MdOutlineArrowForwardIos className="ml-auto text-blue-500" />
                )}
              </p>
              </Link>
            </div>
            <div className="div">
              <div className="app">
                <div className="flex justify-between mb-1  align-middle">
                  <div className="install">
                    <FiDownload className="text-lg text-blue-500" />
                    <p className="pl-3 font-semibold text-[#000000]">
                      Install App
                    </p>
                  </div>
                  <p className="bg-[#ffffffd8] h-5 pb-[-3px] mt-1 w-12 rounded-full text-blue-500 text-center text-[12px] font-bold ">
                    New
                  </p>
                </div>
                <p className="text-[#00000085]">
                  Install Splitzies for faster access and offline features.
                </p>
                <button className="bg-blue-600 text-center pt-2 pb-2 mt-[12px]  text-white font-semibold flex w-full rounded-full">
                  <p className="pr-3 text-[14px]">Install Now</p>
                  <FiDownload className="text-lg" />
                </button>
              </div>
            </div>
            <div className="line"></div>
            <div className="div dev">
              <div className="app apk">
                <div className="install one">
                  <PiWarningCircleLight className="text-lg text-blue-500" />
                  <p className="pl-3 font-semibold text-black">Need Help?</p>
                </div>
                <p className="text-[#00000085]">
                  Have questions about your subscription?
                </p>
                <button className=" bg-[#6380ff2f] text-center pt-2 pb-2 mt-[12px]  text-white font-semibold flex w-full rounded-full">
                  <p className="pr-3 text-[14px] text-blue-600">
                    Contact Support
                  </p>
                  <MdOutlineArrowForwardIos className="text-blue-600" />
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
