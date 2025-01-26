export default function Card({ quote, author, deleteQuote }) {
  return (
    <div className="bg-blue-950 p-6 rounded shadow-lg m-3">
      <p className="text-center text-lg mb-4">{quote.text}</p>
      {quote.author && <p className="text-center text-gray-500">— {quote.author}</p>}
      <div className='flex justify-center gap-3'>
        <button
          onClick={deleteQuote}
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}