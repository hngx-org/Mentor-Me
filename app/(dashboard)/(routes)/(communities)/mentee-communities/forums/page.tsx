/* eslint-disable prettier/prettier */
import React from "react"
import BigDiscussionCard from "@/components/sections/mentee-communities/BigDiscussionCard"
import Image from "next/image"
import { membersCardAvatar } from "@/public"
import Button from "@/components/ui/Button"
import messageedit from "../../../../../../public/assets/Icons/mentee-communities/messageEdit.svg"
type Props = {
  join: Boolean
}
export default function Forums({ join = false }): React.FC<Props> {
  return (
    <div className="forums startDiscussion joinDiscussion px-[85px] flex flex-col  gap-y-5 ">
      <div className="search mt-6 border mb-8 p-4">search </div>

      <div className="heading flex items-center">
        {" "}
        <div className="title flex flex-col xl:gap-[14px] gap-2 font-Hanken xl:mb-[45px] text-left lg:w-[70%]">
          <p className=" text-NeutalBase font-semibold lg:text-[32px] text-[14px] leading-[38px]  ">
            Tech Titans
          </p>

          <div className=" text-Accent1 font-medium lg:text-[18px] text-[10px] leading-[22px]  flex lg:gap-2 gap-[8px] items-center relative">
            <Image
              alt="members"
              src={membersCardAvatar}
              width={56}
              height={24}
              className="block lg:w-[56px] lg:h-[24px] w-[26px] h-[12px]"
            />{" "}
            <span className=""> {`${13} Members`}</span>
          </div>

          <p className=" text-Neutra50 font-normal lg:text-[18px] lg:leading-[21.6px] text-[10px] leading-[14.4px] w-[90%]">
            {
              "Connect with industry-leading mentors in science and technology. Explore the cutting edge together."
            }
          </p>
        </div>
        <Button
          variant="primary"
          className="text-[10px] whitespace-nowrap px-[40px]   py-[16px] xl:max-w-fit   h-fit "
          type="button"
          title={join ? "Join a discussuion" : "Start a disscussion"}
          icon={messageedit}
        />
      </div>

      <BigDiscussionCard mentor={true} />

      <BigDiscussionCard mentor={false} />
      <BigDiscussionCard mentor={false} />

      <BigDiscussionCard mentor={false} />
    </div>
  )
}
