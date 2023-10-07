import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";
import { membersCardAvatar } from "@/public";
type Props = {
	title: string;
	members: number | string;
	desc: string;
};

const DiscussionCards: React.FC<Props> = ({ title, members, desc }) => {
	return (
		<div className="discussioncard lg:pt-4 lg:px-[19px] lg:pb-[30px] px-2 py-4 border border-Neutra10 lg:rounded-[8px] rounded-[6.2px] justify-center items-center flex flex-col flex-shrink-0 gap-2 xl:w-[268px]  w-[20vw]  ">
			<div className="text flex flex-col xl:gap-[14px] gap-2 font-Hanken xl:mb-[45px] text-left">
				<p className=" text-NeutalBase font-semibold xl:text-[24px] text-[14px] leading-[28.8px]  ">
					{title}
				</p>

				<div className=" text-Accent1 font-medium xl:text-[16px] text-[10px] leading-[19.2px]  flex xl:gap-2 gap-[4.9px] items-center relative">
					<Image
						alt="members"
						src={membersCardAvatar}
						width={56}
						height={24}
						className="block xl:w-[56px] xl:h-[24px] w-[26px] h-[12px]"
					/>{" "}
					<span className="xl:underline"> {`${members} Members`}</span>
				</div>

				<p className=" text-Neutra50 font-normal xl:text-[18px] xl:leading-[21.6px] text-[10px] leading-[14.4px] ">
					{desc}
				</p>
			</div>
			{/* change to custoom  */}
			{/* <button className=" xl:py-5 xl:px-10 xl:text-[12px] font-Hanken font-semibold border border-black mx-auto min-h-[35px]">
        Join Discussion
      
      </button> */}

			<Button
				variant="secondary"
				className="text-[10px]  lg:px-10 lg:py-5  px-6 py-5 "
				type="button"
				title="Join Classroom"
			/>
		</div>
	);
};

export default DiscussionCards;
