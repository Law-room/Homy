import {BiLogoGoogle} from 'react-icons/bi'
import { BiLogoFacebook } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="flex text-zinc-200 flex-col justify-center items-center ">
        <hi className=" text-3xl text-zinc-300 font-semibold text-center my-7">
          Sign Up
        </hi>
        <form className="flex flex-col gap-4 w-96 ">
          <input type='text' placeholder="Username" className="p-3 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-200 font-medium" id="username"/>
          <input type='email' placeholder="Email" className=" p-3 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-200 font-medium" id="email"/>
          <input type='password' placeholder="Password" className=" p-3 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-200 font-medium" id="password"/>
          <button className="p-3 bg-green-600 rounded-lg mt-5 w-full hover:bg-green-400 transition duration-300 disabled:opacity-50">
            Sign Up
          </button>
        </form>
        <div className="flex w-96 gap-4 text-xl  ">
          <button className="p-3 bg-zinc-600 rounded-lg my-5 w-full text-center flex items-center justify-center">
            <BiLogoGoogle/>
          </button>
          <button className="p-3 bg-zinc-600 rounded-lg my-5 w-full text-center flex items-center justify-center">
            <BiLogoFacebook/>
          </button>
        </div>
        <div className="flex w-96 gap-4 text-zinc-400 ">
          <h1> 
            already have an account ?
          </h1>
          <Link to={'/sign-in'} className="underline text-zinc-200">
            Sign In
          </Link>

        </div>
      </div>
    
  )
}
