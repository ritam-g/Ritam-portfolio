import React, { useRef, useState } from 'react'
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaCopy } from 'react-icons/fa'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import emailjs from '@emailjs/browser'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const containerRef = useRef(null)
    const formRef = useRef(null)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [copied, setCopied] = useState(false)

    useGSAP(() => {
        // Text animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        })

        tl.from(".contact-header", {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "circ.out"
        })
            .from(".contact-subtext", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.8")
            .from(".info-item", {
                x: -50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.4")
            .from(".social-icon", {
                scale: 0,
                opacity: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: "back.out(1.7)"
            }, "-=0.2")

        // Form animation
        gsap.from(".form-card", {
            x: 100,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
            }
        })

        // Floating animation for blobs
        gsap.to(".blob", {
            y: "random(-50, 50)",
            x: "random(-50, 50)",
            duration: "random(3, 5)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
                amount: 2,
                from: "random"
            }
        })

    }, { scope: containerRef })

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSending(true)

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        if (!serviceId || !templateId || !publicKey || serviceId === 'YOUR_SERVICE_ID') {
            alert("Email functionality is not configured yet. Please add your EmailJS credentials to the .env file.")
            setIsSending(false)
            return
        }

        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
            .then((result) => {
                console.log(result.text)
                setIsSubmitted(true)
                setIsSending(false)
                formRef.current.reset()
                setTimeout(() => setIsSubmitted(false), 5000)
            }, (error) => {
                console.log(error.text)
                alert("Failed to send message. Please try again or contact me directly via email.")
                setIsSending(false)
            });
    }

    const copyEmail = () => {
        navigator.clipboard.writeText("ritammaty@gmail.com")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    // Magnetic effect simulation for social icons
    const handleMagnetic = (e) => {
        const item = e.currentTarget
        const rect = item.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(item, {
            x: x * 0.4,
            y: y * 0.4,
            duration: 0.3,
            ease: "power2.out"
        })
    }

    const resetMagnetic = (e) => {
        gsap.to(e.currentTarget, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
        })
    }

    return (
        <section ref={containerRef} className="relative py-32 px-6 md:px-20 bg-[#080808] text-white overflow-hidden min-h-screen flex items-center">
            {/* Background Decorations */}
            <div className="blob absolute top-[10%] left-[5%] w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="blob absolute bottom-[10%] right-[10%] w-96 h-96 bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[200px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center lg:items-start">

                    {/* Left Content */}
                    <div className="lg:w-[45%] space-y-12">
                        <div className="space-y-4">
                            <h2 className="contact-header text-7xl md:text-9xl font-heading leading-[0.8] tracking-tighter">
                                Get In <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Touch</span>
                            </h2>
                            <p className="contact-subtext text-gray-400 text-lg md:text-xl font-light max-w-sm leading-relaxed">
                                Ready to build something extraordinary? Send me a message and let's make it happen.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="info-item flex items-center gap-6 group cursor-pointer" onClick={copyEmail}>
                                <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500">
                                    <FaEnvelope className="text-2xl text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-xl font-medium group-hover:text-blue-400 transition-colors">ritammaty@gmail.com</p>
                                        <div className={`p-1.5 rounded-lg bg-white/5 transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                            {copied ? <FaCheckCircle className="text-green-500" /> : <FaCopy className="text-gray-400 text-xs" />}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="info-item flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-500">
                                    <FaMapMarkerAlt className="text-2xl text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                                    <p className="text-xl font-medium">West Bengal, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons with Magnetic Hover */}
                        <div className="flex flex-wrap gap-4 md:gap-6 pt-4">
                            {[
                                { icon: <FaLinkedin />, color: 'hover:bg-blue-600', link: 'https://www.linkedin.com/in/ritammaty/' },
                                { icon: <FaTwitter />, color: 'hover:bg-black', link: 'https://x.com/maty_ritam' },
                                { icon: <FaGithub />, color: 'hover:bg-[#333]', link: 'https://github.com/ritam-g' },
                                { icon: <FaInstagram />, color: 'hover:bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600', link: 'https://www.instagram.com/ritam.maty/' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onMouseMove={handleMagnetic}
                                    onMouseLeave={resetMagnetic}
                                    className={`social-icon w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 group ${social.color}`}
                                >
                                    <span className="text-2xl md:text-3xl text-white group-hover:scale-110 transition-transform">
                                        {social.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-[55%] w-full h-full relative">
                        <div className="form-card w-full bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-10 md:p-16 rounded-[40px] md:rounded-[60px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] relative overflow-hidden group/form hover:border-blue-500/20 transition-all duration-700">
                            {/* Decorative inner glow */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover/form:bg-blue-500/10 transition-colors duration-700"></div>
                            {isSubmitted ? (
                                <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
                                    <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center">
                                        <FaCheckCircle className="text-5xl text-green-500 animate-bounce" />
                                    </div>
                                    <h3 className="text-4xl font-heading">Message Sent!</h3>
                                    <p className="text-gray-400 max-w-xs">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="px-8 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                    >
                                        Send another
                                    </button>
                                </div>
                            ) : (
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <input
                                                required
                                                name="from_name"
                                                type="text"
                                                placeholder="Your Name"
                                                className="w-full bg-transparent border-b border-white/20 px-0 py-4 focus:outline-none focus:border-blue-500 transition-all text-xl font-light placeholder:text-gray-600"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <input
                                                required
                                                name="from_email"
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full bg-transparent border-b border-white/20 px-0 py-4 focus:outline-none focus:border-blue-500 transition-all text-xl font-light placeholder:text-gray-600"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <input
                                            required
                                            name="subject"
                                            type="text"
                                            placeholder="Subject"
                                            className="w-full bg-transparent border-b border-white/20 px-0 py-4 focus:outline-none focus:border-blue-500 transition-all text-xl font-light placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <textarea
                                            required
                                            name="message"
                                            rows="4"
                                            placeholder="Tell me about your vision..."
                                            className="w-full bg-transparent border-b border-white/20 px-0 py-4 focus:outline-none focus:border-blue-500 transition-all text-xl font-light placeholder:text-gray-600 resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        disabled={isSending}
                                        type="submit"
                                        className="group relative inline-flex items-center justify-center px-12 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span className="relative z-10 flex items-center gap-3">
                                            {isSending ? "Sending..." : "Send Message"} <FaPaperPlane className={`text-sm ${isSending ? "" : "group-hover:translate-x-1 group-hover:-translate-y-1"} transition-transform`} />
                                        </span>
                                        {!isSending && <div className="absolute inset-0 bg-blue-500 transition-transform duration-500 -translate-x-full group-hover:translate-x-0"></div>}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Decorative ring */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-white/5 rounded-full pointer-events-none"></div>
                    </div>
                </div>
            </div>

            {/* Side Label */}
            <div className="hidden xl:block absolute left-10 bottom-32 -rotate-90 origin-left">
                <p className="text-white/10 text-6xl font-heading font-black tracking-tighter uppercase select-none pointer-events-none">
                    Connection
                </p>
            </div>

        </section>
    )
}

export default Contact
