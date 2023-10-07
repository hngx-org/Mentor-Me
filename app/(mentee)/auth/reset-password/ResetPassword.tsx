"use client"
import React from "react";

import auth from "../../../../public/assets/auth.jpeg";
import Image from "next/image";

import google from "../../../../public/assets/goggle.svg";
import facebook from "../../../../public/assets/facebook.svg";
import Input from "@/components/inputs/input";
import { Button } from "@/components/button/Button";
import Modal from "@/components/modal/Modal";
import {useState} from "react"

const ResetPassword = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const openModal = (): void => {
    setIsOpen(true);
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
            Reset Password
            </h4>
            <h5 className="text-[#808080] text-base font-Hanken mt-2 mb-5">
            Please enter your new Password
            </h5>
            <Input id="email" label="Email Address" required type="password" />
            <Input id="email" label="Email Address" required type="password" />
          
            <p className="font-Hanken text-[#565656] text-base my-3 flex justify-end ">
            No worries, we will send your reset instructions to your registered email address
            </p>

            <Button
        variant="primary"
        paddingLess={true}
        className="w-full h-[48px]"
        onClick={openModal}
      >
        Reset Password
      </Button>
            <Modal  isOpen={isOpen} closeModal={closeModal}  content="You have successfully reset your password" buttontext="Return to login"/>
          
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
