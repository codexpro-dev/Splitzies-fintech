import { IoMdNotificationsOutline } from "react-icons/io";
import { PiSunDimFill } from "react-icons/pi";
import { IoWallet } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { HiTicket } from "react-icons/hi2";
import { BiSolidChart } from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";

import "./dashboard.css";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [view, setView] = useState(false);
  const [time, setTime] = useState(new Date());

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
    <BsFillMoonStarsFill className="text-[1.3rem] p-2 text-white w-[43px] h-[43px] border-[1.8px] border-[#97949476] rounded-full font-extrabold " />
  ) : (
    <PiSunDimFill className="text-[1.3rem] p-2 text-orange-400 w-[43px] h-[43px] border-[1.8px] border-[#97949476] rounded-full font-extrabold " />
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
      <div className="w-full sticky">
        <div className="dashNav">
          <div className="pro flex">
            <IoMdNotificationsOutline className="text-[1.6rem] font-bold cursor-pointer hover:text-[#d827f4]" />
            <div>
              <p className="font-semibold">GD</p>
            </div>
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
            <div className="flex w-full">
              <div className="row w-full mr-2">
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
                  <button className="bg-white text-purple-800 pt-[5px] pb-[5px] pl-[8px] pr-[8px] w-full rounded-full mr-3 font-bold text-[14px]">
                    <MdAdd className="text-[18px] mr-2" />
                    Add Money
                  </button>
                  <button className="bg-[#ffffff23] border-[#ffffff79] border-[1px] text-[#ffffffa0] font-bold pt-[6px] pb-[6px] pl-[8px] pr-[8px] w-full rounded-full cursor-not-allowed text-[14px]">
                    <FaArrowUp className="mr-2" />
                    Withdraw
                  </button>
                </div>
              </div>
              <div className="row roww w-full ml-2">
                <div className="ticket">
                  <HiTicket className="text-[22px] text-[purple] mr-3" />
                  <p className="text-[14px] font-semibold text-[purple] ">
                    Subscriptions
                  </p>
                </div>
                <div>
                  <h1 className="text-[purple]">0</h1>
                </div>
                <div className="hero-btn">
                  <button className="bg-[#ffffff23] border-[#7e797954] border-[1px] text-[purple] font-semibold pt-[8px] pb-[8px] pl-[8px] pr-[8px] w-full rounded-full text-[14px]">
                    View Subscriptions
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="flex align-middle justify-between">
                <div>
                  <div className="trend">
                    <BiSolidChart className="text-[22px]" />
                    <div className="ml-3">
                      <h3>Latest Transactions</h3>
                      <p>Your recent financial activity</p>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="viewAll rounded-3xl">View All</button>
                </div>
              </div>
              <div className="hero-btn">
                <p className="text-center">No transaction yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
