'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ImageKeys = '/' | '/like';

const Nav = () => {
  const path = usePathname();
  const images = {
    '/': { active: "/Home.svg", inactive: "/HomeOutline.svg", alt: "Home" },
    '/like': { active: "/Like.svg", inactive: "/LikeOutline.svg", alt: "Like" }
  };

  return (
    <div className="flex w-2/5 justify-between">
      {[ '/', '/like' ].map((link, index) => (
        <Link key={index} href={link}>
            <Image
              src={path === link ? images[link as ImageKeys].active : images[link as ImageKeys].inactive}
              alt={images[link as ImageKeys].alt}
              width={24}
              height={24}
              loading='lazy'
            />
        </Link>
      ))}
    </div>
  );
};

export default Nav;
