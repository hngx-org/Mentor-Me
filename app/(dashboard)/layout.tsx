import SidebarMentee from "@/components/sections/SideBars/SidebarMentee";
import SidebarMentor from "@/components/sections/SideBars/SidebarMentor";
import Navbar from "@/components/sections/nav-bars/NavbarMentee";
import { headers } from "next/headers";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
	const headersList = headers();
	const domain = headersList.get("host") || "";
	const fullUrl = headersList.get("referer") || "";
	const isMentee = fullUrl.includes("/mentee-profile");

	console.log(fullUrl);
	console.log("===========");
	console.log(isMentee);
	console.log("===========");
	return (
		<>
			{isMentee ? <SidebarMentee /> : <SidebarMentor />}

			<main className="ml-[274px]">
				<Navbar />

				{children}
			</main>
		</>
	);
};

export default DashboardLayout;
