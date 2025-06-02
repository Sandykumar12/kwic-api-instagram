import { FiHome, FiPlusSquare, FiClock, FiZap } from "react-icons/fi";
import { NavLink } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-around p-4 bg-white border-b border-gray-200">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center ${
            isActive ? "text-green-500" : "text-gray-600"
          }`
        }
      >
        {({ isActive }) => (
          <div className="flex flex-col items-center gap-1">
            <FiHome
              className={`text-2xl ${
                isActive ? "text-green-500" : "text-gray-600"
              }`}
            />
            <span className="text-xs">Dashboard</span>
          </div>
        )}
      </NavLink>

      <NavLink
        to="/post-reels"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center ${
            isActive ? "text-green-500" : "text-gray-600"
          }`
        }
      >
        {({ isActive }) => (
          <div className="flex flex-col items-center gap-1">
            <FiPlusSquare
              className={`text-2xl ${
                isActive ? "text-green-500" : "text-gray-600"
              }`}
            />
            <span className="text-xs">Post & Reels</span>
          </div>
        )}
      </NavLink>

      <NavLink
        to="/stories"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center ${
            isActive ? "text-green-500" : "text-gray-600"
          }`
        }
      >
        {({ isActive }) => (
          <div className="flex flex-col items-center gap-1">
            <FiClock
              className={`text-2xl ${
                isActive ? "text-green-500" : "text-gray-600"
              }`}
            />
            <span className="text-xs">Stories</span>
          </div>
        )}
      </NavLink>

      <NavLink
        to="/automations"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center ${
            isActive ? "text-green-500" : "text-gray-600"
          }`
        }
      >
        {({ isActive }) => (
          <div className="flex flex-col items-center gap-1">
            <FiZap
              className={`text-2xl ${
                isActive ? "text-green-500" : "text-gray-600"
              }`}
            />
            <span className="text-xs">My Automations</span>
          </div>
        )}
      </NavLink>
    </nav>
  );
}
