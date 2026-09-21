import Image from "next/image";
import { IBook } from "../type";
import Link from "next/link";
interface IBookProps {
  book: IBook;
}

const BookCard = ({ book }: IBookProps) => {
  return (
    <article
      key={book.bookId}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {" "}
      {/* Image Area */}{" "}
      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-indigo-50 via-slate-100 to-purple-50">
        {" "}
        {/* Category */}{" "}
        <span className="absolute left-4 top-4 z-20 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-indigo-600 shadow-sm backdrop-blur">
          {" "}
          {book.category}{" "}
        </span>{" "}
        {/* Rating */}{" "}
        <div className="absolute right-4 top-4 z-20 flex items-center gap-1 rounded-full border border-amber-200 bg-white/90 px-3 py-1.5 text-sm font-bold text-slate-700 shadow-sm backdrop-blur">
          {" "}
          <span className="text-amber-500">★</span> {book.rating}{" "}
        </div>{" "}
        {/* Decorative Circle */}{" "}
        <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-indigo-200/30 blur-2xl" />{" "}
        <div className="absolute -right-16 -top-10 h-40 w-40 rounded-full bg-purple-200/30 blur-2xl" />{" "}
        {/* Book Cover */}{" "}
        <div className="absolute left-1/2 top-1/2 h-60 w-40 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2">
          {" "}
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            unoptimized
            sizes="160px"
            className="object-cover"
          />{" "}
        </div>{" "}
      </div>{" "}
      {/* Content */}{" "}
      <div className="p-6">
        {" "}
        {/* Tags */}{" "}
        <div className="mb-4 flex flex-wrap gap-2">
          {" "}
          {book.tags?.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600"
            >
              {" "}
              #{tag}{" "}
            </span>
          ))}{" "}
        </div>{" "}
        {/* Title */}{" "}
        <h3 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
          {" "}
          {book.bookName}{" "}
        </h3>{" "}
        {/* Author */}{" "}
        <p className="mt-1 text-sm text-slate-500">
          {" "}
          By{" "}
          <span className="font-semibold text-slate-700">
            {" "}
            {book.author}{" "}
          </span>{" "}
        </p>{" "}
        {/* Review */}{" "}
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">
          {" "}
          {book.review}{" "}
        </p>{" "}
        {/* Divider */} <div className="my-5 h-px bg-slate-100" />{" "}
        {/* Bottom Info */}{" "}
        <div className="flex items-center justify-between">
          {" "}
          <div>
            {" "}
            <p className="text-xs text-slate-400">Published by</p>{" "}
            <p className="mt-1 text-sm font-semibold text-slate-700">
              {" "}
              {book.publisher}{" "}
            </p>{" "}
          </div>{" "}
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-right">
            {" "}
            <p className="text-xs text-slate-400">Pages</p>{" "}
            <p className="text-sm font-bold text-slate-700">
              {" "}
              {book.totalPages}{" "}
            </p>{" "}
          </div>{" "}
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-right">
            {" "}
            <p className="text-xs text-slate-400">Year</p>{" "}
            <p className="text-sm font-bold text-slate-700">
              {" "}
              {book.yearOfPublishing}{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        {/* Button */}{" "}
        <Link href={`/books/${book.bookId}`}>
            <button className="mt-6 w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-200 active:scale-[0.98] cursor-pointer">
            {" "}
                View Details →{" "}
            </button>{" "}
        </Link>
      </div>{" "}
    </article>
  );
};

export default BookCard;
