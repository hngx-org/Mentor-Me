"use client";
import { SideBarIcons } from "@/public/assets/Icons";

export type SideBarMentorProps = {
  light?: boolean;
};

export default function SidebarMentor({ light = true }: SideBarMentorProps) {
  return (
    <section
      className={`hidden w-[274px]  px-3 min-h-screen h-full fixed lg:flex left-0 top-0 border-2 ${
        light ? "bg-[#fff]" : " bg-[#000]"
      }`}
    >
      <div className="flex flex-col w-full">
        <div className={`${light ? "h-[70px]" : "h-[82px]"}  py-4`}>
          {light ? SideBarIcons.logo2() : SideBarIcons.LogoIcon()}
        </div>

        {/* menu */}

        <div className="mt-5 ">
          <p className="  font-Inter tetx-[14px]  leading-[20.3px] font-[500]   text-Neutra30">
            MENU
          </p>
          <ul
            className={` px-6  py-4 flex flex-col  cursor-pointer ${
              light ? "gap-1" : ""
            }`}
          >
            <li
              className={`flex gap-3  ${
                light ? "bg-[#E5FFFF]" : " bg-Neutra50"
              } rounded-[5px] p-2 items-center`}
            >
              <span>
                {light ? SideBarIcons.homeIcon2() : SideBarIcons.homeIcon()}
              </span>
              <span
                className={` font-Inter text-[10px] font-[500] ${
                  light ? "text-[#008080]" : "text-[#fff]"
                } `}
              >
                Home
              </span>
            </li>
            <li className="flex  gap-3 rounded-[5px] p-2 items-center ">
              <span>
                {light
                  ? SideBarIcons.messaging2()
                  : SideBarIcons.messagesIcon()}
              </span>
              <span
                className={` font-Inter text-[10px] font-[500] ${
                  light ? "text-[#40444B]" : "text-[#fff]"
                } `}
              >
                Messages
              </span>
            </li>
            <li className="flex  gap-3 rounded-[5px] p-2 items-center ">
              <span>
                {light
                  ? SideBarIcons.MyMentors2()
                  : SideBarIcons.myMentorsIcons()}
              </span>
              <span
                className={` font-Inter text-[10px] font-[500] ${
                  light ? "text-[#40444B]" : "text-[#fff]"
                } `}
              >
                My Mentors
              </span>
            </li>
            <li className="flex  gap-3  rounded-[5px] p-2 items-center">
              <span>
                {light ? SideBarIcons.session2() : SideBarIcons.sessions()}
              </span>
              <span
                className={` font-Inter text-[10px] font-[500] ${
                  light ? "text-[#40444B]" : "text-[#fff]"
                } `}
              >
                Sessions
              </span>
            </li>
            <li className="flex  gap-3 rounded-[5px] p-2  items-center">
              <span>
                {light
                  ? SideBarIcons.resources2()
                  : SideBarIcons.resourcesIcon()}
              </span>
              <span
                className={` font-Inter text-[10px] font-[500] ${
                  light ? "text-[#40444B]" : "text-[#fff]"
                } `}
              >
                Resources
              </span>
            </li>
            <li className="flex  gap-3  rounded-[5px] p-2 items-center">
              <span>
                {light
                  ? SideBarIcons.communities2()
                  : SideBarIcons.communitiesIcon()}
              </span>
              <span
                className={` font-Inter text-[10px] font-[500] ${
                  light ? "text-[#40444B]" : "text-[#fff]"
                } `}
              >
                Communities
              </span>
            </li>
            <li className="flex  gap-3  rounded-[5px] p-2 items-center">
              <span>
                {light ? SideBarIcons.earning2() : SideBarIcons.earning()}
              </span>
              <span
                className={` font-Inter text-[10px] font-[500] ${
                  light ? "text-[#40444B]" : "text-[#fff]"
                } `}
              >
                Earnings
              </span>
            </li>
            {light ? (
              ""
            ) : (
              <li className="flex  gap-3  rounded-[5px] p-2 items-center">
                <span>{SideBarIcons.plans()}</span>
                <span
                  className={` font-Inter text-[10px] font-[500] ${
                    light ? "text-[#40444B]" : "text-[#fff]"
                  } `}
                >
                  Plans
                </span>
              </li>
            )}
            {light ? (
              ""
            ) : (
              <li className="flex  gap-3  rounded-[5px] p-2 items-center">
                <span>{SideBarIcons.reviews()}</span>
                <span
                  className={` font-Inter text-[10px] font-[500] ${
                    light ? "text-[#40444B]" : "text-[#fff]"
                  } `}
                >
                  Reviews
                </span>
              </li>
            )}
          </ul>
        </div>

        {/* logout */}

        <div className={`${light ? "my-3" : ""} border-t-2 border-Neutra40 `}>
          <ul className=" px-3  py-2 flex flex-col gap-2 cursor-pointer">
            <li className={`flex gap-2 rounded-[5px] p-2 items-center`}>
              <span>{SideBarIcons.settingIcon2()}</span>
              <span
                className={` font-Inter text-[10px] font-[500] ${
                  light ? "text-[#40444B]" : "text-[#fff]"
                } `}
              >
                Setting
              </span>
            </li>
            <li className={`flex gap-3  rounded-[5px] p-2 items-center`}>
              <span>{SideBarIcons.logoutIcon()}</span>
              <span className="  font-Inter text-[10px] font-[500]  text-Error50">
                LogOut
              </span>
            </li>
          </ul>
        </div>
        {/* profile */}

        <div className="bottom-0">
          <ul className="  cursor-pointer   ">
            <li className={`flex gap-3 items-center  p-2`}>
              <span>{SideBarIcons.profileIcon()}</span>
              <span className="  font-Inter text-[10px] font-[500]   text-Neutra30">
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
