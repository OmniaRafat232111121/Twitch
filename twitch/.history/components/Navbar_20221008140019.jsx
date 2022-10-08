import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../public/assets/logo.png'
const Navbar = () => {
  return (
    <div className='fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10 '>
     {/*left Side*/}
     <div className='flex grow items-center justify-start'>
      <Link href="/">
      <a className='flex'>
      <Image src={Logo} alt="/" width='36' height='36' className='z-100 cursor-pointer'/>
      </a>
      </Link>
      <p></p>
     </div>
      {/*Middle Side*/}
       {/*Right Side*/}
    </div>
  )
}

export default Navbar