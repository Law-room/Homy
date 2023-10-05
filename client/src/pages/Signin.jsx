import { useState } from 'react';
import {BiLogoGoogle} from 'react-icons/bi'
import { BiLogoFacebook } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = (event) => {
    setFormData(
      {
        ...formData,
        [event.target.id]: event.target.value,
      }
    )
  }

  

  const handleSumbit = async (event) => {
    event.preventDefault()
    try {
        setLoading(true)
        const res = await fetch('/api/auth/signin', 
        {
          method : 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        const data = await res.json()
        if (data.success===false){
          setError(data.message);
          setLoading(false);
          return;
        }
        setLoading(false)
        setError(null)
        navigate('/')
      
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }
  return (
    <div className="flex text-zinc-200 flex-col justify-center items-center ">
        <h1 className=" text-3xl text-zinc-300 font-semibold text-center my-7">
          Sign in
        </h1>
        <form onSubmit={handleSumbit} className="flex flex-col gap-4 w-96 ">
          <input type='email' placeholder="Email" className=" p-3 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-200 font-medium" id="email" onChange={handleChange}/>
          <input type='password' placeholder="Password" className=" p-3 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-200 font-medium" id="password" onChange={handleChange}/>
          {error && <p className='text-red-400'>{error}</p>}
          <button disabled={loading} className="p-3 bg-green-600 rounded-lg mt-5 w-full hover:bg-green-400 transition duration-300 disabled:opacity-50">
            {loading? 'Loading...' : 'Sign In'}
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
            Dont have an account ?
          </h1>
          <Link to={'/sign-up'} className="underline text-zinc-200">
            Sign Up
          </Link>

        </div>
      </div>
    
  )
}
