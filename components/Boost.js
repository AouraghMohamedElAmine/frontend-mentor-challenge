import React from "react";

function Boost() {
  return (
    <div className=" boost text-center text-white bg-darkViolet flex flex-col justify-center items-center px-4 py-12">

      <h1 className="font-bold text-2xl lg:text-3xl my-1"> Boost your links today</h1>
      <button onClick={(e)=>{console.log(e)}} className="block hover:text-darkViolet2 bg-cyan rounded-3xl h-11  font-bold lg:w-1/6 w-3/6   my-1">
        Get Started
      </button>
    </div>
  );
}

export default Boost;
