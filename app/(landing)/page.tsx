import Footer from "@/components/sections/Footer";
import HeaderAfterSignUp from "@/components/sections/HeaderAfterSignUp";
import HeaderBeforeSignUp from "@/components/sections/HeaderBeforeSignUp";
import Button from "@/components/ui/Button";
import Shoppimg from "./../../public/assets/shopping-cart.png";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="flex gap-6 px-4 py-4">
      <Button
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
      </Button>
      <Button
        className="p-3"
        paddingLess={false}
        iconPresent={false}
        variant="disabled-primary"
        type="button"
      >
        <div className="flex   justify-center gap-2">Button</div>
      </Button>
    </div>
  );
}
