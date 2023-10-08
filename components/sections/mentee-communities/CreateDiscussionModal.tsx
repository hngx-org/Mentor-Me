/* eslint-disable prettier/prettier */

import Button from "@/components/ui/Button"
import { CloseIcon } from "@/public/SVGs"
import UploadIcon from "../../../public/assets/Icons/mentee-communities/UploadImageIcon.svg"
import React from "react"
import Link from "next/link"

const CreateDiscussionModal = () => {
  return (
    <div className="modalOverLay flex fixed lg:w-[calc(100vw-274px)] w-[100vw] h-[100vh] md:pt-20 lg:pt-0  lg:items-center p-[15px] justify-center z-[100]">
      <div className="createDiscussionModal md:w-[560px] w-[100%] h-fit bg-white md:pt-10  md:px-10 md:pb-[35px]  gap-y-6 rounded-[10px] border-Neutra10 md:border">
        <div className="title flex justify-between items-center mb-10 w-full ">
          <h1 className="font-medium text-[24px] leading-[28.8px]  w-fit font-Inter text-NeutalBase pl-[90px] md:pl-[0]">
            Start discussion
          </h1>
          <Link href="/mentee-communities/forums">
            <CloseIcon />
          </Link>
        </div>

        <form className=" flex flex-col gap-y-[35px]">
          <div className="topic flex flex-col gap-y-1">
            <label
              htmlFor="topic"
              className="topicLabel font-Hanken font-semibold text-[16px] leading-[19.2px] "
            >
              Topic
            </label>
            <div className="topicInput  border border-[#CCCCCC] md:py-2 md:px-3 p-[15px] rounded-[6px] ">
              {" "}
              <input
                type="text"
                className=" text-[14px] font-normal leading-[20.3px] text-Neutra20 w-full font-Inter outline-0 "
                placeholder="Enter topic"
              />
            </div>
          </div>
          <div className="note flex flex-col gap-y-1">
            <label
              htmlFor="note"
              className="noteLabel font-Hanken font-semibold text-[16px] leading-[19.2px] "
            >
              Note
            </label>
            <div className="noteInput  border border-[#CCCCCC] p-[15px] md:py-2 md:px-3 rounded-[6px] ">
              {" "}
              <textarea
                className=" text-[14px] font-normal leading-[20.3px] text-Neutra20 w-full font-Inter lg:max-h-[128px] lg:h-[128px] outline-0 min-h-[10rem] "
                placeholder="Write a note"
              />
            </div>
          </div>

          <div className="buttons flex w-full justify-between">
            <Button
              variant="secondary"
              title="Upload Image"
              icon={UploadIcon}
              className="whitespace-nowrap text-[16px] text-Accent1 border-dashed border-Accent1 px-[30px] py-[15px] xl:max-w-[200px]  "
            />
            <Link href="/mentee-communities/forums">
              <Button
                variant="primary"
                type="submit"
                title="Post"
                className="whitespace-nowrap text-[16px]  px-[40px] py-[20px] xl:max-w-fit "
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateDiscussionModal
