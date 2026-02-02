import React, { useRef } from 'react'
import Left from './Left'
import Right from './Right'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Nav() {
  const navRef = useRef(null)

  useGSAP(() => {
    // Nav Entry
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out"
    })

    // Socials Stagger
    gsap.from(".nav-social", {
      scale: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      delay: 0.5,
      ease: "back.out(1.7)"
    })
  }, { scope: navRef })

  const handleMagnetic = (e) => {
    const item = e.currentTarget
    const rect = item.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(item, {
      x: x * 0.5,
      y: y * 0.5,
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
    <nav ref={navRef} className='fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-black/40 border-b border-white/10 flex items-center justify-between text-white font-heading px-6 py-4 md:px-12 transition-all duration-300'>
      <Left />

      <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-lg">
        {[
          { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ritammaty/", hover: "hover:text-blue-400" },
          { icon: <FaGithub />, link: "https://github.com/ritam-g", hover: "hover:text-white" },
          { icon: <FaTwitter />, link: "https://x.com/maty_ritam", hover: "hover:text-sky-400" },
          { icon: <FaInstagram />, link: "https://www.instagram.com/ritam.maty/", hover: "hover:text-pink-400" }
        ].map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMagnetic}
            onMouseLeave={resetMagnetic}
            className={`nav-social text-lg text-gray-400 ${social.hover} transition-colors inline-block`}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <Right />
    </nav>
  )
}

export default Nav
