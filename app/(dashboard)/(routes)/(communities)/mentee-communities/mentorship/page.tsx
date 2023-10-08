/* eslint-disable prettier/prettier */
import BigMentorShipCard from "@/components/sections/mentee-communities/BigMentorShipCard"
import MentorCard from "@/components/sections/mentee-communities/MentorCard"
import React from "react"

export default function FreeMentorship() {
  return (
    <div className="freeMentorship">
      <div className="search mt-6 mb-8 border ">search </div>

      <div className=" hidden lg:flex flex-col gap-y-8">
        <BigMentorShipCard />
        <BigMentorShipCard />
        <BigMentorShipCard />
        <BigMentorShipCard />
        <BigMentorShipCard />
        <BigMentorShipCard />
        <BigMentorShipCard />
        <BigMentorShipCard />
      </div>
      <h1 className="lg:hidden md:ml-7 ml-5 font-Inter font-medium text-[16px] leading-[22.4px] ">
        Free Mentorship Sessions
      </h1>
      <div className="grid lg:hidden  md:grid-cols-3 grid-cols-2 md:ml-7 ml-5 gap-y-5 md:gap-y-8">
        <MentorCard /> <MentorCard /> <MentorCard /> <MentorCard />{" "}
        <MentorCard /> <MentorCard />
      </div>
    </div>
  )
}
