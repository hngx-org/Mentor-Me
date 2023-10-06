import Image from "next/image";
import React from "react";

import Shoppimg from "./../../public/assets/icons/shopping-cart.png";
import notification from "./../../public/assets/icons/notification-bing.png";
import profile from "../../public/assets/images/Image.png";

export default function HeaderAfterSignUp() {
  return (
    <nav className="flex justify-between items-center py-5 px-9 bg-[#FFFF] cursor-pointer border-b">
      <h1 className="font-Hanken font-[700] text-2xl">Mentor Account</h1>

      <div className="flex items-center gap-5">
        <Image src={notification} width={20} height={30} alt="notification" />

        <div className="flex items-center gap-2">
          <Image src={profile} width={30} height={30} alt="notification" />
          <div className="flex flex-col  font-Inter ">
            <span className=" text-[11px]">Henrietta Okonkwo</span>

            <span className=" text-[10px]">Product Designer</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
