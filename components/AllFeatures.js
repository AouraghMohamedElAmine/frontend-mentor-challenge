import React from "react";
import FirstFeature from "./features/FirstFeature";
import SecondFeature from "./features/SecondFeature";
 import ThirdFeature from "./features/ThirdFeature";


 function AllFeatures() {
   return (
    <div className="relative bg-zinc-100 -z-30 px-4  features   py-14 lg:flex lg:px-10%">
     
      <div className="verticalLine   h-2/4  top-1/4 right-1/2  lg:w-80% lg:h-2 lg:top-1/2   lg:left-10%    bg-cyan w-2 mx-auto -z-10 "> </div>  
       <FirstFeature /> 
       <SecondFeature /> 
       <ThirdFeature /> 
    </div>
  );
}

export default AllFeatures;
