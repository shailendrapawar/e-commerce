import LandingPage from "@/app/pages/LandingPages";
import useScrollToTop from "@/shared/hooks/useScrollToTop";

const RootLayout = () => {
  return (
    <div className=" h-screen w-full ">
      <LandingPage />
    </div>
  );
};
export default RootLayout;
