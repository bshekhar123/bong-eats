import React from 'react'
import pic1 from "../assets/1.1.jpg"

const Hero = () => {
  return (
    <div className="max-w-[1640px]  mx-auto p-4">
      <div className='max-h-[500px] relative'>

        <div className='absolute w-full h-full text-white max-h-[500px] bg-black/60 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> The <span className='text-[#FF0000]'> Best </span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>  <span className='text-[#FF0000]'> Food </span>Delivered</h1>

        </div>
        <img className='w-full max-h-[500px] object-cover' src={pic1} alt="/" />
      </div>



      
    </div>
  )
}

export default Hero