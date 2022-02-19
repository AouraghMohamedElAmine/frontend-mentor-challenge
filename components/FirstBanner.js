import React from "react";

function FirstBanner() {
  return (
    <div className="text-center lg:text-left lg:pr-6 my-14">
      <h2 className="text-darkBlue lg:text-6xl text-3xl font-bold ">
        More than just shorter links
      </h2>
      <p className="text-lg	 text-grayViolet py-4">
        Build your brand’s recognition and get detailed insights on how your
        links are performing .
      </p>
      <button className=" bg-cyan rounded-3xl hover:text-darkViolet2 h-11 text-white  font-bold lg:w-2/6 w-80%   ">
        Get Started{" "}
      </button>
    </div>
  );
}

export default FirstBanner;
