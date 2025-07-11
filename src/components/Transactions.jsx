import { IoMdNotificationsOutline } from "react-icons/io";
import { RiHome5Fill } from "react-icons/ri";
import { RiPagesFill } from "react-icons/ri";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import logo from "../assets/video-editing1.png";
import "./transactions.css";
import { Link, useLocation } from "react-router-dom";

const Transactions = () => {
  const [selected, setSelected] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    // e.g., "/subscriptions" → "subscriptions"
    setSelected(path || "dashboard"); // fallback to "dashboard" if path is empty
  }, [location.pathname]);

  return (
    <div>
      <div className="dashNav">
        <div className="logog">
          <img src={logo} />
        </div>
        <div className="pro flex">
          <IoMdNotificationsOutline className="text-[1.6rem] text-[#000000c7] font-bold cursor-pointer hover:text-[#5e27f4]" />
          <div className="subN">
            <p className="font-semibold">GD</p>
          </div>
        </div>
      </div>

      <div className="transaction">
        <div className="txnn ">
          <h1>Transactions</h1>
        </div>
        <div className="txn-history">
          <div className="txn-text">
            <h2 className="font-semibold text-[1.1rem]">Transaction History</h2>
            <p>View all your transactions </p>
            <p className="text-center text-[1.1rem] font-semibold pt-10 text-[#00000073]">
              You don't have any transactions yet
            </p>
          </div>
        </div>
      </div>

      <div className="mediaN">
        <div className="links-txt align-middle justify-center w-full">
          <Link to="/dashboard">
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

          <Link to="/account">
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

export default Transactions;
