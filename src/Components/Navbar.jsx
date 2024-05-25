import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex items-center justify-between h-20 max-w-6xl mx-auto'> 
        <Link to='/'>
            <p className='cursor-pointer text-xl uppercase font-semibold'>React Redux Shopping Cart</p>
        </Link>
       <div className="flex items-center gap-4 ">
        <Link to='/'>
            <p className='cursor-pointer text-lg font-semibold'>Home</p>
        </Link>
        <Link to='/cart'>
            <p className='cursor-pointer text-lg font-semibold'>Cart</p>
        </Link>
       </div>
    </nav>
  )
}

export default Navbar
