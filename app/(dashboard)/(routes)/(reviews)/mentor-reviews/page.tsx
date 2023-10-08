"use client";

import React, { useState } from "react";
import Image from "next/image";
import Left_arrow from "../../../../../public/assets/images/mentee-review-screen/arrow-circle-left.png";
import right_arrow from "../../../../../public/assets/images/mentee-review-screen/arrow-circle-left (1).png";
import {
  DashboardMenteeProfileImg,
  DashboardMenteeProfileVerifiedmark,
  MenteeDashboardProfileImg,
} from "@/public";
import {
  Facebook,
  Instagram,
  LoveIcon,
  ExportIcon,
  StarIcon,
  StarIcon1,
  RoundIcon,
  Left_Icon,
  Right_Icon,
  Arrow_RightIcon,
} from "@/public/SVGs";
import { DashboardCoverBg } from "@/public";
import { ItemComponent } from "@/components/reviews/review";
import {
  QualityProps,
  qualityArr,
  IReview,
  reviewsArr,
} from "@/constants/constants";
import Button from "@/components/ui/Button";

export default function MentorReviews() {
  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end index for the items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = reviewsArr.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(reviewsArr.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="bg-white-500 flex flex-col overflow-hidden">
        <Image className="w-full" src={DashboardCoverBg} alt="cover-img" />
        <div className=" flex-col items-start gap-y-[35px]">
          <div className="inline-flex justify-center  w-full gap-x-4 relative px-2 sm:px-12 md:px-8 lg:px-10 xl:pl-12">
            <Image
              src={DashboardMenteeProfileImg}
              className="mt-[-30px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] w-[150px] h-[170px]"
              content="cover"
              alt="mentee-avatar"
            />
            <div className="absolute bottom-[8px] left-[110px] sm:bottom-[15px] md:bottom-[20px] md:left-[200px] xl:bottom-[30px] sm:left-[200px]">
              <Image
                src={DashboardMenteeProfileVerifiedmark}
                width={40}
                height={40}
                alt="verified-icon"
              />
            </div>
            <div className="inline-flex w-full items-center gap-x-[10px] xl:gap-x-[10px] my-[50px]">
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
                        <StarIcon />
                      </span>
                      <span>
                        {" "}
                        <StarIcon />
                      </span>
                      <span>
                        {" "}
                        <StarIcon />
                      </span>
                      <span>
                        {" "}
                        <StarIcon />
                      </span>
                      <span>
                        {" "}
                        <StarIcon1 />
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
                    <Facebook />
                    <Instagram />
                  </div>
                </div>
              </div>
              <div className="inline-flex items-end gap-x-[31px]">
                <LoveIcon />
                <ExportIcon />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center p-[5px] xl:p-[50px] gap-y-[35px]">
            <div className="inline-flex w-[188px] items-center gap-x-[29px]">
              <p className="text-Neutra30 font-Inter text-18 font-normal leading-[120%]">
                Overview
              </p>
              <div className="flex  justify-center w-[96px] h-[25px] items-start border-b-[3px] border-Accent1 rounded-8 gap-x-[4px] b">
                <p className="text-black font-Inter text-18 font-semibold leading-[120%]">
                  Reviews
                </p>
                <span className="flex w-[20px] text-white h-[21px] p-[6px] flex-col justify-center items-center gap-[8px] rounded-full bg-Accent1">
                  6
                </span>
              </div>
            </div>
            <div className="inline-flex flex-col w-full items-start">
              <div className="flex flex-row flex-wrap max-w-[720px] gap-x-[2px] sm:gap-x-[12px] xl:gap-x-[52px] xl:gap-y-[40px] ">
                {qualityArr.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-center items-start gap-y-[20px]"
                  >
                    <div className="flex flex-row w-[327px] items-center gap-[53px] sm:gap-x-[110px] md:gap-x-[200px] xl:gap-x-[103px">
                      <p className=" h-[24px] text-#121212 font-Hanken text-[12px] font-normal  leading-[120%]">
                        {item.title}
                      </p>
                      <p className="w-[67px] h-[14px] text-#121212 font-Hanken text-[12px] font-normal  leading-[120%]">
                        {item.rating}
                      </p>
                    </div>
                    <div className=" w-full xl:w-[331px] sm:w-[260px] md:w-[131px] h-[5px] rounded-[8px] bg-Accent1"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-y-[20px]  my-[50px]">
              <div className="flex flex-col items-start gap-y-4">
                <p className="w-[190px] text-#121212 font-Hanken text-[24px] font-semibold  leading-[120%]">
                  People often say
                </p>
                <div className="flex flex-wrap max-w-[711px] items-start gap-x-[16px]">
                  <div className="flex w-[98px] bg-black p-[6.5px] justify-center items-center rounded-[8px] border border-Neutra20 text-white">
                    All
                  </div>
                  <div className="flex w-[164px] bg-white p-[6.5px] justify-center items-center rounded-[8px] border border-Neutra20 text-black">
                    Analytical
                  </div>
                  <div className="flex w-[164px] bg-white p-[6.5px] justify-center items-center rounded-[8px] border border-Neutra20 text-black">
                    Positive Attitude
                  </div>
                  <div className="flex w-[164px] bg-white p-[6.5px] justify-center items-center rounded-[8px] border border-Neutra20 text-black">
                    Constructive
                  </div>
                  <div className="flex w-[57px] p-[6.5px] justify-center items-center rounded-[8px] border border-Neutra20 text-black">
                    <Arrow_RightIcon />
                  </div>
                </div>
              </div>
              <p className="text-#121212 font-Hanken text-[24px] font-semibold leading-[120%]">
                Real experience with mentor
              </p>
              <div className="flex flex-wrap items-start gap-[20px] w-full">
                {reviewsArr.map((item) => (
                  <ItemComponent item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full items-center my-4 ">
          <div className="w-[673px] flex justify-center items-center  rounded-[50px] border border-Neutra20 gap-x-[50px]">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex flex-row justify-center items-center gap-x-[5px] py-2 px-4 rounded-md ${
                currentPage === 1
                  ? "bg-white text-gray-500"
                  : "bg-white text-black"
              }`}
            >
              <Left_Icon
                className={`rounded-[50%] ${
                  currentPage === 1
                    ? "bg-gray-500 text-gray-500"
                    : "bg-black text-white"
                }`}
              />{" "}
              <div>Prev</div>
            </button>
            <span className="text-lg font-semibold">
              <ul className="flex flex-row w-[250px] h-[30px] items-center gap-x-[15px]">
                {numbers.map((number, index) => (
                  <span
                    className={
                      number === 3
                        ? "flex w-[42px] text-white text-[30px] h-[32px] p-[5.5px] rounded-full bg-Accent1"
                        : " w-[64px] h-[20px] bg-white p-[2.5px] text-[20px] items-center font-normal font-Inter text-black leading-[120%]"
                    }
                    key={index}
                  >
                    {number}
                  </span>
                ))}
              </ul>
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
              <div>Next</div>

              <Right_Icon
                className={`rounded-[50%] ${
                  currentPage === 1
                    ? "bg-white text-black"
                    : "bg-black text-black"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
