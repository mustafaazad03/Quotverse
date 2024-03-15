import QuoteCard from '@/components/QuoteCard'
import { QuoteData } from '@/data/quote'
import React from 'react'

const like = () => {
  return (
    <>
      {QuoteData.map((quote) => (
        <QuoteCard key={quote.id} author={quote.author} quote={quote.quote} category={quote.category} subCategory={quote.subCategory} like={true}/>
      ))}
    </>
  )
}

export default like
