/* eslint-disable prettier/prettier */
import React from "react"
import MentorCard from "./MentorCard"

const MentorGrid = () => {
  return (
    <div className="mentorGrid lg:mt-[64px] md:mt[40px] mt-[23px] mx-[6vw]  border border-black text-NeutalBase font-Inter overflow-hidden">
      <div className="title  lg:flex justify-between border-b border-Neutra10 pb-[14.5px] pt-[2.5]  mb-10 w-full hidden  ">
        <h2 className="  font-medium text-[24px] leading-[28.8px]  w-fit ">
          Free Mentorship Sessions
        </h2>
        <div className="seeMore underline text-Accent1 lg:font-medium lg:text-[21px] lg:leading-[25.2px] ">
          View more
        </div>
      </div>

      <h2 className=" title-small  w-fit lg:hidden flex font-semibold   text-[16px] md:text-[20px] leading-[20px] pb-[15px]   ">
        Free Mentorship Sessions
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:mx-[.75vw] md:mx-[1.3vw] mx-[3.5vw] ">
        <MentorCard />
      </div>
    </div>
  )
}

export default MentorGrid
