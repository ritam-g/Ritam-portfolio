
import Section1 from './components/Section1'
import Nav from './components/Nav'
import Section2 from './components/Section2'
import ScrollingSkills from './components/ScrollingSkills'

import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <main className='bg-gray-900 h-screen w-screen text-white  flex flex-col gap-2
      overflow-x-hidden overflow-y-scroll
      '>
        {/* hero section */}
        <Nav />
        <Section1 />
        <hr className='border-gray-800' />
        {/* ABOUT SECTION */}
        <Section2 />
        {/* MOVING PART */}
        <ScrollingSkills />

        {/* PROJECTS SECTION */}
        <Projects />

        {/* CONTACT SECTION */}
        <Contact />
      </main>
    </>
  )
}

export default App
