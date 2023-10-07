import Button from "@/components/ui/Button";
import Shoppimg from "./../../public/assets/Icons/shopping-cart.png";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import SidebarMentor from "@/components/sections/SideBars/SidebarMentor";
import { MobileSideBar } from "@/components/sections/SideBars/MobileSiderBar";

export default function Landing() {
  return (
    <>
      {/* <Button
        className="p-3"
        paddingLess={false}
        iconPresent={false}
        variant="primary"
        type="button"
      >
        <div>Button</div>
      </Button>

      <Button
        className="p-3"
        paddingLess={false}
        iconPresent={false}
        variant="secondary"
        type="button"
      >
        <div className="flex   justify-center gap-2">
          <Image src={Shoppimg} alt="" width={20} height={20} />
          Button
        </div>
      </Button> */}
      {/* <Footer /> */}
      <SidebarMentor />
      <MobileSideBar />
    </>
  );
}
