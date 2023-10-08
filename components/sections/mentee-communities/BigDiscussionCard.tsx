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
    <div className="bigDiscussioncard flex flex-col lg:flex-row border py-4 pl-4 pr-[30px] rounded-[10px] gap-x-9 gap-y-4">
      {mentor && (
        <div className="image overflow-hidden aspect-square lg:w-[295px] w-[320px] rounded-[10px] flex flex-shrink-0">
          <Image
            alt="members"
            src={bigDiscussionCardHero}
            width={295}
            height={382}
            className="block w-[100%] aspect-[298/382] object-cover "
          />
        </div>
      )}

      <div className="info flex flex-col lg:gap-5 gap-2">
        <div className="w-fit flex gap-1 flex-col justify-center text-left">
          <div className="flex lg:gap-4 gap-2 items-center">
            <Image
              alt="members"
              src={mentorCardAvatar}
              width={37}
              height={37}
              className="block lg:w-[37px] lg:h-[37px] w-[24px] h-[24px]"
            />
            <div className="">
              <p className="text-NeutalBase font-semibold lg:text-[18px] text-[14px] leading-[20px]  lg:mb-2">
                Shade Mayowa
              </p>
              <p className="text-Neutra30 font-normal lg:text-xs text-[10px]">
                {mentor ? "Mentor" : "Student"}
              </p>
            </div>
          </div>
        </div>
        <div className="text flex flex-col gap-2">
          <div className="topic font-medium lg:text-[24px] text-[14px] lg:leading-[28.8px] leading-[20px]">
            My take on Augmented Reality (AR)
          </div>
          <div className="desc font-normal lg:text-[17px] lg:leading-[21.6px] text-[12px] leading-[14.4px] ">
            AR enhances our everyday experiences by overlaying digital elements
            onto the real world. Through AR, your smartphone becomes a window to
            a new dimension. Imagine exploring a historic city, and with a
            simple glance through your device, historical figures come to life,
            sharing stories and insights. AR is revolutionizing education,
            gaming, and even shopping, making the ordinary extraordinary.
          </div>
        </div>{" "}
        <div className="largeButton lg:flex hidden ">
          {" "}
          <div className="buttons gap-5 flex">
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
              title="Share"
              icon={sendIcon}
            />
          </div>
        </div>
        <div className="smallButton lg:hidden flex mt-2 ">
          <div className="buttons gap-2 flex">
            <Button
              variant="secondary"
              className="text-[8px]  flex whitespace-nowrap px-[8px] gap-x-[1px]  py-[4px]  text-Accent1 bg-Accent6 border-0"
              type="button"
              title="14 Comments"
              icon={messageIcon}
              iconHeight={15}
              iconWidth={15}
            />
            <Button
              variant="secondary"
              className="text-[8px]  flex whitespace-nowrap px-[8px] gap-x-[1px]  py-[4px]  text-Accent1 bg-Accent6 border-0"
              type="button"
              iconHeight={15}
              iconWidth={15}
              title="Share"
              icon={sendIcon}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BigDiscussionCard
