/* eslint-disable prettier/prettier */
// eslint-disable prettier/prettier
import MentorGrid from "@/components/sections/mentee-communities/MentorGrid"
import Slider from "@/components/sections/mentee-communities/Slider"

import React from "react"

export default function MenteeCommunities() {
  return (
    <div className="menteecommunities flex flex-col justify-center">
      <div className="join-discussion lg:mt-[54px] md:mt-[30px]  hidden md:flex flex-col justify-center items-center">
        <p className=" text-NeutalBase  xl:text-[60px] xl:leading-[72px] lg:text-[45px] lg:leading-[55px] md:text-[30px] md:leading-[40px] font-bold text-center font-Gladiora lg:px-[2vw] md:px-[40px] lg:mb-[50px] md:mb-[26px] ">
          Join group discussions and connect with mentors in free classrooms
          with Mentor me
        </p>
      </div>
      <div className="search border border-[#CCCCCC] max-w-[40%] w-[360px] md:py-2 md:px-3 p-[16px] rounded-[6px] ml-[2vw] ">
        <input
          type="text"
          className=" text-[14px] font-normal leading-[20.3px] text-Neutra20 w-full font-Inter outline-0 "
          placeholder="Search for community"
        />
      </div>

      <Slider
        slideInfo={[
          "Item 1",
          "Item 2",
          "Item 3",
          "Item 4",
          "Item 5",
          "Item 6",
          "Item 7",
          "Item 8",
          "Item 9",
          "Item 10",
          "Item 11",
          "Item 12",
          "item 13",
        ]}
      />

      <MentorGrid />

      <div className="footer h-40 w-full bg-transparent"></div>
    </div>
  )
}
