import Image from "next/image";
import { DashboardMenteeNavImg } from "@/public";
import React from "react";
import { SideBarIcons } from "@/public/assets/icons";
import { BulletIcon } from "@/public/SVGs";

interface Steps {
  step: number;
}

export default function HeaderAfterSignUp({ step }: Steps) {
  const isStep1To4 = step >= 1 && step <= 4;
  const h1ClassName = isStep1To4
    ? "font-Hanken font-[700]  md:text-2xl text-xl text-Neutra20"
    : "font-Hanken font-[700] md:text-2xl text-xl text-NeutalBase";

  return (
    <nav className="flex justify-between items-center py-5 md:px-4 px-2 bg-[#FFFF] cursor-pointer border-b">
      <div className="flex items-center">
        <h1 className={h1ClassName}>Mentor Account </h1>

        {step === 1 && (
          <>
            {" "}
            <span>
              <BulletIcon />
            </span>
            <p className="font-Hanken font-[700] md:text-2xl text-xl text-NeutalBase">
              Certifications
            </p>
          </>
        )}
        {step === 2 && (
          <>
            {" "}
            <span>
              <BulletIcon />
            </span>
            <p className="font-Hanken font-[700] md:text-2xl text-xl text-NeutalBase">
              Achievements & Awards
            </p>
          </>
        )}
        {step === 3 && (
          <>
            <span>
              <BulletIcon />
            </span>
            <p className="font-Hanken font-[700] md:text-2xl text-xl text-NeutalBase">
              Qualifications
            </p>
          </>
        )}
        {step === 4 && (
          <>
            <span>
              <BulletIcon />
            </span>
            <p className="font-Hanken font-[700] md:text-2xl text-xl text-NeutalBase">
              Identification
            </p>
          </>
        )}
      </div>

      <div className="flex items-center gap-5">
        <span className="md:visible invisible">{SideBarIcons.notify()}</span>

        <div className="flex items-center gap-2">
          <Image
            src={DashboardMenteeNavImg}
            alt="mentor"
            width={40}
            height={40}
          />
          <div className="flex flex-col  font-Inter ">
            <span className=" text-[11px]">Funmi Oladapo</span>

            <span className=" text-[10px]">C++ Developer</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
