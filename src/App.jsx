
import Section1 from './components/Section1'
import Nav from './components/Nav'
import Section2 from './components/Section2'
import ScrollingSkills from './components/ScrollingSkills'

function App() {
  return (
    <>
      <main className='bg-gray-900 h-screen w-screen text-white  flex flex-col gap-2
      overflow-x-hidden overflow-y-scroll
      '>
        {/* hero section */}
      <Nav/>
      <Section1/>
      <hr />
      {/* ABOUT SECTION */}
      <Section2/>
      {/* MOVING PART */}
      <ScrollingSkills/>
      </main>
    </>
  )
}

export default App
