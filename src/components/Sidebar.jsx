import { MdHome } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaTv } from "react-icons/fa6";
import { IoMdBriefcase } from "react-icons/io";
import { GrContact } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Sidebar = ({ hideName = false }) => {
  const linkClass =
    "h-14 text-md font-semibold flex gap-2 items-center px-3 rounded-lg transition-colors";

  const activeClass = "bg-blue-100 text-blue-600";

  const inactiveClass = "text-black hover:bg-blue-50 hover:text-blue-800";

  return (
    <div className="h-full flex flex-col">
      {/* Header section - Only show if hideName is false */}
      {!hideName && (
        <div className="h-24 flex justify-center items-center px-6 py-2">
          <div className="w-full max-w-md h-16 flex justify-center items-center relative group">
            <div className="absolute left-0 top-0 h-full w-1/2 flex justify-start items-center">
              <div className="relative w-full h-full">
                <div className="absolute left-0 top-0 h-8 w-1 bg-blue-600 origin-bottom-left transition-transform duration-300 group-hover:rotate-12"></div>
                <div className="absolute left-0 top-7 w-5 h-1 bg-blue-600 origin-left transition-transform duration-300 group-hover:rotate-12"></div>
              </div>
            </div>

            <div className="absolute right-0 top-2 h-full w-1/2 flex justify-end items-center">
              <div className="relative w-full h-full">
                <div className="absolute right-0 top-6 w-5 h-1 bg-blue-600 origin-right transition-transform duration-300 group-hover:rotate-12"></div>
                <div className="absolute right-0 top-6 h-8 w-1 bg-blue-600 origin-top-right transition-transform duration-300 group-hover:rotate-12"></div>
              </div>
            </div>

            <span className="text-blue-600 font-bold text-3xl z-10">
              Krishna
            </span>
          </div>
        </div>
      )}

      {/* Menu Items */}
      <div className="flex-1 flex flex-col gap-3 px-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <MdHome /> Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FaUserAlt /> About
        </NavLink>

        <NavLink
          to="/project"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FaTv /> Project
        </NavLink>

        <NavLink
          to="/freelance"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <IoMdBriefcase /> Freelance
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <GrContact /> Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
