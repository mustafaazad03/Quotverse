import QuoteCard from '@/components/QuoteCard'
import TopicTopBar from '@/components/TopicTopBar'
import { QuoteData } from '@/data/quote'
import React from 'react'

const topics = () => {
  return (
    <>
    <TopicTopBar/>
     {/* We can filter the data according to the topic */}
      {QuoteData.map((quote) => (
        <QuoteCard key={quote.id} author={quote.author} quote={quote.quote} category={quote.category} subCategory={quote.subCategory}/>
      ))}
    </>
  )
}

export default topics
