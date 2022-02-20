import React from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { setCopiedLink } from "../redux/actionsCreators";
import {useDispatch} from 'react-redux'
function ShortLink({ shortLink, originalLink, copied , id  }) {
  const [message, setMessage] = useState("copy");
  const [shortLinkToCopy , setShortLink] = useState(shortLink)
  const dispatch  = useDispatch()
  const copyHandler = async () => {
    setMessage("copied !");
    dispatch(setCopiedLink(id))
 
  };
  return (
    <>
 
       <div className="  bg-white justify-between  rounded-xl mx-auto lg:w-80% w-90% lg:flex   items-center lg:p-12 p-4  my-4">
         <input
          value={originalLink}
          readOnly
          className=" block w-full oy lg:w-6/12 lg:my-0 text-center border-b border-zinc-300 py-1 lg:border-b-0 lg:text-left overflow-scroll "
        />
        <div className="text-cyan lg:w-3/12 text-center my-2 lg:my-0  lg:text-right">
          {shortLink}
        </div>
        <div className="lg:w-2/12 justify-end">
          <CopyToClipboard text={shortLinkToCopy}>
            <button
              onClick={copyHandler}
              className={`${copied ? "bg-darkViolet" : "bg-cyan"}   rounded-lg h-11 lg:h-12 text-white hover:text-darkViolet2 font-bold   w-full  `}  >
              {message}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </>
  );
}

export default ShortLink;
