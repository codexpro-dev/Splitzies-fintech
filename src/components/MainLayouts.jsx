import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayouts = () => {
  return (
    <div>
      <div className="w-full bg-white h-full flex align-top justify-start p-0 m-0">
        <div>
          <Navbar />
        </div>
        <div className="w-full">
         <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainLayouts
