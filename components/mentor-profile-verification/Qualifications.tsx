import React, { ReactElement } from "react";
import { ButtonControlProps } from "./types";

export default function Qualifications({
  onNext,
  onPrev,
}: ButtonControlProps): ReactElement {
  return (
    <div className="pt-6 ml-24">
      <h1 className="font-Hanken font-[600] text-[24px] text-[Neutra40]">
        Qualifications
      </h1>
      <p className="font-Hanken text-[14px] font-[400] text-Neutra40 pr-7">
        Please provide details about your qualifications and expertise below.
        This information helps us verify your qualifications as a mentor on our
        platform.
      </p>

      <form className="mt-4">
        <div className="mb-4 w-3/5">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="qualification"
          >
            Qualification/Expertise
          </label>
          <select
            name="qualification"
            id="qualification"
            className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>Product Designer</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Fullstack Developer</option>
            <option>Mobile Developer</option>
            <option>Data Analyst</option>
          </select>
        </div>

        <div className="mb-4 w-3/5">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="yearsExperience"
          >
            Years of Experience
          </label>
          <select
            name="yearsExperience"
            id="yearsExperience"
            className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>Less than a year</option>
            <option>1+ year</option>
            <option>3 - 5 years</option>
          </select>
        </div>
        <div className="mb-4 w-3/5">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="qualificationDesc"
          >
            Brief Description
          </label>
          <textarea
            name="qualificationDesc"
            id="qualificationDesc"
            cols={30}
            rows={6}
            className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
            placeholder=" Please provide details about your qualifications and expertise below. This information helps us verify your qualifications as a mentor on our platform."
          ></textarea>
        </div>
      </form>
      <div className="w-3/5 flex justify-between gap-4">
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
