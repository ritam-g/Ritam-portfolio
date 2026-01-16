import React from 'react'

function AboutS2() {
  return (
    <div className='AboutS2 w-full h-full
     flex gap-[8rem]
    lg: 
    '>
      <div
  className="
    left w-full lg:w-[70%]
    lg:pt-[5rem]
    flex flex-col
    gap-10
    text-white
  "
>
  <div className="max-w-full space-y-6 text-[1.9rem] leading-relaxed">
    <p>
      Hi, I’m <strong>Ritam</strong>! I’m a full-stack web developer with hands-on
      experience in building modern, responsive web applications.
    </p>

    <p>
      I specialize in creating clean, interactive, and performance-driven user
      experiences using <strong>React, Tailwind CSS, GSAP</strong>, and the
      <strong> MERN stack</strong>.
    </p>

    <p>
      I’m passionate about writing clean, maintainable code and solving real-world
      problems through thoughtful design and efficient development.
    </p>

    <p>
      Whether working independently or as part of a team, I focus on delivering
      pixel-perfect interfaces, smooth animations, and high-performance web
      solutions.
    </p>
  </div>
</div>

      <div className="right w-[25%] h-full  flex items-center  ">
            <img className='h-[60%] w-full rounded-[50%] ' src="/ritam.jpg" alt="" />
      </div>
    </div>
  )
}

export default AboutS2
