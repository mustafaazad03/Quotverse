import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Trending = () => {
  const trendingTopics = [
    {
      id: 1,
      title: 'age',
      quotes: 123
    },
    {
      id: 2,
      title: 'education',
      quotes: 93
    },
    {
      id: 3,
      title: 'science',
      quotes: 85
    },
    {
      id: 4,
      title: 'games',
      quotes: 71
    },
    {
      id: 5,
      title: 'design',
      quotes: 69
    }
  ];
  return (
    <div className='p-12 space-y-6 text-white'>
      <div className="w-full flex justify-between items-center">
        <h2 className='font-bold text-xl'>Trending Topics</h2>
        <Image src="/settings.png" alt="Settings" width={20} height={20} />
      </div>
      <div className="">
      <Link href="#" className='text-blue-primary text-sm font-medium'>
        show all quotes
      </Link>
      </div>
      <div className="space-y-4 w-full">
        {trendingTopics.map((topic) => (
          <div key={topic.id} className="space-y-[2px]">
            <p className='uppercase text-grey-secondary text-xs tracking-[1px]'>{topic.title}</p>
            <Link href={`/topic/${topic.title}`} passHref>
              <p className='font-medium text-sm'>#{topic.title}</p>
            </Link>
            <p className='text-xs text-grey-secondary'>{topic.quotes} quotes</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trending;
