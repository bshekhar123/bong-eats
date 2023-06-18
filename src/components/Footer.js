import React from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag } from "react-icons/ai"
import {BsFillCartFill, BsFillSaveFill} from "react-icons/bs"
import {TbTruckDelivery} from "react-icons/tb"
import {MdFavorite, MdHelp} from "react-icons/md"
import {FaWallet, FaUserFriends} from "react-icons/fa"

const Footer = () => {
  return (<div className='max-w-[1640px] bg-black mx-auto flex justify-between items-center p-4'>

<div className='flex items-center' >
                
                <h1 className='text-2xl sm:text-3xl text-white lg:text-4xl px-2 '>
                    Bong <span className='text-[#FF0000] font-bold'>Eats</span>
                </h1>
               
            </div>

          

    <div className="text-xs sm:text-sm text-white lg:text-base px-2">
      
      Copyright &copy; 2023. All rights reserved
    </div>
  </div>);
};

export default Footer;
