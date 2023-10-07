import Button from "@/components/ui/Button";
import { AwardIcon, EditIcon } from "@/public/SVGs";
import React, { useState } from "react";

type Props = {
	desc: string;
	expertise: string;
	experience: string;
	workPlace: string;
};
export default function OverviewCard({
	desc,
	expertise,
	experience,
	workPlace,
}: Props) {
	const [showMore, setshowMore] = useState(true);
	return (
		<div className="mt-6 flex flex-col gap-8">
			<div className="w-full">
				<h2 className="text-Neutral50 font-bold font-Hanken text-[18px]">
					Bio:
				</h2>
				<p className="text-Neutral50 font-Hanken text-[16px] w-full max-w-[500px]">
					{desc.length >= 200 && showMore ? desc.slice(0, 200) + "...." : desc}
				</p>
				{desc.length >= 200 && (
					<>
						{showMore ? (
							<button
								className="text-Accent1 font-Hanken text-[16px]"
								onClick={() => setshowMore(false)}
							>
								Show More
							</button>
						) : (
							<button
								className="text-Accent1 font-Hanken text-[16px]"
								onClick={() => setshowMore(true)}
							>
								Show Less
							</button>
						)}
					</>
				)}
			</div>
			<div>
				<p className="text-Neutra50 font-bold text-[18px] font-Hanken">
					Expertise
				</p>
				<Button
					className="px-4 py-2 border-gray-400"
					title={expertise}
					variant="secondary"
				/>
			</div>
			<div className="flex flex-col gap-3">
				<div className=" w-full flex justify-between">
					<p className="text-Neutra50 font-bold text-[18px] font-Hanken">
						Experience
					</p>
					<EditIcon />
				</div>
				<div className="flex justify-center items-center gap-4 lg:gap-8">
					<div>
						<AwardIcon />
					</div>
					<div className="flex flex-col w-full">
						<div className="flex justify-between">
							<p className="text-black font-medium text-[16px] font-Inter">
								{experience}
							</p>
							<Button
								className="px-3 py-1 border-gray-400"
								title="Present"
								variant="secondary"
							/>
						</div>
						<p className="text-black font-normal text-[16px] font-Hanken">
							{workPlace}
						</p>
					</div>
				</div>
				<div className=" w-full flex justify-between">
					<p className="text-Neutra50 font-bold text-[18px] font-Hanken">
						Education
					</p>
					<EditIcon />
				</div>
			</div>
		</div>
	);
}
