import React from 'react'

const loading = () => {
  const skeletons = Array.from({ length: 4 }, (_, index) => index);
  return (
    <>
    {skeletons.map((index) => (
    <div key={index} className="py-4 pl-4 pr-3 flex space-x-3 text-white border-b border-grey-primary animate-pulse">
        <div className="w-10 h-10 bg-gray-300/50 rounded-full"></div>
        <div className="flex-1 space-y-4">
          <div className="h-4 bg-gray-300/50 rounded"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300/50 rounded"></div>
            <div className="h-4 bg-gray-300/50 rounded"></div>
            <div className="h-4 bg-gray-300/50 rounded"></div>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-300/50 rounded-full"></div>
            <div className="ml-2 w-6 h-6 bg-gray-300/50 rounded-full"></div>
            <div className="ml-2 w-6 h-6 bg-gray-300/50 rounded-full"></div>
          </div>
        </div>
      </div>
    ))}
    </>
  )
}

export default loading
