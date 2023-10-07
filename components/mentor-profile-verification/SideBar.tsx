import { SideBarIcons } from "@/public/assets/icons";
import React, { useState, createContext, useContext, useEffect } from "react";

const SidebarContext = createContext<any>({ expanded: true });

export default function Sidebar({
  children,
  light = false, // Default to dark sidebar
}: {
  children: React.ReactNode;
  light?: boolean; // Prop for light sidebar
}) {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    // Function to update the `expanded` state based on screen width
    const updateExpandedState = () => {
      if (window.innerWidth <= 768) {
        // Adjust the width as needed
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    };

    // Call the function initially to set the initial state
    updateExpandedState();

    // Add a resize event listener to update the state when the window size changes
    window.addEventListener("resize", updateExpandedState);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateExpandedState);
    };
  }, []);

  return (
    <>
      <div className="flex">
        <aside className="h-full">
          <nav
            className={`h-full flex flex-col border-r shadow-sm ${
              light ? "bg-[#fff]" : " bg-[#000]"
            }`}
          >
            <div className="p-4 pb-2 flex justify-between items-center">
              <div
                className={`py-4 overflow-hidden transition-all ${
                  expanded ? "w-50" : "w-full"
                }`}
              >
                <p
                  className={`font-Gladiora font-[400] ${
                    light ? "NeutalBase" : "text-white"
                  } ${expanded ? " text-[28px]" : " text-[12px]"}`}
                >
                  Mentor Me
                </p>
              </div>
            </div>

            <p className="flex 2 px-5 font-Inter text-[14px] leading-[20.3px] font-[500]   text-Neutra30">
              MENU
            </p>
            <SidebarContext.Provider value={{ expanded }}>
              <ul className="flex flex-col gap-4 px-3 py-4 ">{children}</ul>
            </SidebarContext.Provider>
            <div className="my-10 border-t-2 border-Neutra40">
              <ul className=" px-3  py-4 flex flex-col gap-4 cursor-pointer">
                <li className={`flex gap-3 rounded-[5px] p-2`}>
                  <span>{SideBarIcons.settingIcon()}</span>
                  <span
                    className={` font-Inter text-[14px] font-[500] ${
                      light ? "text-[#40444B]" : "text-[#fff]"
                    }  ${expanded ? "" : "hidden"}`}
                  >
                    Setting
                  </span>
                </li>
                <li className={`flex gap-3  rounded-[5px] p-2`}>
                  <span>{SideBarIcons.logoutIcon()}</span>
                  <span
                    className={`font-Inter text-[14px] font-[500]  text-Error50  ${
                      expanded ? "" : "hidden"
                    }`}
                  >
                    LogOut
                  </span>
                </li>
              </ul>
            </div>
            <div className="px-3 flex gap-3 items-center">
              {SideBarIcons.profileIcon()}
              <div
                className={`flex justify-between items-center overflow-hidden transition-all ${
                  expanded ? "w-52 ml-2" : "w-0"
                }`}
              >
                <div className="leading">
                  <span className="font-Inter text-[14px] font-[500] text-Neutra30">
                    <span
                      className={`${light ? "text-[#000]" : " text-Neutra30"}`}
                    >
                      {" "}
                      Funmi Oladapo
                    </span>
                    <br />
                    funmi@zurimp.com
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}

export function SidebarItem({
  icon,
  lightIcon,
  text,
  alert,
  active,
  light = false, // Default to dark item
}: {
  icon: React.ReactNode;
  lightIcon: React.ReactNode;
  text: string;
  alert?: boolean;
  active?: boolean;
  light?: boolean; // Prop for light item
}) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center gap-3 rounded-[5px] p-2 font-medium rounded-md cursor-pointer
      }`}
    >
      {light ? lightIcon : icon}
      <span
        className={`font-Inter text-[14px] font-[500] overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        } ${light ? "text-[#008080]" : "text-[#fff]"}`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}
      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
