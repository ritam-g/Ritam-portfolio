import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function ScrollingSkills() {
  const skillsRef = useRef(null);

  useGSAP(() => {
    gsap.to(skillsRef.current, {
      x: "-50%",
      duration: 20,
      repeat: -1,
      ease: "linear",
      
    });
  });

  return (
    <section className="w-full  py-10 bg-black">
      <div
        ref={skillsRef}
        className="flex gap-12 whitespace-nowrap text-4xl font-semibold text-white"
      >
        <span>🚀 MERN Stack</span>
        <span>⚡ REST API</span>
        <span>🎨 Tailwind CSS</span>
        <span>⚛️ React</span>
        <span>🧠 DSA</span>
        <span>🐍 Python</span>
        <span>☕ Java</span>
        <span>🐧 Linux</span>
        <span>📦 OOPs</span>

        {/* duplicate for seamless loop */}
        <span>🚀 MERN Stack</span>
        <span>⚡ REST API</span>
        <span>🎨 Tailwind CSS</span>
        <span>⚛️ React</span>
        <span>🧠 DSA</span>
        <span>🐍 Python</span>
        <span>☕ Java</span>
        <span>🐧 Linux</span>
        <span>📦 OOPs</span>
      </div>
    </section>
  );
}

export default ScrollingSkills;
