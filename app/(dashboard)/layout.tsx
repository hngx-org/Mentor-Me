import SidebarMentee from "@/components/sections/SideBars/SidebarMentee";
import SidebarMentor from "@/components/sections/SideBars/SidebarMentor";
import Navbar from "@/components/sections/nav-bars/NavbarMentee";
import { headers } from "next/headers";
import { DashboardNav } from "./DashbordNav";

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
    <div className="flex w-full relative">
      {isMentee ? <SidebarMentee /> : <SidebarMentor />}
      <main className="w-full absolute top-0 left-0 z-[-1] sm:relative sm:z-[1]">
        <DashboardNav />

        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
