"use client";

import { useContext } from "react";
import { IBook } from "../type";
import { bookContext } from "../context/BooksContext";
import { toast } from "react-toastify";

interface ReadButtonProps {
  book: IBook;
}
const ReadButton = ({ book }: ReadButtonProps) => {
  const { readBooks, setReadBooks } = useContext(bookContext);

  const handleReadBook = () => {
    console.log("read", book);
    setReadBooks([...readBooks, book]);
    toast.success(`You have read ${book.bookName}`);
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={() => handleReadBook()}>
        {" "}
        📖 Read Book
      </button>
      {/* testing */}
    </div>
  );
};

export default ReadButton;
