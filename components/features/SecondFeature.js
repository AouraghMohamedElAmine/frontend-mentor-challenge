import React from "react";
import iconBrandRecognition from "../../assets/images/iconBrandRecognition.svg";
import Image from "next/image";
function SecondFeature() {
  return (
    <div className="my-20 lg:mx-12 relative   ">
      <div className="feature-image mx-auto h-20 rounded-full bg-darkViolet w-20 flex items-center justify-center ">
         <Image className="    " src={iconBrandRecognition}></Image>
      </div>

      <div className="text-center bg-white py-10 pt-20  px-3 lg:px-7 rounded-md lg:text-left">
        <h2 className="text-darkBlue text-2xl font-bold mb-3 ">
          {" "}
          Detailed Records
        </h2>
        <p className="text-lg	 text-grayViolet py-2">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.{" "}
        </p>
      </div>
    </div>
  );
}

export default SecondFeature;
