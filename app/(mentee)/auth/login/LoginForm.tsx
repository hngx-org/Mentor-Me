import React from "react";

import auth from "../../../../public/assets/auth.jpeg";
import Image from "next/image";

import google from "../../../../public/assets/goggle.svg";
import facebook from "../../../../public/assets/facebook.svg";
import Input from "@/components/inputs/input";
import { Button } from "@/components/button/Button";

const LoginForm = () => {
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
          <div className="flex justify-center flex-col w-full h-[100vh]">
            <h2 className="text-[#2A2A2A] font-Gladiora text-3xl">Mentor Me</h2>
            <h4 className="font-Inter font-medium text-[#121212] text-2xl mt-3">
              Sign Up
            </h4>
            <h5 className="text-[#808080] text-base font-Hanken mt-2 mb-5">
              Create an account
            </h5>
            <Input id="email" label="Email Address" required type="email" />
            <Input id="password" label="Password" required type="password" />
            <p className="font-Hanken text-[#565656] text-base my-3 flex justify-end ">
            Forgot Password?
            </p>

            <Button
              variant="primary"
              paddingLess={true}
              className="w-full h-[48px]"
            >
              Login
            </Button>
            <div className="flex justify-center w-full">
              <h5 className="font-inter text-[#565656] text-sm font-medium my-5">
                OR
              </h5>
            </div>
            <div className="flex flex-col gap-4">
              <Button
                variant="outline-primary"
                paddingLess={true}
                className="w-full h-[48px]"
                imgSrc={google}
                imgAlt="google"
              >
                Login with Google
              </Button>
              <Button
                variant="outline-primary"
                paddingLess={true}
                className="w-full h-[48px]"
                imgSrc={facebook}
                imgAlt="facebook"
              >
                Login with Google
              </Button>
            </div>
            <h5 className="font-Hanken mt-3">New to Mentor.me? Sign Up</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
