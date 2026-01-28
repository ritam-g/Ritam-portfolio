import React, { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaArrowLeft, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa'
import { SiVite, SiSass, SiThreedotjs, SiGreensock, SiTailwindcss } from 'react-icons/si'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './projects.css'
gsap.registerPlugin(ScrollTrigger)

const techIcons = {
    "React": <FaReact className="text-blue-400" />,
    "Vite": <SiVite className="text-purple-500" />,
    "SCSS": <SiSass className="text-pink-500" />,
    "Three.js": <SiThreedotjs className="text-white" />,
    "GSAP": <SiGreensock className="text-green-500" />,
    "JavaScript": <FaJs className="text-yellow-400" />,
    "HTML": <FaHtml5 className="text-orange-500" />,
    "CSS Grid": <FaCss3Alt className="text-blue-500" />,
    "Python": <FaPython className="text-blue-300" />,
    "Tailwind": <SiTailwindcss className="text-cyan-400" />,
}

const projects = [
    {
        title: "macOS Desktop",
        category: "Web Application",
        description: "An interactive macOS-style desktop application built using React. Features a fully functional dock, window management, and native-like apps.",
        tags: ["React", "Vite", "SCSS"],
        github: "https://github.com/ritam-g/macos-desktop-react",
        demo: "https://macos-desktop-react.vercel.app/",
        image: "./mac.png"
    },
    {
        title: "DogStudio 3D",
        category: "3D Experience",
        description: "A visually stunning 3D web experience inspired by DogStudio. Built with React, Three.js, and GSAP for immersive scrolling animations.",
        tags: ["Three.js", "GSAP", "React"],
        github: "https://github.com/ritam-g/dogstudio-3d-clone",
        demo: "https://dogstudio-3d-clone.vercel.app/",
        image: "threeD.png"
    },
    {
        title: "Snake Game",
        category: "Classic Game",
        description: "A modern take on the classic Snake Game built with JavaScript and CSS Grid. Features smooth controls, score tracking, and responsive design.",
        tags: ["JavaScript", "CSS Grid", "HTML"],
        github: "https://github.com/ritam-g/snake-game",
        demo: "https://snake-game-8nzq.vercel.app/",
        image: "./snake.png"
        
    },
    {
        title: "web-image-editor",
        category: "Classic Editor",
        description: "A browser-based image editor built using HTML, CSS, and JavaScript. Supports filters like brightness, contrast, saturation, blur, grayscale, rotation, and real-time preview.",
        tags: ["JavaScript", "CSS Grid", "HTML"],
        github: "https://github.com/ritam-g/web-image-editor",
        demo: "https://web-image-editor.vercel.app/",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
    }
    ,
    {
        title: "SmartCore-AI",
        category: "Jarvis AI",
        description: "This Python script implements a voice assistant named Jarvis that can perform various tasks based on user commands. It utilizes libraries such as pyttsx3 for text-to-speech conversion, speech_recognition for voice input, wikipedia for fetching information, webbrowser for opening websites, and os for managing applications and files",
        tags: ["Python", "Voice Assistant", "AI", "Speech Recognition", "pyttsx3", "Automation"],
        github: "https://github.com/ritam-g/SmartCore-AI",
        demo: "https://github.com/ritam-g/SmartCore-AI",
        image: "data:image/jpeg;base64,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"
    }
]

function Projects() {
    const sectionRef = useRef(null)
    const scrollContainerRef = useRef(null)

    useGSAP(() => {
        const scrollContainer = scrollContainerRef.current

        // Horizontal scroll animation
        gsap.to(scrollContainer, {
            x: () => -(scrollContainer.scrollWidth - window.innerWidth + 100),
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                scrub: 1,
                start: "top top",
                end: () => "+=" + scrollContainer.scrollWidth,
                invalidateOnRefresh: true,
            }
        })
    }, { scope: sectionRef })

    const scrollPrev = () => {
        window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' })
    }

    const scrollNext = () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
    }

    return (
        <section ref={sectionRef} className="relative h-screen w-full bg-[#0f0f0f] overflow-hidden flex flex-col justify-center">
            {/* Header */}
            <div className=" flex  justify-around w-full px-10 md:px-20 z-10 flex justify-between items-end">
                <div>
                    <h2 className="text-6xl md:text-8xl font-serif text-white mb-2 tracking-tighter">
                        My Works
                    </h2>
                    <p className="text-gray-400 max-w-sm text-sm md:text-base font-light">
                        Witness the fusion of design and code through these selected projects, crafted with precision and passion.
                    </p>
                </div>
                <div className="hidden md:flex gap-4 text-white text-2xl z-20">
                    <button onClick={scrollPrev} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all cursor-pointer hover:scale-110 active:scale-95">
                        <FaArrowLeft className="opacity-80" />
                    </button>
                    <button onClick={scrollNext} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all cursor-pointer hover:scale-110 active:scale-95">
                        <FaArrowRight className="animate-pulse" />
                    </button>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div ref={scrollContainerRef} className="flex gap-10 px-10 md:px-20 items-center w-max mt-20 h-[60vh]">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        onClick={() => window.open(project.demo, "_blank")}
                        className="box relative group w-[350px] md:w-[450px] h-full flex-shrink-0 rounded-[30px] overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
                    >
                        {/* Background Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>

                        {/* Tech Stack Overlay on Hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex-col gap-4">
                            <div className="flex flex-wrap justify-center gap-3 px-10">
                                {project.tags.map((tag, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                                        style={{ transitionDelay: `${i * 100}ms` }}
                                    >
                                        <span className="text-xl">
                                            {techIcons[tag] || <span className="text-gray-400">#</span>}
                                        </span>
                                        <span className="text-white text-sm font-medium tracking-wide">
                                            {tag}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-bold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-3 py-1 rounded-full backdrop-blur-sm border border-blue-500/20">
                                    {project.category}
                                </span>
                                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="p-2 bg-white/10 rounded-full hover:bg-white text-white hover:text-black transition-all"
                                    >
                                        <FaGithub />
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="p-2 bg-white/10 rounded-full hover:bg-white text-white hover:text-black transition-all"
                                    >
                                        <FaExternalLinkAlt />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-4xl font-serif text-white mb-3 leading-tight">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 text-sm line-clamp-2 md:line-clamp-3 mb-4 font-light leading-relaxed group-hover:text-white transition-colors">
                                {project.description}
                            </p>

                            <div className="h-[1px] w-full bg-white/20 mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                            <div className="flex flex-wrap gap-2 group-hover:opacity-0 transition-opacity duration-300">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-xs text-gray-400 font-mono">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Decoration */}
            <div className="absolute bottom-10 right-10 md:right-20 text-white/5 text-[10rem] font-serif font-bold pointer-events-none select-none z-0">
                0{projects.length}
            </div>
        </section>
    )

}

export default Projects
