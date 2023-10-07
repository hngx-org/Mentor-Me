import Image from "next/image";
import sucessIcon from "../../public/assets/Icons/icon-park-outline_success.svg";
import React from "react";
interface SucessModalProps {
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SucessModal({ handleClose }: SucessModalProps) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[600px]">
          <div className="bg-white px-10 py-16 rounded-md flex flex-col justify-center items-center">
            <Image src={sucessIcon} alt="Sucess Icon" />

            <p className="text-center font-Inter font-[500] text-[24px] text-Success50">
              Submission successful
            </p>
            <p className="text-center font-Hanken font-[400] text-[18px] text-NeutalBase">
              Your application has been submitted. <br />
              Your profile will be verified between 24 - 48 hours.
            </p>

            <button
              className="mt-5 w-full bg-NeutalBase text-white py-3 rounded-md text-center font-Inter font-[500] text-[16px]"
              onClick={handleClose}
            >
              Go to dashboard
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
