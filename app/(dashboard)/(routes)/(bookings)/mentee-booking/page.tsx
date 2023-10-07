import React from "react"
import { NavbarMentee } from "@/components/sections/nav-bars/NavbarMentee"
import { webInc, chickenREp, education, cert, achieve, achieve1, link } from "@/public"
import Image from "next/image"
import Header from "@/components/booking-session/Header"
import MentorProfileRight from "@/components/booking-session/Right"

export default function MenteeBooking() {
  interface IExpetise {
    id: string
    title: string
  }
  interface IExCert {
    id: string
    title: string
    company?: string
    cert?: string
	link?: string
    date: string
    photos: string
  }

  const expertise: IExpetise[] = [
    { id: "1", title: "UI Design" },
    { id: "2", title: "UX Research" },
    { id: "3", title: "WireFraming" },
    { id: "4", title: "Adobe XB" },
    { id: "5", title: "Sketch" },
    { id: "6", title: "11+" },
  ]
  const experience: IExCert[] = [
    {
      id: "1",
      title: "CEO",
      company: "Webmaster Inc.",
      date: "present",
      photos: webInc,
    },
    {
      id: "2",
      title: "UI/UX Design Intern",
      company: "Chicken Republic Limited",
      date: "July 2023 - Dec 2023",
      photos: chickenREp,
    },
  ]
  const certification: IExCert[] = [
    {
      id: "1",
      title: "NYSC, Bayelsa",
      cert: "Certification of National Service",
      date: "July 2021 - Dec 2021",
      photos: cert,
    },
    {
      id: "2",
      title: "Nigerian Institute of Management",
      cert: "Certification, of Chartered Manager",
      date: "July 2021 - Dec 2021",
      photos: cert,
    },
  ]
  const achievement: IExCert[] = [
    {
      id: "1",
      title: "1000 Mentorship Minutes",
	  link: "See credential",
      date: "July 2021 - Dec 2021",
      photos: achieve,
    },
    {
      id: "2",
      title: "500 Mentorship Minutes",
      link: "See credential",
      date: "July 2021 - Dec 2021",
      photos: achieve1,
    },
  ]

  return (
    <div className="w-full">
      <Header />
      <div className="flex flex-col gap-10 sm:flex-row px-2 sm:px-5">
        {" "}
        <div className="w-full sm:w-1/2 space-y-7">
          <p className="font-Inter font-medium text-base text-Neutra30 text-left sm:max-w-[425px]">
            I am a Product Designer of over 2 years of expertise managing and
            building apps that centers on usability and accessibility. My Work
            experience spans across industries from B2B, Fin-tech Industries
          </p>
          <div className="flex-grow border-t border-Neutra30"></div>
          <div className="flex gap-8">
            <p className="font-Inter font-medium text-right">Overview</p>
            <p className="font-Inter font-medium text-right">
              Reviews{" "}
              <span className="font-Hanken text-sm font-bold bg-Accent1 rounded-full text-white px-2 py-1">
                6
              </span>
            </p>
          </div>
          <p className="font-Hanken font-bold text-lg">Expertise</p>
          <ul className="flex flex-wrap gap-4 ">
            {expertise.map((expertise) => (
              <li
                key={expertise.id}
                className="border border-Neutra10 px-8 py-2 text-base font-Inter font-medium rounded-lg text-[#121212] "
              >
                {expertise.title}
              </li>
            ))}
          </ul>
          <p className="font-Hanken font-bold text-lg">Experience</p>

          {experience.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col sm:flex-row justify-between items-center"
            >
              <div className="flex gap-4">
                <Image src={exp.photos} alt="" className="text-left"/>
                <div>
                  <h2 className="font-Inter font-medium text-base">
                    {exp.title}
                  </h2>
                  <p className="font-Inter font-medium text-base text-Neutra40">
                    {exp.company}
                  </p>
                </div>
              </div>
              <p className="font-Hanken text-sm font-normal italic">
                {exp.date}
              </p>
            </div>
          ))}
          <div className="flex-grow border-t border-Neutra30"></div>
          <p className="font-Hanken font-bold text-lg">Education</p>

          <div className="flex gap-4 sm:gap-8">
            <Image src={education} alt="" />
            <div>
              <h2 className="font-Inter font-medium text-base">
                BSC Computer Science
              </h2>
              <p className="font-Inter font-medium text-base text-Neutra40">
                University of Lagos, 2013 - 2017
              </p>
            </div>
          </div>
          <div className="flex-grow border-t border-Neutra30"></div>
		  <p className="font-Hanken font-bold text-lg">Certification</p>
          {certification.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col sm:flex-row justify-between items-center"
            >
              <div className="flex gap-4 sm:gap-8">
                <Image src={cert.photos} alt="" />
                <div>
                  <h2 className="font-Inter font-medium text-base">
                    {cert.title}
                  </h2>
                  <p className="font-Inter font-medium text-base text-Neutra40">
                    {cert.cert}
                  </p>
                </div>
              </div>
              <p className="font-Hanken text-sm font-normal italic">
                {cert.date}
              </p>
            </div>
          ))}
          <div className="flex-grow border-t border-Neutra30"></div>
		  <p className="font-Hanken font-bold text-lg">Achievements</p>
          {achievement.map((achieve) => (
            <div
              key={achieve.id}
              className="flex flex-col sm:flex-row justify-between items-center"
            >
              <div className="flex gap-4 sm:gap-8">
                <Image src={achieve.photos} alt="" />
                <div>
                  <h2 className="font-Inter font-medium text-base">
                    {achieve.title}
                  </h2>
                  <a className="font-Inter font-medium text-base text-Neutra40 flex gap-1 hover:cursor-pointer">
                    {achieve.link} <span><Image src={link} alt=""/></span>
                  </a>
                </div>
              </div>
              <p className="font-Hanken text-sm font-normal italic">
                {achieve.date}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full sm:w-1/2 sm:border-l border-Neutra30 px-2 sm:pl-10 md:pl-16 space-y-7"><MentorProfileRight/></div>
      </div>
    </div>
  )
}
