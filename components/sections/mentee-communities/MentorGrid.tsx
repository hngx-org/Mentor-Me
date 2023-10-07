/* eslint-disable prettier/prettier */
import React from "react"
import MentorCard from "./MentorCard"

const MentorGrid = () => {
  return (
    <div className="mentorGrid lg:mt-[64px] md:mt[40px] mt-[23px] mx-[2vw]   text-NeutalBase font-Inter overflow-hidden">
      <div className="title  lg:flex justify-between border-b border-Neutra10 pb-[14.5px] pt-[2.5]  mb-10 w-full hidden  ">
        <h2 className="  font-medium text-[24px] leading-[28.8px]  w-fit ">
          Free Mentorship Sessions
        </h2>

        <div className="seeMore  text-Accent1 lg:font-medium lg:text-[16px] lg:leading-[25.2px] mr-6 cursor-pointer ">
          View more
        </div>
      </div>

      <h2 className=" title-small  w-fit lg:hidden flex font-semibold   text-[16px] md:text-[20px] leading-[20px] pb-[15px]   ">
        Free Mentorship Sessions
      </h2>

      <div className="lg:grid lg:grid-cols-4 hidden ">
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
      </div>
    </div>
  )
}

export default MentorGrid
