import Image from 'next/image'
import React from 'react'

const CategoriesItem = ({img,tite,viewes,tag1,tag2}) => {
  return (
    <div className='p-2' >
    <Image
    <Image src={img} width='261' height='350' alt='/' />
    <div>
    <p className='font-bold'>{title}</p>
    <p className='text-sm text-gray-500 py-[2px]'>{viewers}</p>
    </div>
    </div>
  )
}

export default CategoriesItem
