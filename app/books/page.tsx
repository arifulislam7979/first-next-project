
import BookCard from "../components/BookCard";
import { IBook } from "../type";
const getBooks = async (): Promise<IBook[]> => {
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('error fetching books data', error);
    return [];
  }
};
const Books = async () => {
  const booksData = await getBooks();
  return (
    <section className="container mx-auto my-16 px-4">
      {" "}
      {/* Header */}{" "}
      <div className="text-center mb-12">
        {" "}
        <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-600 mb-3">
          {" "}
          Our Collection{" "}
        </span>{" "}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
          {" "}
          Explore All Books{" "}
        </h2>{" "}
        <p className="max-w-2xl mx-auto mt-3 text-slate-500">
          {" "}
          Explore our carefully selected collection of classic and contemporary
          literature.{" "}
        </p>{" "}
      </div>{" "}
      {/* Cards */}{" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {" "}
        {booksData.map((book: IBook, ind: number) => {
          return <BookCard key={ind} book={book}></BookCard>;
        })}{" "}
      </div>{" "}
    </section>
  );
};
export default Books;
