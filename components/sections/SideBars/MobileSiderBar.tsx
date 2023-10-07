import {
  CommunitiesIcon,
  HomeIcon,
  MobileSession,
  ResourcesIcon,
} from "@/public/SVGs";
import Link from "next/link";

import { SideBarIcons } from "@/public/assets/icons";

export const MobileSideBar = () => {
  return (
    <nav className="w-full flex justify-center fixed bottom-0  items-center lg:hidden cursor-pointer shadow-xl ">
      <div className="w-[90%] flex   justify-between  items-center ">
        <Link href={"/mentee-profile?path=home"}>
          <div className="flex flex-col  justify-center  items-center">
            <HomeIcon />
            <span className="text-[14px] text-[#121212]  font-[500] font-Hanken">
              Home
            </span>
          </div>
        </Link>
        <Link href={"/mentee-sessions?path=sessions"}>
          <div className="flex flex-col  justify-center  items-center ">
            <MobileSession />
            <span className="text-[12px] text-[#ABABAB]  font-[400] font-Hanken">
              Sessions
            </span>
          </div>
        </Link>
        <Link href={"/mentee-communities?path=communities"}>
          <div className="flex flex-col  justify-center  items-center">
            <CommunitiesIcon />
            <span className="text-[12px] text-[#ABABAB]  font-[400] font-Hanken">
              Communities
            </span>
          </div>
        </Link>
        <Link href={"/mentee-resources?path=resources"}>
          <div className="flex flex-col  justify-center  items-center">
            <ResourcesIcon />
            <span className="text-[12px] text-[#ABABAB]  font-[400] font-Hanken">
              Resource center
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
