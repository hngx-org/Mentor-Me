import React from "react";

import { mentorCardHero, mentorCardAvatar } from "@/public";

import Image from "next/image";
import { CalenderIcon, ClockIcon } from "@/public/SVGs";
import Button from "@/components/ui/Button";
const BigMentorShipCard = () => {
	return (
		<div className="bigMentorshipCard border border-Neutra10 lg:rounded-[8px] rounded-[5px]   hidden lg:flex  gap-4 lg:px-6">
			<div className="image  flex-shrink-0  lg:h-[336px] lg:w-[551px] aspect-[551/336] overflow-hidden">
				{" "}
				<Image
					alt="members"
					src={mentorCardHero}
					width={606}
					height={400}
					className="block  aspect-[298/183]  w-[110%] object-cover "
				/>
			</div>

			<div className="info px-[14px] gap-[10px] flex flex-col font-Hanken text-NeutalBase">
				<div className="topic font-bold text-[46px] leading-[56px]">
					Introduction to AI
				</div>
				<div className="w-fit flex gap-1 flex-col justify-center text-center">
					<div className="flex gap-1 items-center">
						<Image
							alt="members"
							src={mentorCardAvatar}
							width={37}
							height={37}
						/>
						<p className="font-semibold text-[24px] leading-[28.8px] ">
							Shade Mayowa
						</p>
					</div>
					<p className="text-Neutra30 font-normal text-[18px] leading-[21.6px]">
						Science and Technology
					</p>
				</div>
				<div className="time flex gap-[14px] text-2xl font-normal">
					<div className="w-fit flex gap-x-[6px] items-center">
						{" "}
						<CalenderIcon className=" w-[21px] aspect-square" />{" "}
						<span className="">28th Sept</span>{" "}
					</div>
					<div className="w-fit flex gap-x-[6px] items-center">
						{" "}
						<ClockIcon className=" w-[21px] aspect-square" />{" "}
						<span className="">12:30pm</span>{" "}
					</div>
				</div>

				<div className="desc font-normal text-2xl  ">
					Explore the fascinating world of AI with hands-on demos and
					discussions. Learn the basics from industry experts.
				</div>


        <Button
          variant="primary"
          className="text-[10px] px-10 py-5 "

          iconPresent={false}
          type="button"
        >
          Join Classroom
        </Button>

      </div>
    </div>
  )
}

};


export default BigMentorShipCard;
