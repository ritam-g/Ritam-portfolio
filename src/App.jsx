import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Section1 from './components/Section1'
import Nav from './components/Nav'
import Section2 from './components/Section2'
import ScrollingSkills from './components/ScrollingSkills'
import Projects from './components/Projects'
import Contact from './components/Contact'

gsap.registerPlugin(ScrollTrigger);

function App() {
  const cursorRef = useRef(null);
  const scrollBarRef = useRef(null);

  useGSAP(() => {
    // Custom Cursor Movement
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out"
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Click Effect
    const handleMouseDown = () => gsap.to(cursorRef.current, { scale: 1.5, duration: 0.2 });
    const handleMouseUp = () => gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Scroll Progress
    gsap.to(scrollBarRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      }
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block"></div>
      <div ref={scrollBarRef} className="scroll-progress scale-x-0"></div>

      <main
        className='bg-gray-900 min-h-screen w-full text-white flex flex-col gap-2 overflow-x-hidden select-none'
        onMouseEnter={() => cursorRef.current?.classList.remove('opacity-0')}
        onMouseLeave={() => cursorRef.current?.classList.add('opacity-0')}
      >
        {/* hero section */}
        <Nav />
        <Section1 />
        <hr className='border-gray-800' />
        {/* ABOUT SECTION */}
        <Section2 />
        {/* MOVING PART */}
        <ScrollingSkills />

        {/* PROJECTS SECTION */}
        <div className="w-full">
          <Projects />
        </div>

        {/* CONTACT SECTION */}
        <Contact />
      </main>
    </>
  )
}

export default App
