'use client'

import React, { useState } from 'react';
import Image from "next/image";
import Arrow from '../../public/assets/arrow-right.png'
import Image1 from '../../public/assets/Image.png'
import Left_arrow from '../../public/assets/arrow-circle-left.png'
import right_arrow from '../../public/assets/arrow-circle-left (1).png'

export default function ReviewScreen() {

    interface IReview {
        id: string,
        date: string,
        comment: string,
        quality1: string,
        quality2: string,
        quality3: string,
        avatar?: string,
        name: string,
        track: string,
        role: string,
    }

    const data: IReview[] = [
        {
            id: '1',
            date: 'August 31, 2023',
            comment: "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
            quality1: "Technically competent",
            quality2: "Amazing Problem Solver",
            quality3: "Very motivational",
            avatar: "../../public/assets/Image.png",
            name: "Salma Paralluelo",
            track: "Product Designer",
            role: "Mentee",
        },
        {
            id: '2',
            date: 'August 31, 2023',
            comment: "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
            quality1: "Technically competent",
            quality2: "Amazing Problem Solver",
            quality3: "Very motivational",
            avatar: "../../public/assets/Image.png",
            name: "Salma Paralluelo",
            track: "Product Designer",
            role: "Mentee",
        },
        {
            id: '3',
            date: 'August 31, 2023',
            comment: "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
            quality1: "Technically competent",
            quality2: "Amazing Problem Solver",
            quality3: "Very motivational",
            avatar: "../../public/assets/Image.png",
            name: "Salma Paralluelo",
            track: "Product Designer",
            role: "Mentee",
        },
        {
            id: '4',
            date: 'August 31, 2023',
            comment: "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
            quality1: "Technically competent",
            quality2: "Amazing Problem Solver",
            quality3: "Very motivational",
            avatar: "../../public/assets/Image.png",
            name: "Salma Paralluelo",
            track: "Product Designer",
            role: "Mentee",
        },
        {
            id: '5',
            date: 'August 31, 2023',
            comment: "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
            quality1: "Technically competent",
            quality2: "Amazing Problem Solver",
            quality3: "Very motivational",
            avatar: "../../public/assets/Image.png",
            name: "Salma Paralluelo",
            track: "Product Designer",
            role: "Mentee",
        },
    ]
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
    <div className="bg-white-500 p-2 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col gap-y-[35px]">
        <div className="inline-flex flex-col items-start gap-y-[35px]">
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
              <p className="w-[190px] h-[29px] text-#121212 font-Hanken text-[24px] font-semibold  leading-[120%]">People often say</p>
               <div className="flex w-[711px] h-[40px] items-start gap-x-[16px]">
                 <button className="flex w-[98px] h-[40px] p-[2.5px] justify-center items-center rounded-[8px] border border-Neutra20 bg-black text-white">
                   All
                 </button>
                 <button className="flex w-[164px] h-[40px] p-[2.5px] font-semibold justify-center items-center rounded-[8px] border border-Neutra20 text-black">
                   Analytical
                 </button>
                 <button className="flex w-[164px] h-[40px] p-[2.5px] font-semibold justify-center items-center rounded-[8px] border border-Neutra20 text-black">
                   Positive Attitude
                 </button>
                 <button className="flex w-[164px] h-[40px] p-[2.5px] font-semibold justify-center items-center rounded-[8px] border border-Neutra20 text-black">
                   Constructive
                 </button>
                 <button className="flex w-[57px] h-[40px] p-[2.5px] justify-center items-center rounded-[8px] border border-Neutra20 text-black">
                   <Image src={Arrow} alt='arrow-right' />
                 </button>
              </div>
            </div>
          </div>
            <div className="inline-flex flex-col items-start gap-y-[20px]">
              <p className="text-#121212 font-Hanken text-[24px] font-semibold leading-[120%]">
                Real experience with mentor
              </p>
              <div className="flex flex-wrap items-start gap-[20px] w-full" >

              {data.map((item) => (
      
                <div key={item.id} className="flex p-4 md:p-6 flex-col justify-center items-start w-[502px] h-[353px]  gap-8 self-stretch rounded-[8px] border border-Neutra20 bg-white">
                  <div className="flex flex-col w-[450px] h-[151px] items-start gap-y-4">
                    <p className="text-Neutra40 w-[117px] font-Inter text-[14px] font-medium leading-[145%]">
                        {item.date}
                    </p>
                    <p className="text-Neutra40 w-[450px] h-[95px] font-Hanken text-16 font-normal leading-[120%]">
                        {item.comment}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-start gap-y-[16px] gap-x-[24px]">
                    <button className="flex w-[210px] h-[40px] font-bold p-[3.625px] justify-center items-center gap-3 flex-shrink-0 rounded-[8px] border border-Neutra20">
                        {item.quality1}
                    </button>
                    <button className="flex w-[210px] h-[40px] font-bold p-[3.625px] justify-center items-center gap-3 flex-shrink-0 rounded-[8px] border border-Neutra20">
                    {item.quality2}
                    </button>
                    <button className="flex w-[210px] h-[40px] font-bold p-[3.625px] justify-center items-center gap-3 flex-shrink-0 rounded-[8px] border border-Neutra20">
                    {item.quality3}
                    </button>
                  </div>
                  <div className="flex w-[450px] h-[42px] items-start gap-x-[233px]">
                    <div className="flex flex-row justify-center w-[171px] h-[42px] items-center gap-x-[8px]">
                       <Image src={Image1} width={300} height={200} alt='avatar' />
                        <div className="flex flex-col items-center">
                          <p className="text-Neutral60 w-[123px] h-[20px] font-Inter text-[14px] font-semibold leading-[145%]">{item.name}</p>
                          <p className="text-Accent1 w-[123px] h-[20px] font-Hanken text-[14px] font-normal leading-[145%]">{item.track}</p>
                        </div>
                    </div>
                    <p className="w-[54px] h-[20px] text-Neutral60 justify-center font-Inter text-[14px] font-semibold leading-[145%]">{item.role}</p>
                  </div>
                </div>
                  ))}
            </div>
           
        </div>
       
      </div>
      <div className="flex justify-center items-center mt-4 ">
          <div className='w-[673px] flex justify-center items-center  rounded-[50px] border border-Neutra20'>
          <button
             onClick={() => handlePageChange(currentPage - 1)}
             disabled={currentPage === 1}
             className={`flex flex-row justify-center items-center gap-x-[5px] py-2 px-4 rounded-md ${
            currentPage === 1 ? 'bg-white text-gray-500' : 'bg-white text-black'
              }`}
           >
             <Image  className={`rounded-[50%] ${
            currentPage === 1 ? 'bg-gray-500 text-gray-500' : 'bg-black text-white'
              }`} src={Left_arrow} width={50} height={50} alt='avatar' /> <div>Prev</div>
          </button>
              <span className="text-lg font-semibold">
                Page {currentPage} of {totalPages}
              </span>
           <button
             onClick={() => handlePageChange(currentPage + 1)}
             disabled={currentPage === totalPages}
             className={`flex flex-row justify-center items-center gap-x-[5px] py-2 px-4 rounded-md  ${
               currentPage === totalPages ? 'bg-white text-gray-500' : 'bg-white text-black'
               }`}
             >
                <Image  className={`rounded-[50%] ${
            currentPage === 1 ? 'bg-white text-black' : 'bg-black text-black'
              }`} src={right_arrow} width={50} height={50} alt='avatar' />
              <div>Next</div>
            </button>
            </div>
       </div>
    </div>
    </>
    )
}