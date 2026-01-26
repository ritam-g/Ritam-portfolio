import React from 'react'

function AboutS2() {
  return (
    <div className='AboutS2 w-full h-full flex lg:'>
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

  <div
    className="right w-[25%] h-full flex items-start justify-end lg:pt-[5rem]"
  >
    <img className="w-full rounded-[50%]" src="/ritam.jpg" alt="Ritam Profile" />
  </div>
</div>

  )
}

export default AboutS2
