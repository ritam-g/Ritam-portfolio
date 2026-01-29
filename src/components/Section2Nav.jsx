import React, { useRef } from 'react';
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section2Nav() {
  const navRef = useRef(null);

  useGSAP(
    () => {
      // 1. Set initial hidden/off-screen states instantly (no flash)
      gsap.set('.nav-left h1', { x: -60, opacity: 0 });
      gsap.set('.social-link', { y: 30, opacity: 0, scale: 0.6 });

      // 2. Create scroll-triggered timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: navRef.current,
          start: 'top 80%',           // adjust to 'top 90%' or 'top bottom' if needed
          toggleActions: 'play none none reverse',
          // markers: true,           // ← uncomment during debug to see trigger line
        },
      });

      tl
        .to('.nav-left h1', {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power4.out',
        })
        .to(
          '.social-link',
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.11,
            duration: 0.6,
            ease: 'back.out(1.7)',
          },
          '-=0.55'   // overlap a bit more with the title animation
        );

      // Optional: force refresh if layout shifts after mount (accordions, images, etc.)
      // ScrollTrigger.refresh();
    },
    { scope: navRef }
  );

  const socials = [
    {
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/ritammaty/',
      hover: 'hover:text-blue-500',
    },
    {
      icon: <FaTwitter />,
      link: 'https://x.com/maty_ritam',
      hover: 'hover:text-sky-400',
    },
    {
      icon: <FaGithub />,
      link: 'https://github.com/ritam-g',
      hover: 'hover:text-gray-300',
    },
    {
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/ritam.maty/',
      hover: 'hover:text-pink-500',
    },
  ];

  return (
    <nav
      ref={navRef}
      className="
        Section2Nav
        flex items-center justify-between
        mt-[5rem] lg:h-[4rem]
        relative z-20
      "
    >
      {/* Left - Title */}
      <div className="nav-left text-white lg:text-[3.5rem] font-bold">
        <h1 className="tracking-tighter">About Me</h1>
      </div>

      {/* Right - Social icons */}
      <div className="nav-right flex gap-6 mt-4 lg:mt-0">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              social-link
              text-2xl lg:text-3xl
              text-white/60
              transition-all duration-300
              hover:scale-125
              ${social.hover}
            `}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Section2Nav;