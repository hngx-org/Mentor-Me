/* eslint-disable prettier/prettier */
import React from "react"

import { mentorCardHero, mentorCardAvatar } from "@/public"

import Image from "next/image"
import { CalenderIcon, ClockIcon } from "@/public/SVGs"
import Button from "@/components/ui/Button"
const BigMentorShipCard = () => {
  return (
    <div className="bigMentorshipCard lg:rounded-[8px] rounded-[5px]   hidden lg:flex  gap-4 lg:px-6">
      <div className="image  flex-shrink-0  aspect-[551/336]  xl:w-[551px] lg:w-[400px] overflow-hidden rounded-[8px]">
        {" "}
        <Image
          alt="members"
          src={mentorCardHero}
          width={606}
          height={400}
          className="block  aspect-[298/183]  w-[110%] object-cover "
        />
      </div>

      <div className="info px-[14px] xl:gap-[10px]  flex flex-col font-Hanken text-NeutalBase ">
        <div className="topic font-bold xl:text-[46px] lg:text-[40px] xl:leading-[56px] lg:leading-[50px] whitespace-nowrap">
          Introduction to AI
        </div>
        <div className="w-fit flex gap-1 flex-col justify-center text-center">
          <div className="flex gap-1 items-center">
            <Image
              alt="members"
              src={mentorCardAvatar}
              width={37}
              height={37}
              className="lg:w-[30px] aspect-square xl:w-[37px]"
            />
            <p className="font-semibold xl:text-[24px] lg:text-[18px] leading-[28.8px] ">
              Shade Mayowa
            </p>
          </div>
          <p className="text-Neutra30 font-normal text-[18px] leading-[21.6px]">
            Science and Technology
          </p>
        </div>
        <div className="time flex xl:gap-[14px] lg:gap-[8px] text-[16px] text-Neutra30 font-normal">
          <div className="w-fit flex gap-x-[6px] items-center">
            {" "}
            <CalenderIcon className=" w-[21px] aspect-square" />{" "}
            <span className="">28th Sept</span>{" "}
          </div>
          <div className="w-fit flex gap-x-[6px] items-center">
            {" "}
            <ClockIcon className=" w-[21px] aspect-square" />{" "}
            <span className="">12:30pm</span>{" "}
          </div>
        </div>

        <div className="desc font-normal xl:text-2xl lg:text-[18px] ">
          Explore the fascinating world of AI with hands-on demos and
          discussions. Learn the basics from industry experts.
        </div>

        <Button
          variant="primary"
          className="text-[10px] px-10 py-5 whitespace-nowrap"
          type="button"
          title="Join Classroom"
        />
      </div>
    </div>
  )
}

export default BigMentorShipCard
