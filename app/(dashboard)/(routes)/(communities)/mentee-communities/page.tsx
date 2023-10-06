import Slider from "@/components/sections/mentee-communities/Slider"
import Button from "@/components/ui/Button"
import React from "react"

export default function MenteeCommunities() {
  return (
    <div className="menteecommunities flex flex-col justify-center">
      <div className="join-discussion lg:mt-[54px] md:mt-[30px]  hidden md:flex flex-col justify-center items-center">
        <p className=" text-NeutalBase md:text-[30px] lg:text-[60px] lg:leading-[72px] md:leading-[40px] font-bold text-center font-Gladiora lg:px-[126px] md:px-[40px] lg:mb-[50px] md:mb-[26px] ">
          Join group discussions and connect with mentors in free classrooms
          with Mentor me
        </p>
        <div className="search h-[58px] max-w-[60%] w-[610px] border border-NeutalBase rounded-[8px] ">
          <input
            type="text"
            className=" border-black border "
            placeholder="Search community"
          />
          <Button
            className="searchButton"
            iconPresent={false}
            type="primary/defauly"
            variant=""
          >
            Search
          </Button>
        </div>
      </div>
      {/* <DiscussionCards
        title={"Memeber Math"}
        members={13}
        desc="Connect with industry-leading mentors in science and technology. Explore the cutting edge together."
      />{" "} */}
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

      {/* <MentorGrid /> */}
      <div className="footer h-40 w-full bg-transparent"></div>
    </div>
  )
}
