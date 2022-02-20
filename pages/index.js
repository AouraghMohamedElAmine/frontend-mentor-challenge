import NavBar from "../components/NavBar";
import Image from "next/image";
import illustration from "../assets/images/illustration.svg";
import Shortner from "../components/Shortner";
import FirstBanner from "../components/FirstBanner";
import SecondBanner from "../components/SecondBanner";
import Boost from "../components/Boost.js";
import AllFeatures from "../components/AllFeatures";
import FooterComponent from "../components/FooterComponent";
import ShortLink from "../components/ShortLink";
import AllLinks from "../components/AllLinks";
export default function Home() {
  return (
    <>
      <NavBar />
      {/* mobile size */}
      <div className="lg:hidden  mx-auto md:px-10% ">
        <Image
          className=" translate-x-8s   block w-full 	"
          src={illustration}
          alt='illustration'
        ></Image>
      </div>

      <div className="my-10 px-6 lg:hidden">
        <FirstBanner />
        <Shortner />
      </div>
      {/* mobile size */}

      {/* desktop size */}

      <div className="hidden lg:flex ml-10%">
        <div className="w-2/5">
          <FirstBanner />
        </div>
        <div>
          <Image
            className="translate-x-8  	"
            src={illustration}
            alt='illustration'
          ></Image>
        </div>
      </div>
      <div className="hidden lg:block">
      <Shortner />
      </div>
     {/* desktop size */}
     <AllLinks/>


      {/* rest of website  both sizes   */}
      <SecondBanner />
      <AllFeatures />
      <Boost />
      <FooterComponent />
    </>
  );
}
