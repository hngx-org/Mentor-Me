import Star from "@/public/assets/filled_star.svg";
import Star2 from "@/public/assets/empty_star.svg";
import Notify from "@/public/assets/ex.svg";
import Arrow from "@/public/assets/arrow_down.svg";
import Profile from "@/public/assets/dylan.png";
import Image from "next/image";
import { courseContents, courseTitles } from "../constants";

const Resource = () => {
  return (
    <div>
      <div className="w-full h-[304px] flex flex-col justify-center items-center gap-[17px] px-3  bg-Neutra50">
        <h1 className="font-Inter text-[32px] font-medium text-center text-white bg-Neutra50">
          UX Principles for Designers
        </h1>
        <p className="w-full max-w-[445px] font-Hanken text-white text-center">
          The secrets to creating great user experiences for your products, and
          helping your organization satisfy users.
        </p>
        <div className="flex font-Hanken text-xs text-white">
          <Image src={Star} alt="rate" />
          <Image src={Star} alt="rate" />
          <Image src={Star} alt="rate" />
          <Image src={Star} alt="rate" />
          <Image src={Star2} alt="rate" />
          <span className="mx-1">4.5 | </span>
          <span>20 reviews</span>
        </div>
        <p className="font-Hanken text-xs text-white">
          Created by <span className="text-Accent2">Dylan Matthias</span>{" "}
        </p>
        <div className="flex gap-2">
          <Image src={Notify} alt="note" />
          <p className="font-Hanken text-xs text-white ">
            {" "}
            Last updated on 9/2023
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row p-3 sm:p-[30px] gap-4 md:gap-9">
        <div className="w-full lg:w-[55%]">
          <div className="w-full flex justify-between items-center mb-[19px]">
            <h1 className="text-NeutalBase font-Inter text-2xl font-medium">
              Course Content
            </h1>
            <p className="text-Neutra40 font-Hanken">20 Lessons (1h 20m)</p>
          </div>
          <div className="py-[22px] px-[18px] rounded-lg shadow-md border border-Neutra10">
            {courseTitles.map((course) => (
              <p
                key={course.id}
                className="flex gap-2 items-center font-Hanken text-[#333] mb-6"
              >
                <span>{<Image src={course.img} alt="play" />}</span>{" "}
                {course.title}
              </p>
            ))}
            <button className="text-Accent1 font-Inter font-medium text-sm flex gap-2 items-center">
              Show All Lessons{" "}
              <span>
                <Image src={Arrow} alt="arrow" />
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-[18px] mt-8">
            <h1 className="text-NeutalBase font-Inter text-2xl font-medium">
              Instructor
            </h1>
            <div className="flex gap-2 items-center">
              <Image src={Profile} alt="profile" />
              <div>
                <h1 className="text-NeutalBase font-Hanken text-sm">
                  Dylan Matthias
                </h1>
                <p className="text-Neutra40 font-Hanken text-xs">
                  UX Researcher at Amazon
                </p>
              </div>
            </div>
            <p className="text-Neutra40 font-Hanken leading-[120%]">
              Dylan is a renowned researcher with over 20 years experience in
              designing customer centric products that align with business
              objectives. She is an award-winning visual designer with extensive
              experience in brand, digital and UX design. She enjoys breaking
              down complex ideas through visual storytelling. As a senior
              designer at Microsoft, Deb collaborates with product leaders to
              create engaging narratives that communicate value and business
              impact.{" "}
            </p>
            <button className="w-max font-Inter text-sm text-Accent1 ">
              View Profile
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[45%] flex flex-col">
          <video src="" controls></video>
          <div className="w-full p-3 sm:p-6">
            <div className="w-full flex justify-between items-center mb-[34px]">
              <p className="font-Hanken text-[32px] text-NeutalBase font-semibold">
                $10
              </p>
              <button className="font-Inter text-sm font-medium text-[#A12CCF]">
                Share Course
              </button>
            </div>
            <button className="font-Hanken w-full text-white rounded-lg bg-NeutalBase h-12 mb-4">
              Buy Now
            </button>
            <button className="font-Hanken w-full text-NeutralBase rounded-lg bg-white h-12 mb-4 border border-[#121212]">
              Add to Cart
            </button>
            <h1 className="font-Inter text-lg font-medium">
              This course includes:
            </h1>
            <ul className="ml-6 list-disc">
              {courseContents.map((content) => (
                <li className="font-Hanken text-Neutra50" key={content.id}>
                  {content.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
