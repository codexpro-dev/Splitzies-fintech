import { IoMdNotificationsOutline } from "react-icons/io";
import { RiHome5Fill } from "react-icons/ri";
import { RiPagesFill } from "react-icons/ri";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useState, useEffect } from "react";
import logo from "../assets/video-editing.png";
import { Link, useLocation } from "react-router-dom";
import "./subscription.css";
import Amaz from "../assets/amaz.png";
import Adgad from "../assets/adgard.png";
import Apple from "../assets/download.jpg";
import { MdAdd } from "react-icons/md";

const Subscription = () => {
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
      <div className="subscriptions">
        <h1 className="text-[1.9rem] font-bold mb-7">Subscriptions</h1>
        <div className="sub-text flex w-full justify-between mb-5">
          <div className="subbtn font-normal">
            <h1 className="text-[1.2rem] font-semibold mb-0">
              Active Subscriptions
            </h1>
            <p className="text-[14px] pr-2">
              Services you're currently subscribed to and manage
            </p>
          </div>
          <div>
            <button className="p-0 border-[#87858541] border-[1px] ml-2 button flex">
              <MdAdd className="text-[18px] mr-2" />
              Add Subscription
            </button>
          </div>
        </div>
        <div className="sub-row">
          <div className="SBST">
            <div className="flex flex-col">
              <p className="text-center text-[#00000085] mb-4">
                No Active Subscriptions yet
              </p>
              <button className="border-[#87858541] border-[1px] button bg-blue-600 hover:bg-blue-500 text-white ">
                <MdAdd className="text-[18px] mr-4" />
                Share a Subscription
              </button>
            </div>
          </div>
        </div>
        <div className="avalable-sub">
          <div className="avl-sub mb-4">
            <h1 className="text-[1.2rem] font-semibold mb-0">
              Active Subscriptions
            </h1>
            <p className="text-[14px]">Browse all services available to join</p>
          </div>
          <div className="avl-col flex-col">
            <div className="avl-row flex justify-between align-middle">
              <div className="flex w-full">
                <div className="row-img">
                  <img src={Apple} alt="" />
                </div>
                <div className="avl-row-txt">
                  <h2>Apple</h2>
                  <p>664 Subscriptions</p>
                </div>
              </div>
              <MdOutlineArrowForwardIos className="text-center" />
            </div>
            <div className="avl-row flex justify-between align-middle">
              <div className="flex w-full">
                <div className="row-img">
                  <img src={Amaz} alt="" />
                </div>
                <div className="avl-row-txt">
                  <h2>Amazon</h2>
                  <p>194 Subscriptions</p>
                </div>
              </div>
              <MdOutlineArrowForwardIos className="text-center" />
            </div>
            <div className="avl-row flex justify-between align-middle">
              <div className="flex w-full">
                <div className="row-img">
                  <img src={Adgad} alt="" />
                </div>
                <div className="avl-row-txt">
                  <h2>Adguard</h2>
                  <p>164 Subscriptions</p>
                </div>
              </div>
              <MdOutlineArrowForwardIos className="text-center" />
            </div>

            <div className="avl-row flex justify-between align-middle">
              <div className="flex w-full">
                <div className="row-img">
                  <img src={Adgad} alt="" />
                </div>
                <div className="avl-row-txt">
                  <h2>Adguard</h2>
                  <p>104 Subscriptions</p>
                </div>
              </div>
              <MdOutlineArrowForwardIos className="text-center" />
            </div>
            <div className="avl-row flex justify-between align-middle">
              <div className="flex w-full">
                <div className="row-img">
                  <img src={Apple} alt="" />
                </div>
                <div className="avl-row-txt">
                  <h2>Apple Music</h2>
                  <p>164 Subscriptions</p>
                </div>
              </div>
              <MdOutlineArrowForwardIos className="text-center" />
            </div>
            <div className="avl-row flex justify-between align-middle">
              <div className="flex w-full">
                <div className="row-img">
                  <img src={Amaz} alt="" />
                </div>
                <div className="avl-row-txt">
                  <h2>Amazon</h2>
                  <p>223 Subscriptions</p>
                </div>
              </div>
              <MdOutlineArrowForwardIos className="text-center" />
            </div>

            <div className="avl-row flex justify-between align-middle">
              <div className="flex w-full">
                <div className="row-img">
                  <img src={Apple} alt="" />
                </div>
                <div className="avl-row-txt">
                  <h2>Apple</h2>
                  <p>1640 Subscriptions</p>
                </div>
              </div>
              <MdOutlineArrowForwardIos className="text-center" />
            </div>
            <div className="avl-row flex justify-between align-middle">
              <div className="flex w-full">
                <div className="row-img">
                  <img src={Amaz} alt="" />
                </div>
                <div className="avl-row-txt">
                  <h2>Amazon</h2>
                  <p>164 Subscriptions</p>
                </div>
              </div>
              <MdOutlineArrowForwardIos className="text-center" />
            </div>
            <div className="avl-row flex justify-between align-middle">
              <div className="flex w-full">
                <div className="row-img">
                  <img src={Adgad} alt="" />
                </div>
                <div className="avl-row-txt">
                  <h2>Adguard</h2>
                  <p>1164 Subscriptions</p>
                </div>
              </div>
              <MdOutlineArrowForwardIos className="text-center" />
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
              onClick={() => setSelected("subscription")}
              className={`flex-col items-center cursor-pointer rounded ${
                selected === "subscription"
                  ? "text-blue-500"
                  : `text-[#434141d4]`
              }`}
            >
              <RiPagesFill
                className={`hover:text-purple-900 text-[25px] ${
                  selected === "subscription"
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

export default Subscription;
