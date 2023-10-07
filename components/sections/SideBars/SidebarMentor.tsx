"use client";

import { SideBarIcons } from "@/public/assets/icons";

export type SideBarMentorProps = {
  light?: boolean;
};

export default function SidebarMentor({ light = false }: SideBarMentorProps) {
  return (
    <section
      className={`w-[274px] border-[1px]  p-7 h-[900px] relative ${
        light ? "bg-[#fff]" : " bg-[#000]"
      }`}
    >
      <div className="flex flex-col">
        <div className="h-[82px]">
          {light ? SideBarIcons.logo2() : SideBarIcons.LogoIcon()}
        </div>

        {/* menu */}

        <div>
          <div className="w-full pl-3">
            {light ? SideBarIcons.logo2() : SideBarIcons.LogoIcon()}
          </div>
          <div className="mt-20 tall:mt-10">
            <p className="  font-Inter tetx-[14px]  leading-[20.3px] font-[500]   text-Neutra30 pl-3">
              MENU
            </p>
            <ul className="l px-3  py-4 tall:py-2 tall:gap-1 gap-4 cursor-pointer text-xl">
              {sidebarMentorLinks.map((link) => (
                <Link key={link.id} href={link.path} prefetch>
                  <li
                    className={`flex gap-3  ${
                      light && path === link.label.toLowerCase()
                        ? "bg-[#E5FFFF]"
                        : !light && path === link.label.toLowerCase()
                        ? " bg-Neutra50"
                        : ""
                    } rounded-[5px] p-2 items-center`}
                  >
                    <span>{light ? link.iconLight : link.iconDark}</span>
                    <span
                      className={` font-Inter tetx-[14px] font-[500] ${
                        light ? "text-[#008080]" : "text-[#fff]"
                      } `}
                    >
                      {link.label}
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        {/* logout */}

        <div className="my-10 border-t-2 border-Neutra40">
          <ul className=" px-3  py-4 flex flex-col gap-4 cursor-pointer">
            <li className={`flex gap-3 rounded-[5px] p-2`}>
              <span>{SideBarIcons.settingIcon()}</span>
              <span
                className={` font-Inter text-[14px] font-[500] ${
                  light ? "text-[#40444B]" : "text-[#fff]"
                } `}
              >
                Setting
              </span>
            </li>
            <li className={`flex gap-3  rounded-[5px] p-2`}>
              <span>{SideBarIcons.logoutIcon()}</span>
              <span className="  font-Inter text-[14px] font-[500]  text-Error50">
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
              <span className="  font-Inter text-[14px] font-[500]   text-Neutra30">
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
