import { useState, useEffect } from 'react';

const useGetBooks = () => {
  // We moved the fetching logic into a custom hook
  const [books, setBooks] = useState<IBook[]>([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://api.com/books');
      const data = await JSON.parse(response);
      setBooks(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Return only the final books result
  return { books };
};

const BookList = () => {
  // We call the hook and retrieve the books
  const { books } = useGetBooks();

  return (
    <div>
      {books?.map((book) => (
        <Book title={book.title} image={book.image} key={book.id} />
      ))}
    </div>
  );
};
