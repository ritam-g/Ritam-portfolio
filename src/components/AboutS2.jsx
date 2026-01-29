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
      scrollTrigger: {
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

    // SKILLS badges
    tl.from(".skill-badge", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.7)",
    }, "-=0.5")

  }, { scope: sectionRef })

  const skills = [
    { name: "MongoDB", color: "text-green-500", border: "border-green-500/20" },
    { name: "Express", color: "text-gray-400", border: "border-gray-400/20" },
    { name: "React", color: "text-blue-400", border: "border-blue-400/20" },
    { name: "Node.js", color: "text-green-400", border: "border-green-400/20" },
    { name: "Core Java", color: "text-red-400", border: "border-red-400/20" },
    { name: "JavaScript", color: "text-yellow-400", border: "border-yellow-400/20" },
    { name: "DSA", color: "text-purple-400", border: "border-purple-400/20" },
  ]

  return (
    <div
      ref={sectionRef}
      className="AboutS2 w-full h-full flex flex-col lg:flex-row gap-10 items-center lg:items-start"
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
        <div className="inl space-y-6 text-[1.2rem] md:text-[1.5rem] leading-relaxed text-gray-300 font-light text-justify">
          <p>
            I’m <strong className="text-white font-semibold">Ritam</strong>, a developer driven by the belief that the most powerful digital experiences exist where <strong className="text-blue-400 font-semibold">robust logic</strong> meets <strong className="text-teal-400 font-semibold">intuitive storytelling</strong>.
          </p>

          <p>
            My journey through the <strong className="text-white font-semibold">MERN stack</strong> is focused on more than just building features; it's about architecting scalable systems that resonate with users. I specialize in turning complex technical challenges into fluid, high-performance web applications.
          </p>

          <p>
            With a solid foundation in <strong className="text-yellow-400 font-semibold">Core Java</strong> and a passion for problem-solving, I’ve mastered <strong className="text-blue-300 font-semibold">Data Structures and Algorithms</strong> in both <strong className="text-white font-semibold">JavaScript</strong> and <strong className="text-white font-semibold">Java</strong>. My mission remains the same: <strong className="text-white font-semibold text-white">Engineering excellence that delivers measurable real-world impact</strong>.
          </p>

          <p>
            I don't just build websites; I craft digital identities. I'm constantly pushing the boundaries of what's possible on the web to ensure every project I touch is at the absolute cutting edge.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="skills-grid flex flex-wrap gap-4 mt-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`
                skill-badge
                px-5 py-2 rounded-full border ${skill.border}
                bg-white/5 backdrop-blur-md
                flex items-center gap-2
                hover:bg-white/10 transition-colors duration-300
                cursor-default
              `}
            >
              <span className={`w-2 h-2 rounded-full bg-current ${skill.color}`}></span>
              <span className={`text-[0.9rem] font-medium ${skill.color}`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="
          about-right
          w-1/2 md:w-1/3 lg:w-[25%] flex items-start justify-center lg:justify-end lg:pt-[5rem]
        "
      >
        <img
          className="w-full rounded-[50%] shadow-[0_0_50px_rgba(20,184,166,0.1)] border-2 border-white/10"
          src="/ritam2.png"
          alt="Ritam Profile"
        />
      </div>
    </div>
  )
}

export default AboutS2
