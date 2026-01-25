import React, { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution built with MERN stack. Features user authentication, product management, and payment integration.",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        github: "https://github.com/ritam-g",
        demo: "#"
    },
    {
        title: "Portfolio Website",
        description: "My personal portfolio showcasing my skills and projects. Built with React and Tailwind CSS.",
        tags: ["React", "Tailwind CSS", "GSAP"],
        github: "https://github.com/ritam-g",
        demo: "#"
    },
    {
        title: "Task Management App",
        description: "A productivity tool to manage tasks efficiently. Includes drag-and-drop functionality and real-time updates.",
        tags: ["React", "Firebase", "Context API"],
        github: "https://github.com/ritam-g",
        demo: "#"
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather application using OpenWeatherMap API and JavaScript.",
        tags: ["JavaScript", "API", "CSS"],
        github: "https://github.com/ritam-g",
        demo: "#"
    }
]

function Projects() {
    const containerRef = useRef(null)

    useGSAP(() => {
        const cards = gsap.utils.toArray('.project-card')

        gsap.fromTo(cards,
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            }
        )
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="w-full min-h-screen bg-gray-900 py-20 px-6 md:px-20 text-white">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <div key={index} className="project-card group relative bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10">
                        <div className="absolute top-0 right-0 p-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
                                <FaGithub />
                            </a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
                                <FaExternalLinkAlt />
                            </a>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 text-sm bg-gray-700 text-blue-300 rounded-full font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-16">
                <a href="https://github.com/ritam-g" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-lg font-semibold cursor-pointer">
                    See more on GitHub <FaGithub />
                </a>
            </div>
        </div>
    )
}

export default Projects
