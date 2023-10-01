import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex justify-between bg-zinc-800 p-3 items-center shadow-lg ">
        <Link to='/'>
            <h1 className="text-zinc-200 sm:font-extrabold font-bold sm:text-4xl text-2xl transition ease-in-out  ">
                HOMY
            </h1>
        </Link>
        <form className="bg-zinc-700 rounded-md flex items-center pr-5 focus:outline-1 ">
            <input type="text" placeholder="Search..." className="sm:px-10 w-32 sm:w-64 sm:py-3 py-1 px-2 text-lg text-zinc-200 placeholder-zinc-300 bg-transparent focus:outline-none ">
            </input>
            <FaSearch className='text-zinc-500 sm:text-xl '/>
        </form>
        <ul className='flex items-center gap-2 sm:gap-5 text-zinc-200 font-medium'>
            <Link to='/'>
                <li className='hidden sm:inline hover:cursor-pointer hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
                <li className='hidden sm:inline hover:cursor-pointer hover:underline'>About</li>
            </Link>
            <Link to='/sign-in'>
                <li className='inline hover:cursor-pointer hover:underline'>Sign in</li>
            </Link>

        </ul>
    </header>
  )
}
