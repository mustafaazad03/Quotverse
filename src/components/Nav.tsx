'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Nav = () => {
  const path = usePathname();
  return (
    <div className="flex w-2/5 justify-between">
            <Link href="/">
              {path === '/' ? <Image src="/Home.svg" alt="Home" width={24} height={24} /> : <Image src="/HomeOutline.svg" alt="Home" width={24} height={24} />}
            </Link>
            <Link href="/like">
              {path === '/like' ? <Image src="/Like.svg" alt="Like" width={24} height={24} /> : <Image src="/LikeOutline.svg" alt="Like" width={24} height={24} />}
            </Link>
          </div>
  )
}

export default Nav
