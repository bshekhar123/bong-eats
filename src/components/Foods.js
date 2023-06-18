import React, { useState } from 'react'
import { data } from "../data/Data.js"

const Foods = () => {
    const [foods, setFoods] = useState(data)


const filterType= (category) => {
    setFoods(
        data.filter((item) => {
            return item.category === category;
        })
    )
}

const filterPrice =(price)=>{
    setFoods(
        data.filter((item) =>{
            return item.price === price ;
        }))
}

    return (
        <div className=' max-w-[1640px] mx-auto px-4 py-12   '>
            <h1 className='text-[#FF0000] font-bold text-4xl text-center '>
                Top Rated Menu Items
            </h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={()=> setFoods(data)} className='border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white m-1'>All</button>
                        <button onClick={()=> filterType("Bengali thali")}
                         className='border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white m-1'>Bengali thali</button>
                        <button onClick={()=> filterType("Seperate Items")}
                         className='border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white m-1'>Seperate Items</button>
                        <button onClick={()=> filterType("Biryani")}
                          className='border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white m-1'>Biryani</button>
                       <button onClick={()=> filterType("Sweet Dish")}
                         className='border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white m-1'>Sweet Dish</button>
                    </div>
                </div>

                <div>
                    <p className='font-bold text-gray-700'>Filter Prizes</p>
                    <div className='flex flex-wrap justify-between max-w-[390px] w-full'>
                        <button onClick={()=> filterPrice("20")} className='border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white m-1'> 20 </button>
                        <button onClick={()=> filterPrice("30")} className='border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white m-1'> 30 </button>
                        <button onClick={()=> filterPrice("50")} className='border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white m-1'> 50 </button>
                        <button onClick={()=> filterPrice("70")} className='border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white m-1'> 70 </button>
                        <button onClick={()=> filterPrice("90")} className='border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white m-1'> 90 </button>
                        <button onClick={()=> filterPrice("100")} className='border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white m-1'> 100 </button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (
                    <div key={index} className='border rounded-lg shadow-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name}
                        

                        className='w-full h-[200px] object-cover rounded-t-lg   '
                         />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-[#FF0000] text-white rounded-xl p-1'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Foods;