import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Section2Nav() {
  const navRef = useRef(null)

  useGSAP(() => {
    gsap.from(".nav-left h1", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: navRef.current,
        start: "top 90%",
      }
    })
  }, { scope: navRef })

  return (
    <nav
      ref={navRef}
      className="
          Section2Nav flex items-center justify-between
          mt-[5rem] lg:h-[4rem]
        "
    >
      <div className="nav-left lg:text-[3.5rem] font-bold">
        <h1>About Me</h1>
      </div>
    </nav>
  )
}

export default Section2Nav
