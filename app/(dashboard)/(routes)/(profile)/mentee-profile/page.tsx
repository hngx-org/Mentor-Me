"use client";

import Commendations from "@/components/cards/mentee-profile-cards/Commendations";
import MyMentorsCard from "@/components/cards/mentee-profile-cards/MyMentorsCard";
import OverviewCard from "@/components/cards/mentee-profile-cards/OverviewCard";
import { MobileSideBar } from "@/components/sections/SideBars/MobileSiderBar";
import Button from "@/components/ui/Button";
import { DashboardCoverBg, MenteeDashboardProfileImg } from "@/public";
import { EditIcon, NaijaFlagIcon } from "@/public/SVGs";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect} from "react";

type MenuProfileProps = {
	id: number;
	title: string;
	tab: string;
};
const menteeMenus: MenuProfileProps[] = [
	{
		id: 1,
		title: "overview",
		tab: "overview",
	},
	{
		id: 2,
		title: "My Mentors",
		tab: "my-mentors",
	},
	{
		id: 3,
		title: "commendations",
		tab: "commendations",
	},
];

export default function MenteeProfilePage() {
	const [activeTab, setActiveTab] = useState("");
	const router = useRouter();
const params = useSearchParams().get('tab')

useEffect(()=>{

setActiveTab(params)
},[params])


	return (
		<section className="w-full max-lg:pb-16">
			<div className="flex w-full">
				<Image src={DashboardCoverBg} alt="cover" width={2000} height={500} />
			</div>
			<div className="flex w-full justify-between items-center px-6 lg:px-8 max-lg:flex-col max-lg:items-start max-lg:gap-6">
				<div className="flex items-center gap-6  w-full max-lg:flex-col max-lg:items-start max-lg:gap-6">
					<div className="relative -mt-12 ">
						<Image
							src={MenteeDashboardProfileImg}
							alt="cover"
							width={130}
							height={130}
						/>
						<div className="absolute bottom-2 right-0 h-8 w-8 rounded-lg bg-white flex items-center justify-center">
							<EditIcon />
						</div>
					</div>
					<div className="flex flex-col">
						<p className="flex gap-4 font-Inter font-medium lg:text-[32px] text-Neutra50 items-center">
							<span>Henrietta Okankwo</span>
							<NaijaFlagIcon />
						</p>
						<p>
							Product designer <span>at</span> Federal University of Technology,
							Owerri
						</p>
					</div>
				</div>
				<div className="w-full max-w-fit">
					<Button
						className="px-4 py-2"
						title="Edit Profile"
						variant="secondary"
					/>
				</div>
			</div>
			<div className=" flex w-full justify-center max-lg:flex-col-reverse px-4 sm:px-6 lg:px-8 lg:gap-8 xl:gap-16 2xl:gap-28">
				<div className="flex flex-col  w-full ">
					<div className="flex mt-10 max-lg:w-full ">
						<div className="flex flex-col w-full ">
							<div className="flex items-center gap-10 !max-lg:w-full ">
								{menteeMenus.map((menu) => (
									<p
										className={` cursor-pointer capitalize text-[14px] sm:text-[18px] font-Hanken text-Neutra50 ${
											activeTab === menu.tab
												? "border-b-[3px] border-Accent1 pb-1 text-black font-bold"
												: ""
										}`}
										key={menu.id}
										onClick={() => {
											router.push(`?path=home&tab=${menu.tab}`);
											setActiveTab(menu.tab);
										}}
									>
										{menu.title}
									</p>
								))}
							</div>
							{activeTab === "overview" && (
								<OverviewCard
									desc="I'm Henrietta Okonkwo, a rising star in the world of product
								design. I bring to the table a deep-seated passion for innovation and
								an unwavering commitment to precision in my work.In my journey as a
								web developer, I have come to understand the importance of
								collaboration between design and development. The synergy between our
								fields often leads to-mdx digital experiences. Your passion
								for innovation resonates deeply with me, as it mirrors the ethos of
								the web development community."
									expertise="UI Design"
									experience="Product Designer 3 years"
									workPlace="Federal University of Science Technology, Owerri"
								/>
							)}
							{activeTab === "my-mentors" && <MyMentorsCard />}
							{activeTab === "commendations" && <Commendations />}
						</div>
					</div>
				</div>
				<div className="flex mt-10 w-full lg:w-[80%] justify-center items-center">
					<div className="flex w-full p-4 lg:p-10 border border-Neutra10 flex-col gap-4">
						<p className="w-full flex justify-between">
							<span>Profile Strength: Beginner</span>
							<span> &gt; </span>
						</p>
						<p>Community Statistics</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
							<div className="flex flex-col items-center justify-start border border-Neutra10 pt-4 pb-6">
								<p className="font-Inter text-sm font-medium text-Neutra50 ">
									Average Attendence
								</p>
								<p className="font-Hanken text-[20px] text-Neutra50 font-bold relative">
									0{" "}
									<span className="absolute top-1 -right-[10px] text-sm">
										%
									</span>
								</p>
							</div>

							<div className="flex flex-col items-center justify-start border border-Neutra10 pt-4 pb-6">
								<p className="font-Inter text-sm font-medium text-Neutra50 text-left">
									Sessions completed
								</p>
								<p className="font-Hanken text-[20px] text-Neutra50 font-bold relative">
									0
								</p>
							</div>

							<div className="flex flex-col items-center justify-start border border-Neutra10 pt-4 pb-6">
								<p className="font-Inter text-sm font-medium text-Neutra50 text-left">
									Total Learning Time
								</p>
								<p className="font-Hanken text-[20px] text-Neutra50 font-bold flex items-center gap-1">
									0 <span className=" text-sm">hours</span>
								</p>
							</div>

							<div className="flex flex-col items-center justify-start border border-Neutra10 pt-4 pb-6">
								<p className="font-Inter text-sm font-medium text-Neutra50 ">
									Total Points
								</p>
								<p className="font-Hanken text-[20px] text-Neutra50 font-bold relative">
									0
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
