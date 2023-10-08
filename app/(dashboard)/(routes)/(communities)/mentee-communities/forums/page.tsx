/* eslint-disable prettier/prettier */

import React from "react"

import BigDiscussionCard from "@/components/sections/mentee-communities/BigDiscussionCard"
import Image from "next/image"
import { membersCardAvatar } from "@/public"
import Button from "@/components/ui/Button"
import messageedit from "../../../../../../public/assets/Icons/mentee-communities/messageEdit.svg"
import Link from "next/link"

type Props = {
  join: Boolean
}
export default function Forums({ join = false }): React.ReactElement<Props> {
  return (
    <div className="forums startDiscussion joinDiscussion lg:px-[85px] max-w-[100vw] md:px-12 px-6 flex flex-col  gap-y-8 ">
      <div className="searchborder border mt-4 lg:mt-8 mb-[-8px] h-14">
        search{" "}
      </div>

      <div className="heading flex  md:flex-row flex-col gap-y-6 md:items-center">
        {" "}
        <div className="title flex flex-col xl:gap-[14px] gap-2 font-Hanken xl:mb-[45px] text-left lg:w-[70%]">
          <p className=" text-NeutalBase font-semibold lg:text-[32px] text-[18px] lg:leading-[38px] leading-5  ">
            Tech Titans
          </p>

          <div className=" text-Accent1 font-medium lg:text-[18px] text-[10px] leading-[22px]  flex  lg:gap-2 gap-[8px] items-center relative">
            <Image
              alt="members"
              src={membersCardAvatar}
              width={56}
              height={24}
              className="block lg:w-[56px] lg:h-[24px] w-[26px] h-[12px]"
            />{" "}
            <span className=""> {`${13} Members`}</span>
          </div>

          <p className=" text-Neutra50 font-normal lg:text-[18px] lg:leading-[21.6px] text-[14px] leading-[14.4px] w-[90%]">
            Connect with industry-leading mentors in science and technology.
            Explore the cutting edge together.
          </p>
        </div>
        <div className="largeButton lg:flex hidden">
          <Link href="/mentee-communities/forums/new-discussion">
            <Button
              variant="primary"
              className="text-[10px] whitespace-nowrap px-[40px]   py-[16px] xl:max-w-fit  l"
              type="button"
              title={join ? "Join a discussuion" : "Start a disscussion"}
              icon={messageedit}
            />
          </Link>
        </div>
        <div className="smallButton lg:hidden flex">
          {" "}
          <Link href="/mentee-communities/forums/new-discussion">
            <Button
              variant="primary"
              className="text-[10px] whitespace-nowrap px-[40px]   py-[16px]    h-fit  w-fit flex lg:hidden"
              type="button"
              title={join ? "Join a discussuion" : "Start a disscussion"}
            />
          </Link>
        </div>
      </div>

      <BigDiscussionCard mentor={true} />
      <BigDiscussionCard mentor={false} />
      <BigDiscussionCard mentor={false} />
      <BigDiscussionCard mentor={false} />
    </div>
  )
}
