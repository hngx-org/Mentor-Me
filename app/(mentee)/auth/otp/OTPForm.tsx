"use client";
import React from "react";

import auth from "../../../../public/assets/auth.jpeg";
import Image from "next/image";

import { Button } from "@/components/button/Button";
import Modal from "@/components/modal/Modal";
import { useState, useRef } from "react";

const OTPForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const openModal = (): void => {
    setIsOpen(true);
  };
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const otpInputs: Array<React.RefObject<HTMLInputElement | null>> = Array(6)
    .fill(null)
    .map(() => useRef(null));

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (value.length === 1 && index < 5) {
      otp[index] = value;
      otpInputs[index + 1]?.current?.focus();
    } else if (value.length === 1 && index === 5) {
      otp[index] = value;
      // Handle OTP submission logic here
    } else if (value === "") {
      otp[index] = "";
      if (index > 0) {
        otpInputs[index - 1]?.current?.focus();
      }
    }
    setOTP([...otp]);
  };

  return (
    <div>
      <div className="w-full h-[100vh] grid sm:grid-cols-6 overflow-hidden">
        <div className="sm:col-span-3 ">
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={auth}
              alt="Authentication Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="col-span-3  px-6  sm:px-32">
          <div className="mt-6">
            <h2 className="text-[#2A2A2A] font-Gladiora text-3xl">Mentor Me</h2>
            <h4 className="font-Inter font-medium text-[#121212] text-2xl mt-3">
              OTP Verification
            </h4>
            <h5 className="text-[#808080] text-base font-Hanken mt-2 mb-5">
              Please enter the 6 digit code sent to funmi.iny***@gmail.com
            </h5>

            <div className="flex  space-x-4">
              {otpInputs.map((inputRef, index) => (
                <input
                  key={index}
                  ref={inputRef as React.RefObject<HTMLInputElement> | null}
                  type="text"
                  maxLength={1}
                  value={otp[index]}
                  onChange={(e) => handleInputChange(e, index)}
                  className="w-10 h-10 border border-gray-300 rounded-md text-center text-2xl"
                />
              ))}
            </div>

            <p className="font-Hanken text-[#565656] text-base my-3 ">
              Didn’t receive OTP? Resend
            </p>

            <Button
              variant="primary"
              paddingLess={true}
              className="w-full h-[48px]"
              onClick={openModal}
            >
              Continue
            </Button>

            <Modal
              isOpen={isOpen}
              closeModal={closeModal}
              content="A resent link has been sent to your email address. Please follow the instructions to reset your password"
              buttontext="Check inbox"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPForm;
