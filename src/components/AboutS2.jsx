import React from 'react'

function AboutS2() {
  return (
    <div className='AboutS2 w-full h-full
     flex 
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
        <div className="max-w-full space-y-6 text-[1.2rem] md:text-[1.5rem] leading-relaxed text-gray-300 font-light">
          <p>
            Hi, I’m <strong className="text-white font-semibold">Ritam</strong>! I’m a passionate <strong className="text-blue-400">MERN Stack Full Stack Developer</strong> with a knack for building robust and scalable web applications.
          </p>

          <p>
            My core expertise lies in <strong className="text-white">MongoDB, Express.js, React, and Node.js</strong>. beyond the web, I have strong proficiency in <strong className="text-yellow-400">Java</strong> and <strong className="text-yellow-300">JavaScript</strong>, along with a solid understanding of <strong className="text-blue-300">Python</strong>.
          </p>

          <p>
            I love translating complex problems into elegant code. Whether it's crafting responsive front-end interfaces or designing efficient back-end architecture, I strive for perfection in every pixel and line of code.
          </p>

          <p>
            Always eager to learn and adapt, I stay up-to-date with the latest tech trends to deliver modern, high-performance solutions.
          </p>
        </div>
      </div>

      <div className="right w-[25%] h-full  flex items-start  justify-end 
      lg:pt-[5rem]  
      
      ">
        <img className=' w-full rounded-[50%] ' src="/ritam.jpg" alt="" />
      </div>
    </div>
  )
}

export default AboutS2
