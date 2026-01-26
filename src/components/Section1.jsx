import React, { useRef } from 'react'
import { CiDesktopMouse1 } from "react-icons/ci"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

function Section1() {

  const mouseRef = useRef(null)
  const containerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(".child", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    })
      .from(".social-icon", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.5")
      .from(".cta-button", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      }, "-=0.3")

    gsap.to(mouseRef.current, {
      y: 15,              // move down
      duration: 1,
      repeat: -1,         // infinite loop
      yoyo: true,         // up & down
      ease: "power1.inOut",
    })
  }, { scope: containerRef })

  return (
    <div
      ref={containerRef}
      className="
        parent w-full  flex flex-col items-center
        pt-[8rem] font-serif font-bold gap-[3rem]
        bg-gradient-to-b from-gray-900 to-gray-800
      "
    >
      <div className="details w-full flex flex-col items-center z-10">
        <div className="child text-[4rem] md:text-[6rem] leading-none text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600drop-shadow-lg">
          Ritam Maty
        </div>

        <div className="child text-[1.5rem] md:text-[2rem] leading-tight mt-4 text-gray-300 font-light tracking-wide text-center px-4">
          <span className="text-white font-semibold">MERN Stack Developer</span>
          <span className="mx-3 text-purple-500">•</span>
          <span>Problem Solver</span>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-8">
          <a href="https://www.linkedin.com/in/ritammaty/" target="_blank" rel="noopener noreferrer" className="social-icon text-3xl text-gray-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ritam-g" target="_blank" rel="noopener noreferrer" className="social-icon text-3xl text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://x.com/maty_ritam" target="_blank" rel="noopener noreferrer" className="social-icon text-3xl text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="button mt-4">
        <a href="mailto:ritammaty@gmail.com" className="cta-button inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold tracking-wide hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
          Let's Connect
        </a>
      </div>

      <div
        ref={mouseRef}
        className="mouse w-full flex items-center justify-center
        text-[2rem] text-gray-500 mt-10 md:mt-20 pb-10"
      >
        <CiDesktopMouse1 />
      </div>
    </div>
  )
}

export default Section1
