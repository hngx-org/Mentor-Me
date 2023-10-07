"use client";

import React, { useState } from "react";
import Image from "next/image";
import Arrow from "../../../public/assets/Icons/arrow-right.svg";
import Left_arrow from "../../../public/assets/images/mentee-review-screen/arrow-circle-left.png";
import right_arrow from "../../../public/assets/images/mentee-review-screen/arrow-circle-left (1).png";
import { DashboardMenteeProfileImg } from "@/public";
import Star from "../../../public/assets/Icons/Star.png";
import Star2 from "../../../public/assets/Icons/Star (1).png";
import Facebook from "../../../public/assets/Icons/facebook.svg";
import Instagram from "../../../public/assets/Icons/instagram.svg";
import Heart from "../../../public/assets/Icons/heart.svg";
import Export from "../../../public/assets/Icons/export.svg";
import Button from "@/components/ui/Button";
import { DashboardMenteeProfileVerifiedmark } from "@/public";
import { DashboardCoverBg } from "@/public";
import { ItemComponent } from "@/components/reviews/review";

export default function ReviewsPage() {
  interface IReview {
    id: string;
    date: string;
    comment: string;
    quality1: string;
    quality2: string;
    quality3: string;
    avatar?: string;
    name: string;
    track: string;
    role: string;
  }

  const data: IReview[] = [
    {
      id: "1",
      date: "August 31, 2023",
      comment:
        "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
      quality1: "Technically competent",
      quality2: "Amazing Problem Solver",
      quality3: "Very motivational",
      avatar: "../../public/assets/Image.png",
      name: "Salma Paralluelo",
      track: "Product Designer",
      role: "Mentee",
    },
    {
      id: "2",
      date: "August 31, 2023",
      comment:
        "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
      quality1: "Technically competent",
      quality2: "Amazing Problem Solver",
      quality3: "Very motivational",
      avatar: "../../public/assets/Image.png",
      name: "Salma Paralluelo",
      track: "Product Designer",
      role: "Mentee",
    },
    {
      id: "3",
      date: "August 31, 2023",
      comment:
        "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
      quality1: "Technically competent",
      quality2: "Amazing Problem Solver",
      quality3: "Very motivational",
      avatar: "../../public/assets/Image.png",
      name: "Salma Paralluelo",
      track: "Product Designer",
      role: "Mentee",
    },
    {
      id: "4",
      date: "August 31, 2023",
      comment:
        "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
      quality1: "Technically competent",
      quality2: "Amazing Problem Solver",
      quality3: "Very motivational",
      avatar: "../../public/assets/Image.png",
      name: "Salma Paralluelo",
      track: "Product Designer",
      role: "Mentee",
    },
    {
      id: "5",
      date: "August 31, 2023",
      comment:
        "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
      quality1: "Technically competent",
      quality2: "Amazing Problem Solver",
      quality3: "Very motivational",
      avatar: "../../public/assets/Image.png",
      name: "Salma Paralluelo",
      track: "Product Designer",
      role: "Mentee",
    },
  ];
  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end index for the items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = data.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="bg-white-500 px-2 sm:px-12 md:px-8 lg:px-10 xl:pl-12 flex flex-col gap-y-[35px] md:ml-[0] sm:mx-[-30px] mx-[0] border border-red-500 overflow-hidden">
        <Image className="w-full" src={DashboardCoverBg} alt="cover-img" />
        <div className="inline-flex flex-col items-start gap-y-[35px]">
          <div className="inline-flex justify-center h-[200px] w-full gap-x-4 relative">
            <Image
              src={DashboardMenteeProfileImg}
              width={200}
              height={200}
              alt="mentee-avatar"
            />
            <div className="absolute bottom-[8px] bg-blue-500 sm:bg-green-500 md:bg-yellow-500 lg:bg-orange-500 xl:bg-red-500 left-[110px] sm:left-[100px]">
              <Image
                src={DashboardMenteeProfileVerifiedmark}
                width={40}
                height={40}
                alt="verified-icon"
              />
            </div>
            <div className="inline-flex w-full h-[117px] items-center gap-x-[29px] border border-blue-500 my-[50px]">
              <div className="text-#121212 inline-flex w-full gap-x-[18px]">
                <div className="flex flex-col items-start gap-y-[8px]">
                  <p className="text-Neutral60 font-Hanken text-[27px] font-semibold leading-[120%]">
                    Shade Mayowa
                  </p>
                  <p className="text-Neutra40 font-Hanken text-[12px] font-normal leading-[120%]">
                    CEO, Webmasters Inc
                  </p>
                  <div className="flex text-start w-[216px] h-[19px] gap-x-[5px]">
                    <div className="inline-flex justify-center gap-x-[5px]">
                      <span>
                        {" "}
                        <Image
                          src={Star}
                          width={15}
                          height={15}
                          alt="star-yellow"
                        />
                      </span>
                      <span>
                        {" "}
                        <Image
                          src={Star}
                          width={15}
                          height={15}
                          alt="star-yellow"
                        />
                      </span>
                      <span>
                        {" "}
                        <Image
                          src={Star}
                          width={15}
                          height={15}
                          alt="star-yellow"
                        />
                      </span>
                      <span>
                        {" "}
                        <Image
                          src={Star}
                          width={15}
                          height={15}
                          alt="star-yellow"
                        />
                      </span>
                      <span>
                        {" "}
                        <Image
                          src={Star2}
                          width={15}
                          height={15}
                          alt="star-yellow"
                        />
                      </span>
                    </div>
                    <div className="inline-flex justify-center gap-x-[5px]">
                      <span className="text-black font-Hanken text-[16px] font-normal leading-[120%]">
                        4.5
                      </span>
                      <span className="text-black font-Hanken text-[16px] font-normal leading-[120%]">
                        |
                      </span>
                      <span className="text-black font-Hanken text-[16px] font-normal leading-[120%]">
                        20 reviews
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-x-[19px]">
                    <Image
                      src={Facebook}
                      width={24}
                      height={24}
                      alt="star-yellow"
                    />
                    <Image
                      src={Instagram}
                      width={24}
                      height={24}
                      alt="star-yellow"
                    />
                  </div>
                </div>
              </div>
              <div className="inline-flex items-end gap-x-[31px] border border-red">
                <Image src={Heart} width={24} height={24} alt="star-yellow" />
                <Image src={Export} width={24} height={24} alt="star-yellow" />
              </div>
            </div>
          </div>
          <div className="inline-flex w-[188px] items-center gap-x-[29px]">
            <p className="text-Neutra30 font-Inter text-18 font-normal leading-[120%]">
              Overview
            </p>
            <div className="flex  justify-center w-[66px] h-[22px] items-start gap-x-[4px]">
              <p className="text-black font-Inter text-18 font-semibold leading-[120%]">
                Reviews
              </p>
              <span className="flex w-[20px] text-white h-[21px] p-[5px] flex-col justify-center items-center gap-[8px] rounded-full bg-Accent1">
                6
              </span>
            </div>
          </div>
          <div className="inline-flex flex-col w-[714px] h-[237px] items-start gap-y-[40px]">
            <div className="flex flex-start w-[714px] h-[36px] gap-x-[52px] ">
              <div className="flex flex-col justify-center items-start gap-y-[17px]">
                <div className="flex flex-row w-[327px] items-center gap-x-[233px]">
                  <p className="w-[67px] h-[14px] text-#121212 font-Hanken text-[12px] font-normal  leading-[120%]">
                    Motivational
                  </p>
                  <p className="w-[67px] h-[14px] text-#121212 font-Hanken text-[12px] font-normal  leading-[120%]">
                    100%
                  </p>
                </div>
                <div className="w-[331px] h-[5px] rounded-[8] bg-Accent1"></div>
              </div>
              <div className="flex flex-col justify-center items-start gap-y-[17px]">
                <div className="flex flex-row w-[327px] items-center gap-x-[233px]">
                  <p className="w-[67px] h-[14px] text-#121212 font-Hanken text-[12px] font-normal  leading-[120%]">
                    Communication
                  </p>
                  <p className="w-[67px] h-[14px] text-#121212 font-Hanken text-[12px] font-normal  leading-[120%]">
                    100%
                  </p>
                </div>
                <div className="w-[331px] h-[5px] rounded-[8] bg-Accent1"></div>
              </div>
            </div>
            <div className="flex flex-start w-[714px] h-[36px] gap-x-[52px]">
              <div className="flex flex-col justify-center items-start gap-y-[17px]">
                <div className="flex flex-row w-[327px] items-center gap-x-[179px]">
                  <p className="w-[120px] h-[14px] text-#121212 font-Hanken text-[12px] font-normal  leading-[120%] ">
                    Subject Knowledge
                  </p>
                  <p className="w-[30px] h-[14px] text-#121212 font-Hanken text-[12px] font-normal  leading-[120%] ">
                    100%
                  </p>
                </div>
                <div className="w-[331px] h-[5px] rounded-[8] bg-Accent1"></div>
              </div>
              <div className="flex flex-col justify-center items-start gap-y-[17px]">
                <div className="flex flex-row w-[327px] items-center gap-x-[179px]">
                  <p className="w-[120px] h-[14px] text-#121212 font-Hanken text-[12px] font-normal  leading-[120%]">
                    Problem Solving
                  </p>
                  <p className="w-[30px] h-[14px] text-#121212 font-Hanken text-[12px] font-normal  leading-[120%]">
                    100%
                  </p>
                </div>
                <div className="w-[331px] h-[5px] rounded-[8] bg-Accent1"></div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-4">
              <p className="w-[190px] h-[29px] text-#121212 font-Hanken text-[24px] font-semibold  leading-[120%]">
                People often say
              </p>
              <div className="flex w-[711px] h-[40px] items-start gap-x-[16px]">
                <Button
                  className="p-3"
                  paddingLess={false}
                  iconPresent={false}
                  variant="primary"
                  type="button"
                >
                  <div>All</div>
                </Button>
                <Button
                  className="p-3"
                  paddingLess={false}
                  iconPresent={false}
                  variant="secondary"
                  type="button"
                >
                  <div>Analytical</div>
                </Button>
                <Button
                  className="p-3"
                  paddingLess={false}
                  iconPresent={false}
                  variant="secondary"
                  type="button"
                >
                  <div>Positive Attitude</div>
                </Button>
                <Button
                  className="p-3"
                  paddingLess={false}
                  iconPresent={false}
                  variant="secondary"
                  type="button"
                >
                  <div>Constructive</div>
                </Button>
                <button className="flex w-[57px] h-[40px] p-[2.5px] justify-center items-center rounded-[8px] border border-Neutra20 text-black">
                  <Image src={Arrow} alt="arrow-right" />
                </button>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-y-[20px]">
            <p className="text-#121212 font-Hanken text-[24px] font-semibold leading-[120%]">
              Real experience with mentor
            </p>
            <div className="flex flex-wrap items-start gap-[20px] w-full">
              {data.map((item) => (
                <ItemComponent item={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 ">
          <div className="w-[673px] flex justify-center items-center  rounded-[50px] border border-Neutra20">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex flex-row justify-center items-center gap-x-[5px] py-2 px-4 rounded-md ${
                currentPage === 1
                  ? "bg-white text-gray-500"
                  : "bg-white text-black"
              }`}
            >
              <Image
                className={`rounded-[50%] ${
                  currentPage === 1
                    ? "bg-gray-500 text-gray-500"
                    : "bg-black text-white"
                }`}
                src={Left_arrow}
                width={50}
                height={50}
                alt="avatar"
              />{" "}
              <div>Prev</div>
            </button>
            <span className="text-lg font-semibold">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex flex-row justify-center items-center gap-x-[5px] py-2 px-4 rounded-md  ${
                currentPage === totalPages
                  ? "bg-white text-gray-500"
                  : "bg-white text-black"
              }`}
            >
              <Image
                className={`rounded-[50%] ${
                  currentPage === 1
                    ? "bg-white text-black"
                    : "bg-black text-black"
                }`}
                src={right_arrow}
                width={50}
                height={50}
                alt="avatar"
              />
              <div>Next</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
