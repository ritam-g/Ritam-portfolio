
import Section1 from './components/Section1'
import Nav from './components/Nav'
import Section2 from './components/Section2'
import ScrollingSkills from './components/ScrollingSkills'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <main className='bg-gray-900 min-h-screen w-full text-white flex flex-col gap-2 overflow-x-hidden'>
        {/* hero section */}
        <Nav />
        <Section1 />
        <hr className='border-gray-800' />
        {/* ABOUT SECTION */}
        <Section2 />
        {/* MOVING PART */}
        <ScrollingSkills />

        {/* PROJECTS SECTION */}
        <div className="w-full">
          <Projects />
        </div>

        {/* CONTACT SECTION */}
        <Contact />
      </main>

    </>
  )
}

export default App
