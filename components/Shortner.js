import React, { useState } from "react";
 import axios from "axios";
 import { useDispatch } from "react-redux";
import { addlink } from "../redux/actionsCreators";
function Shortner() {
  const [error, setError] = useState();
   const [link, setLink] = useState("");
  const dispatch = useDispatch();
  const handleShortner = async (e) => {
    e.preventDefault();
    link.length <= 0 ? setError("please add a link") : setError("");
    if (link.length > 0) {
      try {
        const { data } = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${link}`
        );
         dispatch(
          addlink({
            originalLink: link,
            shortLink : data.result.short_link,
            id : Math.floor(Math.random()*1000) ,
            copied : false
          })
        );
      } catch (error) {
        setError("bad link");
      }
    }
  };
  return (
    <>
      <div className="text-center  bg-darkViolet rounded-xl mx-auto lg:w-80% lg:flex justify-between items-center lg:px-12 p-8 shortenMobile my-8">
        <div className="h-11 lg:h-14 my-6 w-full   lg:mr-4  lg:w-9/12 block">
          <input
            className={` h-11 lg:h-14 w-full   lg:mb-0 px-3 outline-none rounded-lg  block  ${
              error ? "placeholder:text-red   border-2 border-red" : null
            } `}
            value={link}
            placeholder="Shorten a link here... "
            onChange={(e) => setLink(e.target.value)}
          />

          {error ? (
            <p className="text-red mb-8 text-left py-0 text-sm  ">{error}</p>
          ) : (
            <p className=" mb-8"> </p>
          )}
        </div>

        <button
          onClick={handleShortner}
          className="bg-cyan rounded-lg h-11 lg:h-14  text-white hover:text-darkViolet2 font-bold   w-full lg:w-3/12 "
        >
          Shorten It!
        </button>
      </div>
    </>
  );
}

export default Shortner;
