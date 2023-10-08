/* eslint-disable prettier/prettier */
import React from "react"
import { bigDiscussionCardHero, mentorCardAvatar } from "@/public"
import Image from "next/image"
import Button from "@/components/ui/Button"
import messageIcon from "../../../public/assets/Icons/mentee-communities/messagesIcon.svg"
import sendIcon from "../../../public/assets/Icons/mentee-communities/sendIcon.svg"

type Props = {
  mentor: boolean
}

const BigDiscussionCard: React.FC<Props> = ({ mentor }) => {
  return (
    <div className="bigDiscussioncard flex border py-4 pl-4 pr-[30px] rounded-[10px] gap-x-9">
      {mentor && (
        <div className="image overflow-hidden aspect-square w-[295px] rounded-[10px] flex flex-shrink-0">
          <Image
            alt="members"
            src={bigDiscussionCardHero}
            width={295}
            height={382}
            className="block w-[100%] aspect-[298/382] object-cover "
          />
        </div>
      )}

      <div className="info flex flex-col gap-5">
        <div className="w-fit flex gap-1 flex-col justify-center text-left">
          <div className="flex gap-4 items-center">
            <Image
              alt="members"
              src={mentorCardAvatar}
              width={37}
              height={37}
              className="block xl:w-[37px] xl:h-[37px] w-[12px] h-[12px]"
            />
            <div className="">
              <p className="text-NeutalBase font-semibold xl:text-[18px] text-[12px] leading-[14px]  mb-2">
                Shade Mayowa
              </p>
              <p className="text-Neutra30 font-normal lg:text-xs text-[10px]">
                {mentor ? "Mentor" : "Student"}
              </p>
            </div>
          </div>
        </div>
        <div className="text flex flex-col gap-2">
          <div className="topic font-medium lg:text-[24px] text-[12px] lg:leading-[28.8px] leading-[16px]">
            My take on Augmented Reality (AR)
          </div>
          <div className="desc font-normal lg:text-[17px] lg:leading-[21.6px] text-[10px] leading-[12px] ">
            AR enhances our everyday experiences by overlaying digital elements
            onto the real world. Through AR, your smartphone becomes a window to
            a new dimension. Imagine exploring a historic city, and with a
            simple glance through your device, historical figures come to life,
            sharing stories and insights. AR is revolutionizing education,
            gaming, and even shopping, making the ordinary extraordinary.
          </div>
        </div>{" "}
        <div className="buttons flex gap-5">
          <Button
            variant="secondary"
            className="text-[10px] whitespace-nowrap px-[12px]   py-[10px]  text-Accent1 bg-Accent6 border-0"
            type="button"
            title="14 Comments"
            icon={messageIcon}
          />
          <Button
            variant="secondary"
            className="text-[10px] whitespace-nowrap px-[12px]   py-[10px] text-Accent1 bg-Accent6 border-0"
            type="button"
            title="14 Comments"
            icon={sendIcon}
          />
        </div>
      </div>
    </div>
  )
}

export default BigDiscussionCard
