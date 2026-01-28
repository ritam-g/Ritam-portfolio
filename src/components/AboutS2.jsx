import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function AboutS2() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1.2,      // smooth + reversible
        // markers: true,
      }
    })

    // LEFT content
    tl.from(".about-left .inl p", {
      x: -120,
      opacity: 0,
      stagger: 0.4,
      ease: "power3.out",
      scrollTrigger:{
        trigger: sectionRef.current,
        start: "top 100%",
        end: "top 30%",
        scrub: 1.2,
        // markers: true,
      }
    })

    // RIGHT image
    tl.from(".about-right", {
      x: 120,
      opacity: 0,
      scale: 0.95,
      ease: "power3.out",
    }, 0) // same time

  }, { scope: sectionRef })

  return (
    <div
      ref={sectionRef}
      className="AboutS2 w-full h-full flex gap-10"
    >
      {/* LEFT */}
      <div
        className="
          about-left
          w-full lg:w-[70%]
          lg:pt-[5rem]
          flex flex-col gap-10 text-white
        "
      >
        <div className="inl space-y-6 text-[1.2rem] md:text-[1.5rem] leading-relaxed text-gray-300 font-light">
          <p>
            Hello, I’m <strong className="text-white font-semibold">Ritam</strong>, a dedicated
            <strong className="text-blue-400"> MERN Stack Full-Stack Developer</strong> with a strong
            focus on building scalable, maintainable, and high-performance web applications.
          </p>

          <p>
            My primary expertise includes <strong className="text-white">MongoDB, Express.js, React, and Node.js</strong>.
            In addition to web technologies, I have hands-on experience with
            <strong className="text-yellow-400"> Java</strong> and
            <strong className="text-yellow-300"> JavaScript</strong>, along with a working knowledge of
            <strong className="text-blue-300"> Python</strong>.
          </p>

          <p>
            I enjoy solving complex problems through clean, efficient, and well-structured code.
            From developing intuitive and responsive user interfaces to designing reliable back-end
            systems, I approach every project with attention to detail and quality.
          </p>

          <p>
            I am a continuous learner who actively keeps up with emerging technologies and industry
            best practices, enabling me to deliver modern, secure, and performance-driven solutions.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="
          about-right
          w-[25%] flex items-start justify-end lg:pt-[5rem]
        "
      >
        <img
          className="w-full rounded-[50%]"
          src="/ritam2.png"
          alt="Ritam Profile"
        />
      </div>
    </div>
  )
}

export default AboutS2
