import React from "react";

import { SideBarIcons } from "@/public/assets/Icons";
import { SideBarMentorProps } from "./SidebarMentor";

export default function SidebarMentee({ light }: SideBarMentorProps) {
  return (
    <section
      className={`w-[274px] border-[1px] ml-10 p-7 h-[800px] relative ${
        light ? "bg-[#fff]" : " bg-[#000]"
      }`}
    >
      <div className="flex flex-col">
        <div className="h-[82px]">
          {light ? SideBarIcons.logo2() : SideBarIcons.LogoIcon()}
        </div>

        {/* menu */}

        <div>
          <p className="  font-Inter tetx-[14px]  leading-[20.3px] font-[500]   text-Neutra30">
            MENU
          </p>
          <ul className=" px-3  py-4 flex flex-col gap-4 cursor-pointer">
            <li
              className={`flex gap-3  ${
                light ? "bg-[#E5FFFF]" : " bg-Neutra50"
              } rounded-[5px] p-2`}
            >
              <span>
                {light ? SideBarIcons.homeIcon2() : SideBarIcons.homeIcon()}
              </span>
              <span
                className={` font-Inter tetx-[14px] font-[500] ${
                  light ? "text-[#008080]" : "text-[#fff]"
                } `}
              >
                Home
              </span>
            </li>
            <li className="flex  gap-3 rounded-[5px] p-2 ">
              <span>
                {light
                  ? SideBarIcons.messaging2()
                  : SideBarIcons.messagesIcon()}
              </span>
              <span
                className={` font-Inter tetx-[14px] font-[500] ${
                  light ? "text-[#40444B]" : "text-[#fff]"
                } `}
              >
                Messages
              </span>
            </li>
            <li className="flex  gap-3 rounded-[5px] p-2 ">
              <span>
                {light ? SideBarIcons.booking2() : SideBarIcons.bookingIcon()}
              </span>
              <span
                className={` font-Inter tetx-[14px] font-[500] ${
                  light ? "text-[#40444B]" : "text-[#fff]"
                } `}
              >
                Bookings
              </span>
            </li>
            <li className="flex  gap-3  rounded-[5px] p-2">
              <span>
                {light ? SideBarIcons.session2() : SideBarIcons.sessions()}
              </span>
              <span
                className={` font-Inter tetx-[14px] font-[500] ${
                  light ? "text-[#40444B]" : "text-[#fff]"
                } `}
              >
                Sessions
              </span>
            </li>
            <li className="flex  gap-3 rounded-[5px] p-2 ">
              <span>
                {light
                  ? SideBarIcons.resources2()
                  : SideBarIcons.resourcesIcon()}
              </span>
              <span
                className={` font-Inter tetx-[14px] font-[500] ${
                  light ? "text-[#40444B]" : "text-[#fff]"
                } `}
              >
                Resources
              </span>
            </li>
            <li className="flex  gap-3  rounded-[5px] p-2">
              <span>
                {light
                  ? SideBarIcons.communities2()
                  : SideBarIcons.communitiesIcon()}
              </span>
              <span
                className={` font-Inter tetx-[14px] font-[500] ${
                  light ? "text-[#40444B]" : "text-[#fff]"
                } `}
              >
                Communities
              </span>
            </li>
          </ul>
        </div>

        {/* logout */}

        <div className="my-10 border-t-2 border-Neutra40">
          <ul className=" px-3  py-4 flex flex-col gap-4 cursor-pointer">
            <li className={`flex gap-3 rounded-[5px] p-2`}>
              <span>{SideBarIcons.settingIcon()}</span>
              <span
                className={` font-Inter tetx-[14px] font-[500] ${
                  light ? "text-[#40444B]" : "text-[#fff]"
                } `}
              >
                Setting
              </span>
            </li>
            <li className={`flex gap-3  rounded-[5px] p-2`}>
              <span>{SideBarIcons.logoutIcon()}</span>
              <span className="  font-Inter tetx-[14px] font-[500]  text-Error50">
                LogOut
              </span>
            </li>
          </ul>
        </div>
        {/* profile */}

        <div className=" absolute bottom-3">
          <ul className="  cursor-pointer   ">
            <li className={`flex gap-3 items-center  p-2`}>
              <span>{SideBarIcons.profileIcon()}</span>
              <span className="  font-Inter tetx-[14px] font-[500]   text-Neutra30">
                <span className={`${light ? "text-[#000]" : " text-Neutra30"}`}>
                  {" "}
                  Funmi Oladapo
                </span>
                <br /> funmi@zurimp.com
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
