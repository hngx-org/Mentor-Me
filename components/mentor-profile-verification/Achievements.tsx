import React, { ReactElement } from "react";
import { ButtonControlProps } from "./types";

export default function Achievements({
  onNext,
  onPrev,
}: ButtonControlProps): ReactElement {
  return (
    <div className="pt-6 md:ml-10 ml-3 md:flex md:flex-col">
      <h1 className="font-Hanken font-[600] text-[24px] text-[Neutra40]">
        Achievements & Awards
      </h1>
      <p className="font-Hanken text-[14px] font-[400] text-Neutra40 pr-7">
        Please provide details about your professional achievements, awards, and
        milestones below.
      </p>

      <form className="mt-4">
        <div className="mb-4 lg:w-3/5 w-10/12">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="achievementName"
          >
            Achievement/Award Name
          </label>
          <input
            className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
            id="achievementName"
            type="text"
            placeholder="Achievement/Award Name"
          />
        </div>

        <div className="mb-4 lg:w-3/5 w-10/12 ">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="issuingOrganization"
          >
            Issuing Organization
          </label>
          <input
            className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
            id="issuingOrganization"
            type="text"
            placeholder="Goggle"
          />
        </div>

        <div className="mb-4 lg:w-3/5 w-10/12">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="yearReceived"
          >
            Year Received
          </label>
          <select
            name="yearReceived"
            id="yearReceived"
            className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>
        </div>
        <div className="mb-4 lg:w-3/5 w-10/12">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="acievementDesc"
          >
            Brief Description
          </label>
          <textarea
            name="acievementDesc"
            id="acievementDesc"
            cols={30}
            rows={6}
            className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Provide a brief description of the achievement or award, including its significance and impact on your career."
          ></textarea>
        </div>
      </form>
      <div className="lg:w-3/5 w-10/12 flex justify-between gap-4">
        <button
          onClick={onPrev}
          type="button"
          className="mt-5 border border-NeutalBase  py-2 px-12 rounded-md font-Inter font-500 text-[16px]"
        >
          Back
        </button>
        <button
          onClick={onNext}
          type="button"
          className="mt-5 bg-NeutalBase text-white py-2 px-12 rounded-md font-Inter font-500 text-[16px]"
        >
          Next
        </button>
      </div>
    </div>
  );
}
