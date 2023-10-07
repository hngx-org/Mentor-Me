import Button from "@/components/ui/Button";
import Shoppimg from "./../../public/assets/Icons/shopping-cart.png";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import SidebarMentor from "@/components/sections/SideBars/SidebarMentor";
import { MobileSideBar } from "@/components/sections/SideBars/MobileSiderBar";

export default function Landing() {
  return (
    <div>
      {/* <Footer /> */}
      <SidebarMentor />
      <MobileSideBar />
    </div>
  );
}
