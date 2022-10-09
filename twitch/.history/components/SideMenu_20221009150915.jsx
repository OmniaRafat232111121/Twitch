import React from 'react';
import { rec_channels, top_channels } from '../data/mock-data';
import { RiMovieLine } from 'react-icons/ri';
import { BsDot } from 'react-icons/bs';
import Image from 'next/image';
const SideMenu = () => {
  return (
    <div className='fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-[#0e0e10]'>
      <div>
      <p className='hidden xl:'>
      Recommanded Channels
      </p>
    
         
      </div>
     
 
      
    </div>
  );
};

export default SideMenu;