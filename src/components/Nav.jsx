import Left from './Left'
import Right from './Right'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"

function Nav() {
  return (
    <nav className='fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-black/40 border-b border-white/10 flex items-center justify-between text-white font-serif px-6 py-4 md:px-12 transition-all duration-300'>
      <Left />

      <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-lg">
        <a href="https://www.linkedin.com/in/ritammaty/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-blue-400 transition-all hover:scale-110">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ritam-g" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-white transition-all hover:scale-110">
          <FaGithub />
        </a>
        <a href="https://x.com/maty_ritam" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-sky-400 transition-all hover:scale-110">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/ritam.maty/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-pink-400 transition-all hover:scale-110">
          <FaInstagram />
        </a>
      </div>

      <Right />
    </nav>
  )
}

export default Nav
