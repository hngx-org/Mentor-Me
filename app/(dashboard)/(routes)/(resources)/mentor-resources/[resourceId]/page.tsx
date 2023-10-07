import Link from 'next/link'

import {
  CaretIcon,
  PlayIcon,
  PlayResourceIcon,
  StarIcon,
  UpdateIcon,
} from '@/public/SVGs'
import { nanoid } from 'nanoid'
import Image from 'next/image'

export default function Resource({
  params,
}: {
  params: { resourceId: string }
}) {
  return (
    <div>
      <section className="bg-Neutral60 px-4 py-11 text-white font-Inter text-center">
        <h1 className="text-3xl font-medium">UX Principles for Designers</h1>
        <p className="mt-5 mb-3 w-[min(446px,_100%)] mx-auto">
          The secrets to creating great user experiences for your products, and
          helping your organization satisfy users.
        </p>
        <div className="flex items-center justify-center gap-3">
          <p className="flex items-center gap-1">
            {Array(5).fill(<StarIcon key={nanoid()} />)} 4.5
          </p>{' '}
          <div className="w-[1px] h-4 bg-white"></div>
          {/*BUG Fix this later (using nanoid as key)*/}
          <p>20 reviews</p>
        </div>
        <p className="my-3">
          Created by{' '}
          <Link href="" className="text-Accent2">
            Dylan Matthias
          </Link>{' '}
        </p>
        <p className="flex items-center gap-2 justify-center">
          <UpdateIcon />
          Last updated on 9/2023
        </p>
      </section>
      <section className="p-4 md:gap-4 md:items-start md:justify-between md:grid md:grid-rows-[repeat(2,_auto)] md:grid-cols-[1fr_350px] lg:gap-6">
        <div className="grid grid-cols-[auto,_1fr,_,auto] grid-rows-[auto,_1fr] items-center gap-4 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2">
          <h2 className="text-NeutalBase font-medium text-2xl capitalize row-start-1 row-end-2 col-start-1 col-end-2">
            course content
          </h2>
          <p className="text-Neutra40 font-normal row-start-1 row-end-2 col-start-3 col-end-4">
            20 Lessons (1h 20m)
          </p>
          <div className="p-4 rounded-[8px] border-Neutra10 border-[1px] row-start-2 row-end-3 col-span-full">
            <CourseContent title="Introduction" />
            <CourseContent title="What is UI Design" />
            <CourseContent title="What is UI Design" />
            <CourseContent title="What is UI Design" />
            <div className="flex items-center gap-2 mt-4 cursor-pointer">
              <p className="capitalize text-Accent1 font-medium">
                show all lessons
              </p>
              <CaretIcon className="w-10" />
            </div>
          </div>
        </div>
        <div className="font-Hanken mt-4 md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-2">
          <h2 className="font-Inter text-NeutalBase font-medium text-2xl capitalize">
            instructor
          </h2>
          <div className="grid grid-rows-[repeat(2,_1fr)] grid-cols-[repeat(2,_max-content)] gap-x-2 mt-4 mb-3">
            <Image
              width={50}
              height={50}
              src="/assets/images/mentor-upload-resource/instructor.png"
              alt="Instructor"
              className="w-12 h-12 rounded-full row-span-full col-start-1 col-end-2"
            />
            <p className="text-NeutalBase row-start-1 row-end-2 col-start-2 col-end-3 w-max">
              Dylan Matthias
            </p>
            <p className="text-Neutra40 row-start-2 row-end-3 col-start-2 col-end-3 w-max">
              UX Researcher at Amazon
            </p>
          </div>
          <p className=" text-Neutra40">
            Dylan is a renowned researcher with over 20 years experience in
            designing customer centric products that align with business
            objectives. She is an award-winning visual designer with extensive
            experience in brand, digital and UX design. She enjoys breaking down
            complex ideas through visual storytelling. As a senior designer at
            Microsoft, Deb collaborates with product leaders to create engaging
            narratives that communicate value and business impact.{' '}
          </p>
          <Link href="" className="text-Accent1 font-medium mt-4">
            View Profile
          </Link>
        </div>
        <div className="w-[min(353px,_100%)] border-Neutra10 border-[1px] rounded-[6px] overflow-hidden mt-4 mx-auto md:row-span-full md:col-start-2 md:col-end-3 md:mt-2 md:mx-0">
          <div className="relative w-full">
            <Image
              width={495}
              height={233}
              className="w-full"
              src="/assets/images/mentor-upload-resource/course-video.png"
              alt="course-video"
            />
            <PlayResourceIcon className=" absolute inset-[auto_50%_50%_auto] z-10 translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="p-4 pt-0">
            <p className="w-max font-Hanken text-NeutalBase font-semibold text-3xl my-4">
              $10
            </p>
            <p className="w-max font-Inter text-NeutalBase font-medium text-lg">
              This course includes:
            </p>
            <ul className="w-max list-disc pl-6">
              <li className="w-max font-Henken font-normal list-disc">
                Accessible on mobile
              </li>
              <li className="w-max font-Henken font-normal list-disc">
                Closed Captions
              </li>
              <li className="w-max font-Henken font-normal list-disc">
                Private Slack Community
              </li>
              <li className="w-max font-Henken font-normal list-disc">
                Real time chat with instructor
              </li>
              <li className="w-max font-Henken font-normal list-disc">
                Flexible Learning
              </li>
              <li className="w-max font-Henken font-normal list-disc">
                Real time chat with instructor
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

const CourseContent = function ({ title }: { title: string }) {
  return (
    <p className="text-[#333333] flex gap-5 items-center text-lg leading-[2.5] font-medium cursor-pointer">
      <PlayIcon className=" w-6" />
      {title}
    </p>
  )
}
