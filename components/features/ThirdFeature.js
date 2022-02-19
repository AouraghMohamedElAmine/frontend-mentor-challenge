import React from "react";
import iconFullyCustomizable from "../../assets/images/iconFullyCustomizable.svg";
import Image from "next/image";
function ThirdFeature() {
  return (
    <div className="relative lg:mt-40 lg:my-0 my-20 rounded-md">
     <div className=" feature-image mx-auto h-20 rounded-full bg-darkViolet w-20 flex items-center justify-center"> <Image  className="    " src={iconFullyCustomizable}></Image></div>
      <div className="text-center bg-white py-10 pt-20  px-3 lg:px-7 rounded-md lg:text-left">
        <h2 className="text-darkBlue text-2xl font-bold mb-3 ">
     
          Fully Customizable
        </h2>
        <p className="text-lg	 text-grayViolet py-4">
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </div>
  );
}

export default ThirdFeature;
