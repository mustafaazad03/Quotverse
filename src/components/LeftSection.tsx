import Image from 'next/image'
import React from 'react'
import ProfileCard from './ProfileCard'

const LeftSection = () => {
  return (
    <div className='w-1/3 lg:w-1/3 xl:w-1/3 text-white h-fit lg:block hidden'>
      <div className="border-b border-grey-primary flex space-x-1 py-4 pl-4 pr-3 justify-center">
          <Image src="/logo.png" alt="Quotverse Logo Image" width={24} height={24} loading='lazy' />
          <h1 className='font-medium text-medium'>Quotverse</h1>
        </div>
        <ProfileCard/>
    </div>
  )
}

export default LeftSection;
