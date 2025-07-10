import { IoMdNotificationsOutline } from "react-icons/io";
import { RiHome5Fill } from "react-icons/ri";
import { RiPagesFill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { FiEdit3 } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState, useEffect } from "react";
import logo from "../assets/video-editing.png";
import { Link, useLocation } from "react-router-dom";
import "./account.css";

const Account = () => {
  const [selected, setSelected] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    // e.g., "/subscriptions" → "subscriptions"
    setSelected(path || "dashboard"); // fallback to "dashboard" if path is empty
  }, [location.pathname]);

  return (
    <div className="account">
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
      <div className="acct flex">
        <div className="acct-text">
          <h1 className="text-[1.6rem] font-bold">Account Settings</h1>
          <p>Manage your account settings and preferences.</p>
        </div>
        <button className="bg-red-500 text-white flex signout">
          <CiLogout className="font-bold  mr-2 text-[18px]" />
          Sign Out
        </button>
      </div>
      <div className="acct-cont">
        <div className="acct-details">
          <div className="details-row">
            <div className="pro-pic cursor-pointer">
              <h2>GD</h2>
            </div>
            <h2 className="text-[1.3rem] font-[500] pt-5">Victory Chimezie</h2>
            <p className="text-[#201f1fc4] text-[1rem] pt-1">
              chimezievictory578@gmail.com
            </p>
            <span className="text-[13px] text-[#201f1fdb] font-semibold">
              Member since july 2025
            </span>
          </div>
          <div className="details-txt pt-6">
            <p className="text-[#514e4ec1] text-[14px] pb-2">
              Update your profile to personalize your <br /> experience on
              Splitzies.
            </p>
            <p className="text-[#514e4ec1] text-[14px]">
              Your information is secure and will never be <br /> shared with
              third parties without your <br /> consent.
            </p>
          </div>
        </div>
        <div className="account-text">
          <div className="acct-row">
            <div className="pro-info flex justify-between">
              <h3 className="flex user">
                <LuUser className="text-blue-600 font-bold text-[24px] mr-2" />
                Profile Information
              </h3>
              <button className="text-[13px] flex edit">
                <FiEdit3 className="mr-3" />
                Edit
              </button>
            </div>
            <p>Update your personal information</p>
            <div className="det-col flex justify-between">
              <div className="det-row mr-5">
                <p>First Name</p>
                <input type="text" value={"Victory"} disabled />
              </div>
              <div className="det-row">
                <p>Last Name</p>
                <input type="text" value={"Chimezie"} disabled />
              </div>
            </div>
          </div>
          <div className="acct-row unique">
            <div className="pro-info">
              <RiLockPasswordFill className="text-blue-500 text-[20px] mr-2 mt-[-4px]" />
              <h3>Transaction PIN</h3>
            </div>
            <p>Set up a transaction PIN to secure your payments</p>
            <div className="uni">
              <p>
                Your transaction PIN is used to authorize payments and
                transfers. Setting one up enhances the security of your
                transactions.
              </p>
            </div>
            <button>Set PIN</button>
          </div>
          <div className="acct-row unique">
            <div className="pro-info">
              <RiLockPasswordFill className="text-blue-500 text-[20px] mr-2 mt-[-4px]" />
              <h3>Security</h3>
            </div>
            <p>Manage your password and account security</p>
            <div className="uni">
              <p>
                To update your password, please use our dedicated password reset
                flow. This ensures your account remains secure during the
                password change process.
              </p>
            </div>
            <button className="flex align-middle justify-between forward">
              Reset Password
              <IoIosArrowRoundForward className="text-[23px] ml-2" />
            </button>
          </div>
          <div className="acct-row unique uniqu">
            <div className="pro-info">
              <h3>Account Management</h3>
            </div>
            <p>Options for managing your account status</p>
            <div className="uniq">
              <p className="danger">Danger Zone</p>
              <p>
                Deactivating your account will remove your profile from
                Splitzies. This action is reversible for 30 days, after which
                all your data will be permanently deleted.
              </p>
            </div>
            <button>Deactivate Account</button>
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
            {" "}
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

export default Account;
