import React, { ReactElement } from "react";
import { AddIcon, UploadIcon } from "@/public/SVGs";
import { ButtonControlProps } from "./types";

export default function Certificates({
  onNext,
}: ButtonControlProps): ReactElement {
  return (
    <div className="pt-6 md:ml-10 ml-3 md:flex md:flex-col">
      <h1 className="font-Hanken font-[600] text-[24px] text-[Neutra40]">
        Certifications & Diplomas
      </h1>
      <p className="font-Hanken text-[14px] font-[400] text-Neutra40 pr-7">
        Please submit your educational and certification details below to verify
        your qualifications as a mentor.
      </p>

      <form className="mt-4">
        <div className="mb-4 w-3/5  md:w-10/12">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="certificationName"
          >
            Certification/Diploma Name
          </label>
          <input
            className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
            id="certificationName"
            type="text"
            placeholder="Bachelor of Science in Engineering"
          />
        </div>

        <div className="mb-4 w-3/5  md:w-10/12">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="issuingInstitution"
          >
            Issuing Institution
          </label>
          <input
            className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
            id="issuingInstitution"
            type="text"
            placeholder="University of Lagos"
          />
        </div>

        <div className="mb-4 w-3/5  md:w-10/12">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="graduationYear"
          >
            Graduation Year
          </label>
          <select
            name="graduationYear"
            id="graduationYear"
            className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>
        </div>

        <div className="mb-4 w-3/5  md:w-10/12">
          <p className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2">
            Upload Certificate/Diploma
          </p>

          <div className="mt-1 p-3 rounded-md border border-Neutra10">
            <label
              htmlFor="gradYear"
              className="w-full flex justify-center items-center py-2 bg-NeutalBase text-white rounded-md cursor-pointer font-Hanken font-[400] text-[12px]"
            >
              <UploadIcon /> <span className="ml-2">Click to Upload</span>
            </label>
            <input
              type="file"
              className="hidden"
              name="gradYear"
              id="gradYear"
              accept=".pdf, .png, .jpeg, .jpg"
            />
            <p className="mt-2 font-Hanken text-[12px] font-[400] text-Neutra40">
              Important: All documents must be official and in English. If a
              document is not in English then please provide a notary authorized
              translation with an apostille.
            </p>
            <div className="flex justify-between mt-2 font-Hanken text-[12px] font-[400] text-Neutra40">
              <p className="">Accepted formats: pdf, png, jpeg</p>
              <p>Max 30MB</p>
            </div>
          </div>
        </div>

        <p className="flex font-Hanken text-[16px] font-[600] text-Accent1">
          <AddIcon /> Add More
        </p>
      </form>
      <button
        onClick={onNext}
        type="button"
        className=" md:w-10/12 mt-5 bg-NeutalBase text-white py-2 px-12 rounded-md font-Inter font-500 text-[16px]"
      >
        Next
      </button>
    </div>
  );
}
