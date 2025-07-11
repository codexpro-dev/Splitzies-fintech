import { IoMdNotificationsOutline } from "react-icons/io";
import { PiSunDimFill } from "react-icons/pi";
import { IoWallet } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { HiTicket } from "react-icons/hi2";
import { BiSolidChart } from "react-icons/bi";
import { RiHome5Fill } from "react-icons/ri";
import { RiPagesFill } from "react-icons/ri";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { BsFillMoonStarsFill } from "react-icons/bs";
import logo from "../assets/video-editing1.png";
import { Link } from "react-router-dom";
import "./dashboard.css";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [view, setView] = useState(false);
  const [time, setTime] = useState(new Date());
  const [selected, setSelected] = useState("dashboard");



  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours();
  const isMorning = hour >= 5 && hour < 12;
  const isAfternoon = hour >= 12 && hour < 18;
  const isEvening = hour >= 18 || hour < 5;

  const getGreeting = () => {
    if (isMorning) return "Good morning";
    if (isAfternoon) return "Good afternoon";
    return "Good evening";
  };

  const icon = isEvening ? (
    <BsFillMoonStarsFill className="text-[1.3rem] p-2 text-blue-400 w-[43px] h-[43px] border-[1.8px] border-[#e0dddd76] rounded-full font-extrabold " />
  ) : (
    <PiSunDimFill className="text-[1.3rem] p-2 text-orange-400 w-[43px] h-[43px] border-[1.8px] border-[#e0dddd76] rounded-full font-extrabold " />
  );
  const timeStr = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dateStr = time.toLocaleDateString([], {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="ally">
      <div className="w-full dashNa">
        <div className="dashNav">
          <div className="logog">
            <img src={logo} />
          </div>
          <div className="pro flex">
            <IoMdNotificationsOutline className="text-[1.6rem] text-[#000000c7] font-bold cursor-pointer hover:text-[#5e27f4]" />
            <Link to="/account">
            <div className="subN">
              <p className="font-semibold">GD</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="dashboard">
        <div className="hero">
          <div className="divv">
            <div className="day-night">{icon}</div>
            <div className="hero-text">
              <h1>{getGreeting()}, Golden</h1>
              <p>
                {dateStr} <span className="mx-1">•</span> {timeStr}
              </p>
            </div>
          </div>
          <p>
            Manage and track your subscriptions efficiently. Here's your
            subscription activity summary.
          </p>
        </div>
        <div className="dashboard-bal mt-9">
          <div className="col">
            <div className="row-row flex w-full">
              <div className="row rowMd w-full mr-2">
                <div className="flex align-middle justify-between">
                  <div className="flex text-center align-middle justify-evenl">
                    <IoWallet className="text-[20px] mr-3 mt-[1px]" />
                    <p className="text-[14px] font-semibold">Wallet Balance</p>
                  </div>
                  <div
                    onClick={() => {
                      setView(!view);
                    }}
                  >
                    {!view ? (
                      <FiEye className="text-[20px] bg-[#ffffff3f] rounded-full p-[6px] h-7 w-7 cursor-pointer hover:bg-[#ffffff5b] transition-all text-white" />
                    ) : (
                      <FiEyeOff className="text-[20px] bg-[#ffffff5d] rounded-full p-[6px] h-7 w-7 cursor-pointer  transition-all" />
                    )}
                  </div>
                </div>
                <div className="mb-3 mt-2 text-base">
                  {!view ? <h1>₦0</h1> : <h1>****</h1>}
                </div>
                <div className="hero-btn flex w-full justify-between">
                  <button className="bg-white text-blue-800 pt-[5px] pb-[5px] pl-[8px] pr-[8px] w-full rounded-full mr-3 font-bold text-[14px] transition-all hover:bg-blue-50">
                    <MdAdd className="text-[18px] mr-2" />
                    Add Money
                  </button>
                  <button className="bg-[#ffffff09] border-[#ffffff39] border-[1px] text-[#ffffffa0] font-bold pt-[6px] pb-[6px] pl-[8px] pr-[8px] w-full rounded-full cursor-not-allowed text-[14px]">
                    <FaArrowUp className="mr-2" />
                    Withdraw
                  </button>
                </div>
              </div>
              <div className="row roww w-full ml-2">
                <div className="ticket">
                  <HiTicket className="text-[22px] text-[#5d76f3] mr-3" />
                  <p className="text-[14px] font-semibold text-[#1c1c1c] ">
                    Subscriptions
                  </p>
                </div>
                <div>
                  <h1 className="text-[#1f1f1f]">0</h1>
                </div>
                <div className="hero-btn">
                    <Link to='/subscription'>
                  <button className="bg-[#ffffff23] border-[#c9c5c554] border-[1px] text-[#1e1e1e] font-semibold pt-[8px] pb-[8px] pl-[8px] pr-[8px] w-full rounded-full text-[14px] transition-all hover:bg-blue-50">
                    View Subscriptions  
                  </button>
                   </Link>
                </div>
              </div>
            </div>
            <div className="row roww history">
              <div className="flex fox align-middle justify-between">
                <div className="sly">
                  <div className="trend">
                    <BiSolidChart className="text-[22px] text-blue-500" />
                    <div className="ml-3">
                      <h3>Latest Transactions</h3>
                      <p className="">Your recent financial activity</p>
                    </div>
                  </div>
                </div>
                <div className="btn-btn">
                  <Link to="/transactions">
                  <button className="viewAll rounded-3xl hover:bg-blue-500">
                    View All
                  </button>
                  </Link>
                </div>
              </div>
              <div className="hero-btn">
                <p className="h-txt text-center text-[#00000085]">
                  No transaction yet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mediaN">
        <div className="links-txt align-middle justify-center w-full">
          <Link to="/">
            <p
              onClick={() => setSelected("dashboard")}
              className={`flex-col items-center cursor-pointer rounded ${
                selected === "dashboard" ? "text-blue-500" : `text-[#434141d4]`
              }`}
            >
              <RiHome5Fill
                className={`hover:text-purple-900 text-[25px] ${
                  selected === "dashboard"
                    ? "text-[#372bba]"
                    : "text-[#7e66f7d4]"
                }`}
              />
              Home
            </p>
          </Link>

          <Link to="/subscription">
            <p
              onClick={() => setSelected("subscriptions")}
              className={`flex-col items-center cursor-pointer rounded ${
                selected === "subscriptions"
                  ? "text-blue-500"
                  : `text-[#434141d4]`
              }`}
            >
              <RiPagesFill
                className={`hover:text-purple-900 text-[25px] ${
                  selected === "subscriptions"
                    ? "text-[#372bba]"
                    : "text-[#7e66f7d4]"
                }`}
              />
              Subscriptions
            </p>
          </Link>

          <Link to="/transactions">
            <p
              onClick={() => setSelected("transactions")}
              className={`flex-col items-center cursor-pointer rounded ${
                selected === "transactions"
                  ? "text-blue-500"
                  : `text-[#434141d4]`
              }`}
            >
              <RiNotificationBadgeFill
                className={` text-[25px] ${
                  selected === "transactions"
                    ? "text-[#372bba]"
                    : `text-[#7e66f7d4]`
                }`}
              />
              History
            </p>
          </Link>

          <Link to='/account'>  
          <p
            onClick={() => setSelected("account")}
            className={`flex-col items-center justify-center cursor-pointer p-2 rounded ${
              selected === "account" ? "text-blue-500" : `text-[#434141d4]`
            }`}
          >
            <div
              onClick={() => setSelected("account")}
              className={`subNN p-0 ${
                selected === "account" ? "bg-blue-900" : `bg-[#7063fa]`
              }`}
            >
              GD
            </div>
            Me
          </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
