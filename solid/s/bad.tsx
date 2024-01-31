const BookList = () => {
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

  return (
    <div>
      {books?.map((book) => (
        <Book title={book.title} image={book.image} key={book.id} />
      ))}
    </div>
  );
};
