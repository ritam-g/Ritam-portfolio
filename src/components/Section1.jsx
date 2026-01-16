import React, { useRef } from 'react'
import { CiDesktopMouse1 } from "react-icons/ci"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

function Section1() {

  const mouseRef = useRef(null)

  useGSAP(() => {
    gsap.to(mouseRef.current, {
      y: 15,              // move down
      duration: 1,
      repeat: -1,         // infinite loop
      yoyo: true,         // up & down
      ease: "power1.inOut",

    })
  })

  return (
    <div
      className="
        parent w-full flex flex-col items-center
        pt-[10rem] font-serif font-bold gap-[5rem]
      "
    >
      <div className="details w-full flex flex-col items-center">
        <div className="child text-[4.5rem] leading-none">
          Ritam <span className="text-gray-400">Maty</span>
        </div>

        <div className="child text-[4.5rem] leading-tight mt-2 text-gray-400">
          <span className="text-white">Web Developer</span> | Problem Solver
        </div>
      </div>

      <div className="button">
        <button className="border-gray-600 border-2 rounded-[5rem] p-3">
          Hello Everyone
        </button>
      </div>

      <div
        ref={mouseRef}
        className="mouse w-full flex items-center justify-end
        text-[2.5rem] pt-[5rem] pr-8"
      >
        <CiDesktopMouse1 />
      </div>
    </div>
  )
}

export default Section1
