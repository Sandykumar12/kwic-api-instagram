import { TbDashboard } from "react-icons/tb";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { BiLogoReact } from "react-icons/bi";
import { NavLink } from "@remix-run/react";

export default function Navbar() {
  return (
    <div className="flex p-1 bg-gray-200 mt-5 mx-5 justify-center space-x-2 sm:space-x-6 w-full max-w-[500px] rounded-[30px] overflow-x-auto">
      <NavLink
        to="/Dashboard"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center min-w-fit ${
            isActive
              ? "text-green-500 bg-white rounded-[10px] px-2"
              : "text-gray-600"
          }`
        }
      >
        {({ isActive }) => (
          <div className="flex items-center gap-1 sm:gap-2">
            <TbDashboard
              className={`text-[20px] sm:text-[25px] ${
                isActive
                  ? "text-green-500 bg-white rounded-[10px]"
                  : "text-gray-600"
              }`}
            />
            <span className="text-[10px] sm:text-xs whitespace-nowrap">
              Dashboard
            </span>
          </div>
        )}
      </NavLink>

      <NavLink
        to="/post-reels"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center min-w-fit ${
            isActive
              ? "text-green-500 bg-white rounded-[10px] px-2"
              : "text-gray-600"
          }`
        }
      >
        {({ isActive }) => (
          <div className="flex items-center gap-1 sm:gap-2">
            <MdOutlineDashboardCustomize
              className={`text-[20px] sm:text-[25px] ${
                isActive
                  ? "text-green-500 bg-white rounded-[10px]"
                  : "text-gray-600"
              }`}
            />
            <span className="text-[10px] sm:text-xs whitespace-nowrap">
              Post & Reels
            </span>
          </div>
        )}
      </NavLink>

      <NavLink
        to="/stories"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center min-w-fit ${
            isActive
              ? "text-green-500 bg-white rounded-[10px] px-2"
              : "text-gray-600"
          }`
        }
      >
        {({ isActive }) => (
          <div className="flex items-center gap-1 sm:gap-2">
            <MdOutlineHistoryToggleOff
              className={`text-[20px] sm:text-[25px] ${
                isActive
                  ? "text-green-500 bg-white rounded-[10px]"
                  : "text-gray-600"
              }`}
            />
            <span className="text-[10px] sm:text-xs whitespace-nowrap">
              Stories
            </span>
          </div>
        )}
      </NavLink>

      <NavLink
        to="/automations"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center min-w-fit ${
            isActive
              ? "text-green-500 bg-white w-auto rounded-[10px] px-2"
              : "text-gray-600"
          }`
        }
      >
        {({ isActive }) => (
          <div className="flex items-center gap-1 sm:gap-2">
            <BiLogoReact
              className={`text-[20px] sm:text-[25px] ${
                isActive
                  ? "text-green-500 bg-white w-auto rounded-[10px]"
                  : "text-gray-600"
              }`}
            />
            <span className="text-[10px] sm:text-xs whitespace-nowrap">
              My Automations
            </span>
          </div>
        )}
      </NavLink>
    </div>
  );
}
