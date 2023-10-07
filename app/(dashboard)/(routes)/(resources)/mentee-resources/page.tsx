import React from "react";
import Link from "next/link";
import { BookIcon } from "@/public/SVGs";

const Resources = () => {
  return (
    <div className="w-full max-w-[447px] h-screen flex flex-col justify-center items-center mx-auto ">
      <BookIcon />
      <p className="mt-6 mb-7 font-Hanken text-Neutra40 text-lg">
        You have no resources yet
      </p>
      <p className="mb-[66px] font-Hanken text-[#121212] text-lg">
        Click on “Get new resources” to start exploring
      </p>
      <Link
        href="/mentee-resources/explore?path=Explore Resources"
        className="w-full"
      >
        <button className="font-Hanken text-white rounded-lg bg-NeutalBase h-12 mb-4 w-full">
          Get New Resources
        </button>
      </Link>
    </div>
  );
};

export default Resources;
