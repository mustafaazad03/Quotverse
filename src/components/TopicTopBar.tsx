'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const TopicTopBar = () => {
  const query = usePathname();
  const name = query.split('/')[2].split('-').join(' ') as string;
  return (
    <div className='flex items-center space-x-[10px] w-full p-3 text-white border-b border-grey-primary'>
      <Link href="/" passHref>
        <Image src="/backspace.png" alt="Back" width={22} height={22} />
      </Link>
      <div className="font-medium text-[10px] w-[90%]">
        <h2 className='uppercase tracking-[2px] text-grey-secondary'>topic</h2>
        <h1 className='text-base'># <span className='font-extrabold capitalize'>{name}</span></h1>
      </div>
    </div>
  )
}

export default TopicTopBar
