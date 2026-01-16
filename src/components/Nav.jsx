import Left from './Left'
import Right from './Right'
function Nav() {
  return (
    <div className='w-full  h-[2rem] w-full flex items-center justify-between text-white font-serif
    lg:text-2xl   p-[2rem] font-bold
    '>
      <Left/>
      <Right/>
    </div>
  )
}

export default Nav
