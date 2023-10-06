import RootLayout from "@/app/layout";
import HeaderAfterSignUp from "@/components/sections/HeaderAfterSignUp";
import SidebarMentor from "@/components/sections/SideBars/SidebarMentor";
import amico from "../../../public/assets/images/amico.png";
import Image from "next/image";

export default function MentorProfileVerification() {
  return (
    <>
      <div className="w-full flex">
        <SidebarMentor />
        <div className="w-full">
          <HeaderAfterSignUp />

          <div className="content my-5 flex flex-col items-center">
            <h1 className="font-Hanken font-[600] text-3xl">
              Welcome to Mentor Me
            </h1>
            <p className="font-Hanken font-[400] text-base">
              First things first, complete your verification. This will allow us
              to know more about you
            </p>

            <div className="container mt-5 grid grid-cols-4 px-8">
              <div className="left-panel col-span-1">
                <ul>
                  <li className="cursor-pointer mt-8 p-2 flex items-center justify-center">
                    <div className="border border-gray-300 rounded-md h-8 w-8 flex items-center justify-center">
                      1
                    </div>{" "}
                    <span className="ml-2 font-Hanken font-[400]">
                      {" "}
                      Certifications & Diplomas
                    </span>
                  </li>

                  <li className="cursor-pointer mt-8 p-2 flex items-center">
                    <div className="border border-gray-300 rounded-md h-8 w-8 flex items-center justify-center">
                      2
                    </div>{" "}
                    <span className="ml-2 font-Hanken font-[400]">
                      {" "}
                      Qualifications
                    </span>
                  </li>

                  <li className="cursor-pointer mt-8 p-2 flex items-center">
                    <div className="border border-gray-300 rounded-md h-8 w-8 flex items-center justify-center">
                      3
                    </div>{" "}
                    <span className="ml-2 font-Hanken font-[400]">
                      {" "}
                      Achievements & Adwards
                    </span>
                  </li>

                  <li className="cursor-pointer mt-8 p-2 flex items-center">
                    <div className="border border-gray-300 rounded-md h-8 w-8 flex items-center justify-center">
                      4
                    </div>{" "}
                    <span className="ml-2 font-Hanken font-[400]">
                      {" "}
                      Identification
                    </span>
                  </li>
                </ul>
              </div>
              <div className="right-panel col-span-3 flex flex-col justify-center items-center py-20">
                <Image src={amico} alt="amico" />
                <div className="px-16 mt-8">
                  <h5 className="font-Hanken text-[24px] font-[700]">
                    Verify your profile in a few steps and let’s get started!
                  </h5>
                  <p className="font-Hanken text-[16px] font-[400]">
                    This application should take no more than 5 - 10 minutes.
                    Please complete the following information to verify your
                    qualifications and expertise as a mentor.
                  </p>
                  <p className="mt-2 font-Hanken text-[16px] font-[400]">
                    Your credentials will be reviewed to ensure the highest
                    level of professionalism and quality guidance. Your profile
                    will be verified between 24 - 48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
