/* eslint-disable prettier/prettier */
import React from "react"
import { mentorCardHero, mentorCardAvatar } from "@/public"

import Image from "next/image"
import { CalenderIcon, ClockIcon, IconVerfied } from "@/public/SVGs"
import Button from "@/components/ui/Button"
import Link from "next/link"

const MentorCard = () => {
  return (
    <div className="mentorCard w-[90%] h-fit border border-Neutra10 lg:rounded-[8px] rounded-[5px] pb-3 flex flex-col flex-shrink-0">
      <div className="card h-full w-full font-Hanken flex flex-col gap-3 lg:gap-3 items-center">
        <Image
          alt="members"
          src={mentorCardHero}
          width={298}
          height={183}
          className="block lg:w-[100%] lg:aspect-[298/183]object-cover "
        />
        <div className="info px-2 lg:px-[14px] lg:gap-[10px] flex flex-col gap-[8px] ">
          <div className="w-fit flex gap-1 flex-col justify-center text-center">
            <div className="flex gap-1 items-center">
              <Image
                alt="members"
                src={mentorCardAvatar}
                width={24}
                height={24}
                className="block xl:w-[24px] xl:h-[24px] w-[12px] h-[12px]"
              />
              <p className="text-NeutalBase font-semibold xl:text-[18px] text-[12px] leading-[14px] ">
                Shade Mayowa
              </p>

              <IconVerfied className="lg:w-6 w-3 aspect-square" />
            </div>
            <p className="text-Neutra30 font-normal lg:text-xs text-[10px]">
              CEO, Webmasters Inc
            </p>
          </div>
          <div className="time flex lg:gap-[10px] lg:justify-normal justify-between xl:text-xs text-[10px] font-norm">
            <div className="w-fit flex gap-x-[3px] items-center">
              {" "}
              <CalenderIcon className=" w-[13px] aspect-square" />{" "}
              <span className="">28th Sept</span>{" "}
            </div>
            <div className="w-fit flex gap-x-[3px] items-center">
              {" "}
              <ClockIcon className=" w-[13px] aspect-square" />{" "}
              <span className="">12:30pm</span>{" "}
            </div>
          </div>
          <div className="topic font-semibold xl:text-[18px] text-[12px] lg:leading-[21.6px] leading-[16px]">
            Introduction to AI
          </div>
          <div className="desc font-normal xl:text-[12px] xl:leading-[14.4px] text-[10px] leading-[12px] ">
            Explore the fascinating world of AI with hands-on demos and
            discussions. Learn the basics from industry experts.
          </div>
          <div className="border-b border-Neutra10 border-[.5px] " />
        </div>
        <Link href="/mentee-communities/forums">
          <Button
            variant="secondary"
            className="text-[10px] whitespace-nowrap lg:px-[32px]  px-[50px] py-[10px] xl:max-w-[230px] xl:w-[230px] lg:max-w-[230px] lg:w-[230px] md:max-w-[70%] md:w-[70%] max-w-[70%] w-[70%] mx-auto"
            type="button"
            title="Join Classroom"
          />
        </Link>
      </div>
    </div>
  )
}

export default MentorCard
