import { useState, useEffect } from "react";
import { getBooks } from "../services/openLibraryAPI";

export function useBooks(getTerm) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!getTerm) {
      setBooks([]);
      return;
    }

    const fetchBooks = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getBooks(getTerm);
        setBooks(data.docs || []);
      } catch (err) {
        setError(err);
        setBooks([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, [getTerm]);

  return { books, isLoading, error };
}
