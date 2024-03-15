'use client'
import Image from 'next/image'
import React, { useState } from 'react'

/**
 * Renders a styled card that displays a quote, author, and other information.
 * Allows the user to like the quote.
 * 
 * @param author - The name of the author of the quote.
 * @param quote - The text of the quote.
 * @param category - The category of the quote.
 * @param subCategory - The sub-category of the quote.
 * @param like - Indicates whether the quote is liked by the user.
 * @returns The rendered QuoteCard component.
 */

type QuoteType = {
  author: string,
  quote: string,
  category: string | undefined,
  subCategory: string | undefined,
  like?: boolean
}

const QuoteCard = ({author, quote, category, subCategory, like = false}: QuoteType) => {
  const [liked, setLiked] = useState(false);
  const handleLikes = () => setLiked(!liked);
  return (
    <div className='py-4 pl-4 pr-3 flex space-x-3 text-white border-b border-grey-primary'>
      <div className="">
      <Image src="/avatar.png" alt="Profile Picture" width={36} height={36} className='rounded-full'/>
      </div>
      <div className="space-y-3 w-[90%]">
        <div className="space-y-[6px]">
          <h2 className='font-medium text-sm'>{author}</h2>
          <p className='text-[13px]'>
            {quote}
          </p>
        </div>
        <div className="flex space-x-3 items-center">
          <div onClick={handleLikes} className='cursor-pointer'>
            <Image src={liked || like ? "/liked.png" : "/LikeWhite.png"} alt="Like" width={24} height={24} />
          </div>
          <Image src="/Comment.svg" alt="Comment" width={22} height={22} />
          <Image src="/Share.svg" alt="Share" width={24} height={24} />
          </div>
          {category && (
            <div className="flex space-x-1 items-center">
              <p className='text-[13px] text-grey-secondary'>{category}</p>
              <div className='w-[2px] h-[2px] bg-grey-secondary rounded-full'></div>
              <p className='text-[13px] text-grey-secondary'>{subCategory}</p>
            </div>
          )}
      </div>
    </div>
  )
}

export default QuoteCard
