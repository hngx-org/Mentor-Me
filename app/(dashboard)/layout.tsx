"use client";

import { MobileSideBar } from "@/components/sections/SideBars/MobileSiderBar";
import SidebarMentee from "@/components/sections/SideBars/SidebarMentee";
import SidebarMentor from "@/components/sections/SideBars/SidebarMentor";
import { NavbarMentee } from "@/components/sections/nav-bars/NavbarMentee";
import { NavbarMentor } from "@/components/sections/nav-bars/NavbarMentor";

import { usePathname, useSearchParams } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const searchParams = useSearchParams().get("path");
	const isMentee = pathname.includes("/mentee");

	return (
		<>
			{isMentee ? (
				<SidebarMentee path={searchParams} />
			) : (
				<SidebarMentor path={searchParams} />
			)}

			<main className="lg:ml-[274px]">
				{isMentee ? (
					<NavbarMentee path={searchParams} />
				) : (
					<NavbarMentor path={searchParams} />
				)}

				<MobileSideBar />
				{children}
			</main>
		</>
	);
};

export default DashboardLayout;
