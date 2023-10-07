"use client";

import OverviewCard from "@/components/cards/mentee-profile-cards/OverviewCard";
import Button from "@/components/ui/Button";
import { DashboardCoverBg, MenteeDashboardProfileImg } from "@/public";
import { NaijaFlagIcon } from "@/public/SVGs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

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

	return (
		<section className="w-full">
			<div className="flex w-full">
				<Image src={DashboardCoverBg} alt="cover" width={2000} height={500} />
			</div>
			<div className="flex w-full justify-between">
				<div className="flex flex-col px-6 lg:px-8 w-full">
					<div className="flex">
						<div>
							<Image
								src={MenteeDashboardProfileImg}
								alt="cover"
								width={130}
								height={130}
							/>
						</div>
						<div className="flex flex-col">
							<p className="flex">
								<span>Henrietta Okankwo</span>
								<NaijaFlagIcon />
							</p>
							<p>
								Product designer <span>at</span> Federal University of
								Technology, Owerri
							</p>
						</div>
						<div>
							<Button
								className="px-4 py-2"
								title="Edit Profile"
								variant="secondary"
							/>
						</div>
					</div>

					<div className="flex mt-10">
						<div className="flex flex-col w-full">
							<div className="flex items-center gap-10">
								{menteeMenus.map((menu) => (
									<p
										className=" cursor-pointer"
										key={menu.id}
										onClick={() => {
											router.push(`?=${menu.tab}`);
											setActiveTab(menu.tab);
										}}
									>
										{menu.title}
									</p>
								))}
							</div>
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
						</div>
						<div className="flex w-full"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
