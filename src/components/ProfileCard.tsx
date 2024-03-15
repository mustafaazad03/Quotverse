import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className='w-full p-12 space-y-4 text-white'>
      <Image src="/avatar.png" alt="Profile Picture" width={64} height={64} className='rounded-full'/>
      <div className="space-y-2">
        <h2 className='font-bold text-xl'>Jhon Doe</h2>
        <p className='text-xs font-medium'>
          jhondoe
        </p>
      </div>
      <p className='font-medium text-xs'>UI Developer | Let&apos;s redesign the world</p>
      <div className="flex space-x-1 items-center">
        <p className='text-[13px] text-grey-secondary'>2957 likes</p>
        <div className='w-[2px] h-[2px] bg-grey-secondary rounded-full'></div>
      </div>
    </div>
  )
}

export default ProfileCard
