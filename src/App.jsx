import "./App.css";
import BookCard from "./components/BookCard";
import { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { useBooks } from "./hooks/useBooks";

function App() {
  const [inputValue, setInputValue] = useState("the");
  const debouncedSearchTerm = useDebounce(inputValue, 500);
  const { books, isLoading, error } = useBooks(debouncedSearchTerm);

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="flex flex-col w-screen bg-gradient-to-r from-[#EEEBE3] via-[#c4c1d6] to-[#EEEBE3] h-[300px] shadow-lg flex justify-center items-center">
        <h1 className="text-[100px] text-[#EEEBE3] text-center font-great font-bold">
          L I T D A S H
        </h1>
        <h2 className="text-[30px] text-[#EEEBE3] text-center font-great font-regular">Descubra, leia, inspire-se. Tudo começa com uma busca.</h2>
      </div>
      <div className=" w-full max-w-6xl flex flex-col items-center gap-[20px]">
        <input
          type="text"
          placeholder="Busque por título ou autor..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-[700px] max-w-md h-[45px] px-[25px] mb-8 border rounded-full mt-[30px] bg-[#EEEBE3] border-[#c4c1d6] text-[#708C82]"
        />

        {isLoading && <p>Carregando...</p>}
        {error && <p>Ocorreu um erro ao buscar os livros.</p>}

        {!isLoading && !error && (
          <div className="mt-[80px] w-full grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[20px]">
            {books.map((book) => (
              <BookCard key={book.key} book={book}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
