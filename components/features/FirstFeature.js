import React from "react";
import iconDetailedRecords from "../../assets/images/iconDetailedRecords.svg";
import Image from "next/image";
function FirstFeature() {
  return (
    <div className="my-20 lg:mt-0  relative lg:item-start ">
      <div className="  feature-image mx-auto   h-20 rounded-full bg-darkViolet w-20 flex items-center justify-center">
        <Image className="    " src={iconDetailedRecords}></Image>
      </div>

      <div className="text-center lg:text-left bg-white py-10 pt-20  px-3 lg:px-7 rounded-md">
        <h2 className="text-darkBlue text-2xl font-bold mb-3">Brand Recognition</h2>
        <p className="text-lg	 text-grayViolet py-2">
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div>
    </div>
  );
}

export default FirstFeature;
