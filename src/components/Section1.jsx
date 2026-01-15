import React from 'react'
import { CiDesktopMouse1 } from "react-icons/ci";
function Section1() {
  return (
    <div
      className="
        w-full flex flex-col items-center font-bold
       lg: pt-[10rem] font-serif font-bold gap-[5rem]
      "
    >
        <div className="details
        w-full flex flex-col items-center font-bold
       lg:  font-serif font-bold 
        ">
      <div className="child text-[4.5rem] leading-none m-0 font-bold">
        Ritam <span className="text-gray-400">Maty</span>
      </div>

      <div className="child text-[4.5rem] leading-tight mt-2 font-bold text-gray-400">
       <span className='text-white'>Web Developer</span>  | Problem Solver
      </div>
    </div>
      <div className="button">
        <button className='border-gray-600 border-2 rounded-[5rem] p-3'>Hello Everyone</button>
      </div>

      <div className="mouse w-full flex items-center justify-end
         lg:text-[5.5rem] pt-[3rem] pr-8">
        <CiDesktopMouse1 />
        </div>

    </div>
  )
}

export default Section1
