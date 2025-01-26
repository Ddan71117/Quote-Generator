'use client';

import { useState } from 'react'
import { useLocalStorage } from './components/hooks/storage';

export default function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [buttonText, setButtonText] = useState("Save Quote");

  const [savedQuotes, setSavedQuotes] = useLocalStorage("savedQuotes", []);

  const fetchQuote = async () => { 
    try {
      const res = await fetch("/api/quote");
      const data = await res.json();
      setQuote(data.quoteText || "No quote found. Please try again.");
      setAuthor(data.quoteAuthor || "Unknown");
    } catch (error) {
      console.error("Unable to fetch quote", error);
      setQuote("Unable to fetch quote");
      setAuthor("");
    }
  };

  const saveQuote = () => {
    if (quote && !savedQuotes.some((q) => q.text === quote && q.author === author)) {
      setSavedQuotes([...savedQuotes, { text: quote, author }]);
      setButtonText("Saved!");
      setTimeout(() => {
        setButtonText("Save Quote");
      }, 1500);
    }
  };

  return ( 
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-8">Random Quote Generator</h1>
      <div className="bg-blue-950 p-6 rounded shadow-lg">
        <p className="text-lg mb-4">{quote || "Click the button to get a quote!"}</p>
        {author && <p className="text-gray-500">— {author}</p>}
        <div className='flex justify-center gap-3'>
          <button
            onClick={fetchQuote}
            className="mt-4 px-4 py-2 bg-[#F29F58] text-white rounded hover:bg-blue-600"
          >
            Get Quote
          </button>
          <button
            onClick={saveQuote}
            className="mt-4 px-4 py-2 bg-[#F29F58] text-white rounded hover:bg-blue-600"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};