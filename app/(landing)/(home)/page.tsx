import Button from "@/components/ui/Button";
import Shoppimg from "./../../public/assets/Icons/shopping-cart.png";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import SidebarMentor from "@/components/sections/SideBars/SidebarMentor";
import { MobileSideBar } from "@/components/sections/SideBars/MobileSiderBar";
import SidebarMentee from "@/components/sections/SideBars/SidebarMentee";

export default function Landing() {
  return (
    <>
      <div className="flex gap-6 px-4 py-4">
        <Button
          className="p-3"
          variant="primary"
          type="button"
          title="Primary Button"
        />

        <Button
          className="p-3"
          title="Secondary Button"
          variant="secondary"
          type="button"
        />
      </div>

      <SidebarMentee />

      {/* <SidebarMentor /> */}
    </>
  );
}
