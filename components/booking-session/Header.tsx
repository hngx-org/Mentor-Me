import {
  DashboardCoverBg,
  FB,
  IG,
  MentorProfile,
  exportx,
  heart,
  stars,
  verified,
} from "@/public"
import Image from "next/image"
import React from "react"

const Header = () => {
  return (
    <div className="">
      <Image
        src={DashboardCoverBg}
        alt="cover"
        className="min-h-[100px] sm:min-h-[150px]"
      />

      <div className="flex flex-row flex-wrap justify-between items-center gap-4 px-2 sm:px-5">
        <div className="flex flex-col sm:flex-row relative">
          <div className="relative -top-5 sm:-top-8 flex">
            <Image
              src={MentorProfile}
              alt=""
              className="w-[100px] sm:w-[200px] "
            />
            <Image
              src={verified}
              alt=""
              className="relative top-8 -left-5 sm:-left-12 sm:top-20"
            />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-Hanken font-semibold text-Neutra50">
              Shade Mayowa
            </h2>
            <p className="text-xs font-Hanken font-normal text-Neutra40">
              CEO, Webmasters Inc
            </p>
            <div className="flex gap-4">
              <Image src={stars} alt="" />{" "}
              <p className="text-base font font-Hanken font-normal">
                4.5 | 20 reviews
              </p>
            </div>
            <div className="flex gap-4">
              <Image src={FB} alt="" />
              <Image src={IG} alt="" />
            </div>
          </div>
        </div>
        <div className="flex gap-5 sm:pr-10">
          <Image src={heart} alt="" />
          <Image src={exportx} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
