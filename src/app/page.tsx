import Nav from "@/components/Nav";
import QuoteCard from "@/components/QuoteCard";
import { QuoteData } from "@/data/quote";

export default function Home() {
  return (
    <>
      {QuoteData.map((quote) => (
        <QuoteCard key={quote.id} author={quote.author} quote={quote.quote} category={quote.category} subCategory={quote.subCategory}/>
      ))}
    </>
  );
}
