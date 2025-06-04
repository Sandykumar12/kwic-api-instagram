import { TbDashboard } from "react-icons/tb";
import { MdOutlineDashboardCustomize, MdOutlineHistoryToggleOff } from "react-icons/md";
import { BiLogoReact } from "react-icons/bi";
import { NavLink } from "@remix-run/react";

export default function Navbar() {
  const navItems = [
    {
      to: "/Dashboard",
      icon: TbDashboard,
      label: "Dashboard"
    },
    {
      to: "/post-reels",
      icon: MdOutlineDashboardCustomize,
      label: "Post & Reels"
    },
    {
      to: "/stories",
      icon: MdOutlineHistoryToggleOff,
      label: "Stories"
    },
    {
      to: "/automations",
      icon: BiLogoReact,
      label: "My Automations"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
    <div className="flex p-1 bg-gray-200 mt-5 mx- justify-center space-x-2 sm:space-x-2  max-w-[520px] rounded-[30px] ">
      {navItems.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex items-center gap-1 min-w-fit px-3 py-1 rounded-xl ${
              isActive
                ? "text-green-600 bg-white "
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
            }`
          }
        >
          <Icon className="text-sm" />
          <span className="text-xs font-medium ">
            {label}
          </span>
        </NavLink>
      ))}
    </div>
    </div>
  );
}