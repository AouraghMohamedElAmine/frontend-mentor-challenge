import React from "react";
import { useState } from "react";
function ShortLink({ shortLink, originalLink }) {
const [message , setMessage] = useState("copy")
  const copyHandler =  async ()=>{
    setMessage("copied !")
     const copiedText = await  navigator.clipboard.writeText("shortLink");
    console.log(copiedText);
  }
  return (
    <>
      <div className="  bg-white justify-between  rounded-xl mx-auto lg:w-80% w-90% lg:flex   items-center lg:p-12 p-4  my-4">
       
       <div className="lg:w-5/12 lg:my-0 text-center border-b border-zinc-300 py-1 lg:border-b-0 lg:text-left  ">{originalLink}</div>
       <div className="text-cyan lg:w-4/12 text-center my-2 lg:my-0 lg:text-left">{shortLink}</div>
       <div className="lg:w-2/12 justify-end">  <button
       onClick={copyHandler}
           className={`${(message =="copy") ? "bg-cyan" : "bg-darkViolet"}   rounded-lg h-11 lg:h-12 text-white hover:text-darkViolet2 font-bold   w-full  `}
        >
         {message}
        </button></div>
      
      </div>
    </>
  );
}

export default ShortLink;
