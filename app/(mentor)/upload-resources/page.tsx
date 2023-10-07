'use client'

import React, { ReactNode, useState } from 'react'
import Image from 'next/image'

import SidebarMentor from '@/components/sections/SideBars/SidebarMentor'
import { NavbarMentee } from '@/components/sections/nav-bars/NavbarMentee'
import { CaretIcon } from '@/public/SVGs'

export default function UploadResourcesPage() {
  const [courseDescription, setCourseDescription] = useState('')
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-y-4">
      <div className="row-start-1 row-end-3 col-start-1 col-end-2 h-full">
        {/* TODO change sidebarmentor to position sticky */}
        <SidebarMentor />
      </div>
      <NavbarMentee path={'Resources'} />
      <form className="row-start-2 row-end-3 col-start-2 col-end-3 w-[min(550px,_100%)] mx-auto sticky p-4 top-0">
        <h1 className="capitalize font-Inter font-medium text-2xl mb-8">
          upload resources
        </h1>
        <Input title="course title" htmlFor="course-title">
          <input
            type="text"
            name="course-title"
            id="course-title"
            placeholder="input course title"
            className="border-none outline-none w-full placeholder:text-Neutra20 placeholder:capitalize placeholder:font-normal"
          />
        </Input>
        <Input htmlFor="course-description" title="course description">
          <textarea
            name="course-description"
            id="course-description"
            placeholder="Input course description"
            value={courseDescription}
            onChange={e => {
              setCourseDescription(e.target.value)
            }}
            maxLength={200}
            className="border-none outline-none w-full placeholder:text-Neutra20 resize-none placeholder:font-normal h-[80px]"
          />
          <p className="absolute inset-[100%_0_auto_auto] text-Neutra40 w-max font-Hanken">
            {courseDescription.length}/200
          </p>
        </Input>
        <Input title="Category" htmlFor="category">
          <input
            type="text"
            id="category"
            name="category"
            placeholder="select category"
            className="border-none outline-none w-full placeholder:text-Neutra20 placeholder:capitalize placeholder:font-normal"
          />
          <CaretIcon className=" cursor-pointer" />
        </Input>
        <Input title="Course Type" htmlFor="course-type">
          <input
            type="text"
            id="course-type"
            name="course-type"
            placeholder="select course type"
            className="border-none outline-none w-full placeholder:text-Neutra20 placeholder:capitalize placeholder:font-normal"
          />
          <CaretIcon className="cursor-pointer" />
        </Input>
        <div className="mb-4">
          <p className="capitalize text-Neutral60 font-Inter font-medium mb-2 text-lg">
            upload file
          </p>
          <div className="border-[#9C9CA7] bg-[#F9F9F9] border-dashed border-[1px] rounded-[6px] px-4 py-7 text-center">
            <Image
              width={30}
              height={30}
              className=" w-11 mx-auto"
              src="/assets/images/mentor-upload-resource/folders.png"
              alt="folders-icon"
            />
            <div className="text-[#2F3033] font-semibold max-w-[163px] mx-auto mt-3 mb-2">
              Drop your files here or{' '}
              <label
                htmlFor="upload-file"
                className="text-Accent1 cursor-pointer"
              >
                click here
              </label>{' '}
              to upload
              <input
                type="file"
                id="upload-file"
                name="upload-file"
                className="hidden"
              />
            </div>
            <p className="text-[#9C9CA7]">
              Accepted formats (mp4, xls, pdf, csv, ppt). Maximum of 15MB
            </p>
          </div>
        </div>
        <Input title="price" htmlFor="price">
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Input the price"
            className="border-none outline-none w-full placeholder:text-Neutra20 placeholder:font-normal"
          />
        </Input>
        <button className="font-Inter mb-4 font-medium capitalize cursor-pointer bg-NeutalBase py-3 px-5 w-full rounded-[8px] border-none outline-none text-white">
          upload resource
        </button>
      </form>
    </div>
  )
}

const Input = function ({
  title,
  htmlFor,
  children,
}: {
  title: string
  htmlFor: string
  children: ReactNode
}) {
  return (
    <div className="mb-6 last:mb-0 relative">
      <p className="capitalize text-Neutral60 font-Inter font-medium mb-2 text-lg">
        {title}
      </p>
      <label
        className="flex items-center gap-4 border-Neutra10 border-[1px] rounded-md px-4 py-4"
        htmlFor={htmlFor}
      >
        {children}
      </label>
    </div>
  )
}
