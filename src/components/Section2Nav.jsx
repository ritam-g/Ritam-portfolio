import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
function Section2Nav() {
  return (
    <nav className='Section2Nav flex
    lg: h-[4rem]  items-center justify-between  mt-[5rem] 
    '>
        <div className="child 
        lg:text-[3.5rem] font-bold 
        ">
            <h1>About Me</h1>
        </div>
        <div className="child flex gap-2
        lg: gap-[2rem] text-4xl cursor-pointer  w-[40%]  pl-[16rem]">
            <h1><a href="https://x.com/maty_ritam"><BsTwitterX/></a></h1>
            <h1><a href="https://www.linkedin.com/in/ritammaty/"><FaLinkedinIn/></a></h1>
            <h1><a href="https://github.com/ritam-g"><FaGithub/></a></h1>
            <h1><a href="https://www.instagram.com/ritam.maty/"><FaInstagram/></a></h1>
        </div>
      
    </nav>
  )
}

export default Section2Nav
