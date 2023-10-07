import Footer from "@/components/sections/Footer";
import HeaderAfterSignUp from "@/components/sections/HeaderAfterSignUp";
import HeaderBeforeSignUp from "@/components/sections/HeaderBeforeSignUp";
import ReviewScreen from "@/components/sections/ReviewScreen";

export default function Landing() {
  return (
    <>
      <HeaderAfterSignUp />
      <HeaderBeforeSignUp />
      <ReviewScreen />
      <Footer />
    </>
  );
}
