
import Section1 from './components/Section1'
import Nav from './components/Nav'
import Section2 from './components/Section2'

function App() {
  return (
    <>
      <main className='bg-gray-900 h-screen w-screen text-white 
      overflow-x-hidden overflow-y-scroll
      '>
        {/* hero section */}
      <Nav/>
      <Section1/>
      <hr />
      {/* ABOUT SECTION */}
      <Section2/>
      </main>
    </>
  )
}

export default App
