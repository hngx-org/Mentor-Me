import Image from "next/image";
import React from "react";

import Book from "@/public/assets/resources_book.svg";
import Link from "next/link";

const Resources = () => {
  return (
    <div className="w-full max-w-[447px] h-screen flex flex-col justify-center items-center m-auto">
      <Image src={Book} alt="book" width={195} height={196} />
      <p className="mt-6 mb-7 font-Hanken text-Neutra40 text-lg">
        You have no resources yet
      </p>
      <p className="mb-[66px] font-Hanken text-[#121212] text-lg">
        Click on “Get new resources” to start exploring
      </p>
      <Link href="resources/explore" className="w-full">
        <button className="font-Hanken w-full text-white rounded-lg bg-NeutalBase h-12 mb-4">
          Get New Resources
        </button>
      </Link>
    </div>
  );
};

export default Resources;
