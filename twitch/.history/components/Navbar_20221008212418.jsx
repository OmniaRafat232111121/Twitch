import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment,useState } from 'react';
import Logo from '../public/assets/logo.png';
import { Menu, Transition } from '@headlessui/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsPerson, BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
function classNames(...classes){
  return classes.filter(Boolean).join(' ');
}
const Navbar = () => {
  const [nav,setNav]=useState(false)

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10 '>
     {/*left Side*/}
     <div className='flex grow items-center justify-start'>
      <Link href="/">
      <a className='flex'>
      <Image src={Logo} alt="/" width='36' height='36' className='z-100 cursor-pointer'/>
      </a>
      </Link>
      <p className='p-4'>Browse</p>
      <div className='p-4'>
      <Menu as='div' className='relative text-left'>
      <div className='flex'>
        <Menu.Button>
          <BsThreeDotsVertical size={20} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active
                      ? 'bg-gray-500 text-gray-100'
                      : 'text-gray-200',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active
                      ? 'bg-gray-500 text-gray-100'
                      : 'text-gray-200',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active
                      ? 'bg-gray-500 text-gray-100'
                      : 'text-gray-200',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
      </div>
     </div>
      {/*Middle Side*/}
      <div className='hidden md:flex grow-[2] items-center justify-center'>
        <div className='bg-gray-500 text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-2xl'>
      <div>
      <input   type='text'
      className='bg-transparent border-none text-white focus:outline-none'
      placeholder='Search' />
      </div>
      <div>
      <BsSearch  />
    </div>
      </div>
      </div>
       {/*Right Side*/}
       <div className='hidden md:flex grow items-center justify-end'>
          <div className='flex items-center'>
            <Link href='/account'>
              <button className='px-4 py-[6px] rounded-lg font-bold bg-[#9147ff] mr-2'>
                Account
              </button>
            </Link>
            <BsPerson size={30} />
          </div>
      
      </div>
      {/*Humbger Menu*/}
      <div  onCLick={handleNav} className='block md:hidden z-10 cursor-pointer'>
      {nav ? <AiOutlineCLose size={25}/> : <AiOutlineMenu size={25} />}
      </div>
      {/*MobilePhone*/}
      <div 
      className={
        nav
          ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300'
          : 'md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300'
      }/>
    <ul className='text-center'>
    <li className='p-4 text-3xl font-bold'>
    <Link href="/"> Home</Link>
    </li>
    <li className='p-4 text-3xl font-bold'>
    <Link href="/#live"> Live Channels </Link>
    </li>
    <li className='p-4 text-3xl font-bold'>
    <Link href="/top">Top Categories</Link>
    </li>
    <li className='p-4 text-3xl font-bold'>
    <Link href="/accout">Account</Link>
    </li>
    </ul>
      </div>
    </div>
  )
}

export default Navbar
