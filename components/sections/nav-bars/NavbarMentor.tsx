import { DashboardMenteeNavImg } from "@/public";
import { NotificationBingIcon } from "@/public/SVGs";
import Image from "next/image";

export type NavbarMentorProps = {
  path?: string | null;
  username?: string;
  imgSrc?: string;
  jobTitle?: string;
  step?: number;
};
export const NavbarMentor = ({
  path,
  username,
  imgSrc,
  jobTitle,
  step,
}: NavbarMentorProps) => {
  return (
    <nav className="flex w-full justify-between px-3 items-center  py-4 border-b-2 border-gray-200 row-start-1 row-end-2 col-start-2 col-end-3">
      <h3 className="uppercase  font-Hanken font-[700] text-[24px]">
        {path ? path : "[PathName Here]"}
      </h3>
      <div className="flex items-center gap-3">
        <NotificationBingIcon />

        <div className="   text-[12px] text-Neutra40  font-Hanken">
          <p className="font-[500] text-black text-[14px]">
            {username ? username : "Funmi Oladapo"}
          </p>
          <p>{jobTitle ? jobTitle : "C++ Developer"}</p>
        </div>
        <Image
          src={imgSrc ? imgSrc : DashboardMenteeNavImg}
          alt="mentor"
          width={40}
          height={40}
        />
      </div>
    </nav>
  );
};
