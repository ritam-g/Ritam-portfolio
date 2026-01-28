import React, { useRef } from 'react'
import { BsTwitterX } from "react-icons/bs"
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Section2Nav() {
  const navRef = useRef(null)

  useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: navRef.current,
      start: "top 80%",
      end: "top 30%",
      scrub: 1,          // 👈 this is the magic
      // markers: true,     // remove later
    }
  })

  // LEFT: slide from left
  tl.from(".nav-left", {
    x: -120,
    opacity: 0,
    ease: "power3.out",
  })

  // RIGHT: slide from right
  tl.from(".nav-right h1", {
    x: 120,
    opacity: 0,
    stagger: 0.15,
    ease: "power3.out",
  }, 0) // start at same time
}, { scope: navRef })


  return (
    <nav
      ref={navRef}
      className="
        Section2Nav flex items-center justify-between
        mt-[5rem] lg:h-[4rem]
      "
    >
      {/* LEFT SIDE */}
      <div className="nav-left lg:text-[3.5rem] font-bold">
        <h1>About Me</h1>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          nav-right flex gap-2 lg:gap-[2rem]
          text-4xl cursor-pointer w-[40%] pl-[16rem]
        "
      >
        <h1 className="hover:scale-110 transition-transform duration-300">
          <a href="https://x.com/maty_ritam"><BsTwitterX /></a>
        </h1>
        <h1 className="hover:scale-110 transition-transform duration-300">
          <a href="https://www.linkedin.com/in/ritammaty/"><FaLinkedinIn /></a>
        </h1>
        <h1 className="hover:scale-110 transition-transform duration-300">
          <a href="https://github.com/ritam-g"><FaGithub /></a>
        </h1>
        <h1 className="hover:scale-110 transition-transform duration-300">
          <a href="https://www.instagram.com/ritam.maty/"><FaInstagram /></a>
        </h1>
      </div>
    </nav>
  )
}

export default Section2Nav
