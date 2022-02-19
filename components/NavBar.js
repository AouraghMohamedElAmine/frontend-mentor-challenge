import React from "react";
import Link from 'next/link'
import { useRef } from "react";
import Image from "next/image";
import logo from '../assets/images/logo.svg'
 function NavBar() {
    const burger = useRef()


    const toggleNav  = () =>{
         burger.current.classList.toggle("hidden")
    }
  return (
    <nav>


<div className="flex justify-between lg:hidden w-90% mx-auto  hover:text-darkViolet2 py-8 font-bold  ">
    <div className="text-darkViolet text-2xl"><Image src={logo}></Image></div>
    <div onClick={toggleNav} ><i className="text-darkBlue fas fa-bars text-2xl"></i></div>
</div>


<div className="lg:flex justify-between  w-80% mx-auto py-6 hidden  font-bold  text-gray ">
    <div className=" flex w-3/6   ">
       <ul className="flex justify-between  items-center w-5/6 h-full">
          <li className=" hover:text-darkViolet2 py-4 text-4xl text-darkViolet2"> <Link href="/Features"><a>Shortly</a></Link> </li>
          <li className=" hover:text-darkViolet2 py-4"> <Link href="/Features"><a>Features</a></Link> </li>
          <li className=" hover:text-darkViolet2 py-4"> <Link href="/Pricing"><a>Pricing</a></Link> </li>
          <li className=" hover:text-darkViolet2 py-4"> <Link href="/Resources"><a>Resources</a></Link> </li>
       </ul>
    </div>
    <div className="flex w-3/6  ">
    <div className="flex  w-full items-center justify-end  h-full ">
    <Link  href="/Login"><a className=" hover:text-darkViolet2 py-4 block mx-6">Login</a></Link>  
    <div className=" hover:text-darkViolet2  text-white py-4 block">     <button className="bg-cyan rounded-3xl h-11  px-6  font-bold    "> <Link href="/SignUp"><a>Sign Up</a></Link> </button> 
</div>
      </div>
    </div>

</div>



      <div  ref={burger} className="bg-darkViolet    text-white font-bold rounded-md  lg:hidden hidden mx-5%  py-4 ">
        <ul className="text-center ">
          <li className="    py-4"> <Link href="/Features"><a>Features</a></Link> </li>
          <li className="py-4"> <Link href="/Pricing"><a>Pricing</a></Link> </li>
          <li className="py-4"> <Link href="/Resources"><a>Resources</a></Link> </li>
          <li className="py-4"> <hr   className=" text-grayViolet w-80% mx-auto"></hr> </li>
          <li className="py-4"> <Link href="/Login"><a>Login</a></Link> </li>
          <li className="py-4"> <button className="bg-cyan rounded-3xl h-11  font-bold  w-80%   "> <Link href="/SignUp"><a>Sign Up</a></Link> </button></li>
         </ul>
      </div>


  
    </nav>
  );
}

export default NavBar;
