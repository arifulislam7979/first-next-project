import ReadButton from "@/app/components/ReadButton";
import Wishlist from "@/app/components/Wishlist";
import { IBook } from "@/app/type";
import Image from "next/image";

interface BooksDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}
const getBooks = async (): Promise<IBook[]> => {
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('error fetching books data',error);
    return [];
  }
};
const BooksDetailsPage = async ({ params }: BooksDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find((book) => book.bookId === Number(id)) as IBook;

  return (
    <div className="container mx-auto px-4 py-10">
      {" "}
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-base-100 shadow-xl">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {" "}
          {/* Book Image */}{" "}
          <div className="flex items-center justify-center bg-base-200 p-6">
            {" "}
            <Image
              src={book.image}
              alt={book.bookName}
              width={400}
              height={550}
              className="h-[400px] w-auto rounded-xl object-cover shadow-lg"
            />{" "}
          </div>{" "}
          {/* Book Details */}{" "}
          <div className="col-span-2 p-6 md:p-8">
            {" "}
            {/* Category */}{" "}
            <div className="mb-3 flex flex-wrap gap-2">
              {" "}
              <span className="badge badge-primary">
                {" "}
                {book.category}{" "}
              </span>{" "}
              {book.tags.map((tag) => (
                <span key={tag} className="badge badge-outline">
                  {" "}
                  {tag}{" "}
                </span>
              ))}{" "}
            </div>{" "}
            {/* Title */}{" "}
            <h1 className="text-3xl font-bold md:text-4xl">
              {" "}
              {book.bookName}{" "}
            </h1>{" "}
            {/* Author */}{" "}
            <p className="mt-2 text-lg text-base-content/70">
              {" "}
              by <span className="font-semibold">{book.author}</span>{" "}
            </p>{" "}
            {/* Rating */}{" "}
            <div className="mt-4 flex items-center gap-3">
              {" "}
              <div className="rating rating-sm">
                {" "}
                {[1, 2, 3, 4, 5].map((star) => (
                  <input
                    key={star}
                    type="radio"
                    className="mask mask-star-2 bg-orange-400"
                    checked={Math.round(book.rating) === star}
                    readOnly
                  />
                ))}{" "}
              </div>{" "}
              <span className="font-semibold"> {book.rating} / 5 </span>{" "}
            </div>{" "}
            {/* Review */}{" "}
            <p className="mt-5 leading-7 text-base-content/80">
              {" "}
              {book.review}{" "}
            </p>{" "}
            {/* Book Information */}{" "}
            <div className="my-6 grid grid-cols-2 gap-4 rounded-xl bg-base-200 p-4 sm:grid-cols-4">
              {" "}
              <div>
                {" "}
                <p className="text-sm text-base-content/60"> Pages </p>{" "}
                <p className="font-bold"> {book.totalPages} </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-sm text-base-content/60"> Published </p>{" "}
                <p className="font-bold"> {book.yearOfPublishing} </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-sm text-base-content/60"> Publisher </p>{" "}
                <p className="font-bold"> {book.publisher} </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-sm text-base-content/60"> Category </p>{" "}
                <p className="font-bold"> {book.category} </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Buttons */}{" "}
            <div className="flex flex-wrap gap-3">
              {" "}
              <ReadButton book={book}></ReadButton>
              
              <Wishlist book={book}></Wishlist>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default BooksDetailsPage;
