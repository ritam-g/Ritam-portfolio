import React, { useRef } from 'react'
import { FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Contact() {
    const containerRef = useRef(null)

    useGSAP(() => {
        gsap.from(".contact-item", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        })
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="w-full min-h-[80vh] bg-gray-900 flex items-center justify-center py-20 px-6">
            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 bg-gray-800/50 p-10 rounded-3xl backdrop-blur-sm border border-gray-700">

                {/* Contact Info */}
                <div className="contact-item w-full md:w-1/2 flex flex-col justify-center gap-6">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Let's work together!
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        I'm currently available for freelance work and full-time opportunities.
                        If you have a project that needs some creative touch, or just want to say hi, feel free to drop a message.
                    </p>

                    <div className="flex flex-col gap-4 mt-6">
                        <div className="flex items-center gap-4 text-xl text-gray-300">
                            <span className="text-blue-500">Email:</span>
                            <a href="mailto:ritam@example.com" className="hover:text-white transition-colors">ritam@example.com</a>
                        </div>
                    </div>

                    <div className="flex gap-6 mt-8">
                        <a href="https://www.linkedin.com/in/ritammaty/" target="_blank" rel="noopener noreferrer" className="social-icon text-2xl text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/ritam-g" target="_blank" rel="noopener noreferrer" className="social-icon text-2xl text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                            <FaGithub />
                        </a>
                        <a href="https://x.com/maty_ritam" target="_blank" rel="noopener noreferrer" className="social-icon text-2xl text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-item w-full md:w-1/2 bg-gray-900 rounded-2xl p-8 border border-gray-700 shadow-xl">
                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-400">Your Name</label>
                            <input type="text" placeholder="John Doe" className="bg-gray-800 border-b border-gray-700 focus:border-blue-500 text-white p-3 rounded-lg outline-none transition-colors" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-400">Your Email</label>
                            <input type="email" placeholder="john@example.com" className="bg-gray-800 border-b border-gray-700 focus:border-blue-500 text-white p-3 rounded-lg outline-none transition-colors" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-400">Message</label>
                            <textarea placeholder="Hello, I'd like to talk about..." rows="4" className="bg-gray-800 border-b border-gray-700 focus:border-blue-500 text-white p-3 rounded-lg outline-none transition-colors resize-none"></textarea>
                        </div>

                        <button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold tracking-wide hover:shadow-lg hover:shadow-purple-500/30 transition-all transform active:scale-95 flex items-center justify-center gap-2">
                            Send Message <FaPaperPlane className="text-sm" />
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact
