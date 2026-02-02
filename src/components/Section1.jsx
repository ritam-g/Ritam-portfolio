import React, { useRef } from 'react'
import { CiDesktopMouse1 } from "react-icons/ci"
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
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out"
    })
      .from(".cta-button-wrap", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.6")

    gsap.to(mouseRef.current, {
      y: 15,              // move down
      duration: 1.5,
      repeat: -1,         // infinite loop
      yoyo: true,         // up & down
      ease: "sine.inOut",
    })
  }, { scope: containerRef })

  const handleMagnetic = (e) => {
    const item = e.currentTarget
    const rect = item.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(item, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const resetMagnetic = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    })
  }

  return (
    <div
      ref={containerRef}
      className="
        parent w-full flex flex-col items-center
        pt-[8rem] font-heading font-bold gap-[3rem]
        bg-gradient-to-b from-gray-900 to-gray-800
      "
    >
      <div className="details w-full flex flex-col items-center z-10">
        <div className="child text-[4rem] md:text-[6rem] leading-none text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
          Ritam Maty
        </div>

        <div className="child text-[1.5rem] md:text-[2rem] leading-tight mt-4 text-gray-300 font-light tracking-wide text-center px-4">
          <span className="text-white font-semibold">Crafting High-Performance Web Experiences</span>
          <br className="md:hidden" />
          <span className="mx-3 text-purple-500 hidden md:inline">•</span>
          <span className="block md:inline">MERN Stack Specialist</span>
        </div>
        <div className="child text-[1rem] md:text-[1.2rem] text-gray-400 mt-2 font-light text-center px-4 max-w-2xl">
          Turning complex problems into elegant, performant digital solutions.
          Expertise in <span className="text-blue-400">scalability</span> and <span className="text-teal-400">immersive design</span>.
        </div>

      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-4 z-10">
        <div
          className="cta-button-wrap"
          onMouseMove={handleMagnetic}
          onMouseLeave={resetMagnetic}
        >
          <a
            href="#projects"
            className="
              inline-block px-8 py-4
              bg-white text-black rounded-full font-semibold tracking-wide
              hover:bg-gray-200 transition-all duration-300
              transform active:scale-95 cursor-pointer
            "
          >
            View Work
          </a>
        </div>

        <div
          className="cta-button-wrap"
          onMouseMove={handleMagnetic}
          onMouseLeave={resetMagnetic}
        >
          <a
            href="mailto:ritammaty@gmail.com"
            className="
              inline-block px-8 py-4
              border border-white/20 text-white rounded-full font-semibold tracking-wide
              hover:bg-white/10 transition-all duration-300
              transform active:scale-95 cursor-pointer
            "
          >
            Let's Connect
          </a>
        </div>
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
