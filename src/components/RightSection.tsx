import Image from 'next/image'
import React from 'react'
import Trending from './Trending'

const RightSection = () => {
  return (
    <div className='w-1/6 lg:w-1/3 xl:w-1/3 lg:block hidden'>
      <div className=" border-b border-grey-primary py-4 pb-[27px] pl-4 pr-3 flex justify-end">
          <Image src="/Hamburger.png" alt="Hamburger Menu" width={400} height={340}  className='w-auto h-auto'/>
        </div>
        <Trending/>
    </div>
  )
}

export default RightSection
