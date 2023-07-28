/* eslint-disable @next/next/no-img-element */
"use client";
import Image from 'next/image'
import Dropdown from './dropdown'



export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-20 flex-1 text-center p-20">
      <div className=' bg-slate-400 rounded-[7rem] shadow-2xl flex w-11/12 max-w-10xl h-[45rem]'>

        {/* Login Section */}
        <div className=' bg-white w-3/5 p-5 rounded-tl-[3rem] rounded-bl-[3rem]'>
          <p className=' text-start p-6 font-bold text-2xl'>HAZE.</p>

         {/* Language Selector */}  
        <div className=' absolute top-[7.5rem] left-[37rem]'>
          <Dropdown/>
        </div>

        <div>
          <h1 className='text-8xl pt-[3rem] font-extrabold'>Hi there!</h1>
          <p className=' font-light text-[1rem] pt-3'>Welcome to Haze. community Dashboard</p>
        </div>

        <div className=' hover:bg-black hover:text-white p-2 rounded-xl relative top-[2.8rem] left-[6.5rem] w-[20rem] border border-xl '>
        <img
              src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png'
              alt="Google Logo"
              className="inline-block mr-2 w-8 h-8"
        />
          <a className='cursor-pointer text-[.80rem]'>Log in with Google</a>
        </div>    

        <a className=' line-clamp-2 font-light relative top-[5rem] horizontal-line text-[.80rem]'>⎯⎯⎯⎯⎯  or  ⎯⎯⎯⎯⎯ </a>    

        {/* Email and password input + Log in button */}
        <div>
        <div className='relative top-[7rem] flex justify-between items-center w-[20rem] m-auto p-3 bg-transparent border border-gray-500 text-black rounded-xl'>
          <input className='bg-transparent border-none text-black placeholder-neutral-900 focus:outline-none text-[.80rem] w-full ' placeholder='Your email'></input>
        </div>

        <div className='relative top-[7.8rem] flex justify-between items-center w-[20rem] m-auto p-3 bg-transparent border border-gray-500 text-black rounded-xl'>
          <input className='bg-transparent border-none text-black placeholder-neutral-900 focus:outline-none text-[.80rem] w-full ' placeholder='Password'></input>
        </div>

        <div>
          <button className=' relative top-[8rem] pt-2 text-blue-600 hover:underline left-[6.8rem] text-[0.80rem]'>Forgot password?</button>
        </div>

       <button className='bg-black text-white w-[19.5rem] p-2 hover:bg-neutral-900 relative top-[9.4rem] rounded-3xl'>Log In</button>
        </div>

        </div>

        {/* SignUp Section */}
        <div className='w-3/5 py-[18rem] px-12 rounded-tr-[3rem] rounded-br-[3rem] bg1'>
          <p>Signup</p>
        </div>
      </div>
    </main>
  )
}
