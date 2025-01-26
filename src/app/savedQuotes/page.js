'use client';

import { useState, useEffect } from 'react';
import Card from '../components/card';
import { useLocalStorage } from '../components/hooks/storage';

export default function Page() {
  const [savedQuotes, setSavedQuotes] = useLocalStorage("savedQuotes", []);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const deleteQuote = (quoteToDelete) => {
    setSavedQuotes(
      savedQuotes.filter(
        (q) => q.text !== quoteToDelete.text || q.author !== quoteToDelete.author
      ));
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Saved Quotes</h1>
      <div className="flex flex-col items-center justify-center flex-grow">
        {savedQuotes.length === 0 ? (
          <p>No saved quotes yet!</p>
        ) : (
          <div>
            {savedQuotes.map((quote, index) => (
              <Card 
                key={index} 
                quote={quote} 
                deleteQuote={() => deleteQuote(quote)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}