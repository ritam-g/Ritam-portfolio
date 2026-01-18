import React from 'react'
import Section2Nav from './Section2Nav'
import AboutS2 from './AboutS2'

function Section2() {
  return (
    <div className='Section2 w-[100vw]  
    lg:mt-[1rem]  p-[5rem] 
    '>
      <Section2Nav/>
      <AboutS2/>
    </div>
  )
}

export default Section2
