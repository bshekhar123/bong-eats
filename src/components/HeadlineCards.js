import React from 'react'
import pic2 from "../assets/1.15.jpg"
import pic3 from "../assets/1.14.png"
import pic4 from "../assets/1.12.png"


const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
    <div className='rounded-xl relative'>
        <div className='absolute w-full  h-full ng-black/50 rounded-xl text-white '>
            <p className='font-bold text-2xl px-2 pt-4 '>Jamai Soshti Special</p>
            <p className='px-2'>Upto 31 July 2023</p>
            <button className='border-white hover:bg-white hover:text-black mx-2 absolute  bottom-4'>Order Now</button>
        </div>

        <img 
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src={pic2} alt="/"/>
    
    
    </div>

    <div className='rounded-xl relative'>
        <div className='absolute w-full  h-full ng-black/50 rounded-xl text-white '>
            <p className='font-bold text-2xl px-2 pt-4 '>Non Veg Special</p>
            <p className='px-2'>Chicken, Mutton and many more</p>
            <button className='border-white hover:bg-white hover:text-black mx-2 absolute  bottom-4'>Order Now</button>
        </div>

        <img 
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src={pic4} alt="/"/>
    
    
    </div>

    <div className='rounded-xl relative'>
        <div className='absolute w-full  h-full ng-black/50 rounded-xl text-white '>
            <p className='font-bold text-2xl px-2 pt-4 '>Mishti Mukh</p>
            <p className='px-2'>Bengali Pithe</p>
            <button className='border-white hover:bg-white hover:text-black mx-2 absolute  bottom-4'>Order Now</button>
        </div>

        <img 
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src={pic3} alt="/"/>
    
    
    </div>

    </div>
    
  )
}

export default HeadlineCards