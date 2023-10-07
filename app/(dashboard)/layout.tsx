"use client";

import { MobileSideBar } from "@/components/sections/SideBars/MobileSiderBar";
import SidebarMentee from "@/components/sections/SideBars/SidebarMentee";
import SidebarMentor from "@/components/sections/SideBars/SidebarMentor";
import { NavbarMentee } from "@/components/sections/nav-bars/NavbarMentee";
import NavbarMentor from "@/components/sections/nav-bars/NavbarMentor";
import { usePathname, useSearchParams } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams().get("path");
  const isMentee = pathname.includes("/mentee");

  console.log("===========");
  console.log(isMentee);

  console.log("===========");
  return (
    <>
      {isMentee ? <SidebarMentee path={searchParams} /> : <SidebarMentor />}

      <main className="lg:ml-[274px]">
        {isMentee ? <NavbarMentee path={searchParams} /> : <NavbarMentor />}

        <MobileSideBar />
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
