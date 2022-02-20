import React from 'react'
import ShortLink from './ShortLink'
import { useSelector } from "react-redux";
function AllLinks() {
  const links = useSelector((state)=>state.links)
 
  return (
      <div className='bg-zinc-100 py-6'>
            {         
              links.map(link =>{ 
      
                return <ShortLink  key={link.id} id={link.id} originalLink={link.originalLink} shortLink={link.shortLink} copied={link.copied}/> 
              })
            }
      </div>
  )
}

export default AllLinks