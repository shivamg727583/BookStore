import React from 'react'

function Hero() {
  return (
   <>
    <div className='max-w-screen-2xl md:h-screen mx-auto container md:px-20 px-4 md:mt-1 mt-16 flex flex-col md:flex-row gap-10 md:gap-1 items-center justify-center '>
        <div className="w-full md:w-1/2 order-2 md:order-1 h-full pr-2 flex flex-col justify-center md:gap-10 gap-4 ">
            <h1 className='md:text-4xl font-bold text-3xl'>Hello, welcomes here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
<p className='md:text-lg  md:font-medium font-normal '>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, molestiae. ipsum dolor sit amet consectetur adipisicing elit. Labore debitis enim sint dolore impedit eaque reprehenderit? Aut omnis laudantium magnam?</p>

<label className="input input-bordered flex items-center gap-2 dark:bg-slate-800 dark:border-white">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Enter your email to login" />
</label>

<button className='w-fit bg-pink-500 hover:bg-pink-600 text-white capitalize font-medium px-3 py-2 rounded-lg '>Get Started</button>

        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 flex h-full items-center justify-center ">
           <img src="/Banner.png" alt="" className='md:w-96  w-72' />

          
        </div>

    </div>
   </>
  )
}

export default Hero