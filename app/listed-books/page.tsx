"use client";
import React, { useContext, useState } from "react";
import { bookContext } from "../context/BooksContext";
import { IBook } from "../type";
import Image from "next/image";
import Link from "next/link";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(bookContext);
  const [sort, setSort] = useState<"rating" | "year" | "page">("rating");

  const sortBooks = (book: IBook[]) => {
    const sortedBook = [...book];
    if (sort === "rating") {
      sortedBook.sort((a, b) => b.rating - a.rating);
    } else if (sort === "page") {
      sortedBook.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sort === "year") {
      sortedBook.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBook;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortWishlist = sortBooks(wishlist);

  return (
    <div className="container mx-auto py-[20px]">
      <h1 className="my-7 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center">
        Listed Books
      </h1>

      <div className="text-center">
        <select
          defaultValue="Pick a Runtime"
          className="select select-success"
          value={sort}
          onChange={(e) =>
            setSort(e.target.value as "rating" | "year" | "page")
          }
        >
          <option disabled={true}>Sort by</option>
          <option value={"rating"}>Rating</option>
          <option value={"year"}>Publish year</option>
          <option value={"page"}>Number of page</option>
        </select>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: IBook) => {
              return (
                <div
                  key={book.bookId}
                  className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-base-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {" "}
                  {/* Image */}{" "}
                  <figure className="relative h-72 w-full bg-base-200">
                    {" "}
                    <Image
                      src={book.image}
                      alt={book.bookName}
                      fill
                      className="object-cover"
                    />{" "}
                    {/* Category Badge */}{" "}
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-content">
                      {" "}
                      {book.category}{" "}
                    </span>{" "}
                  </figure>{" "}
                  {/* Content */}{" "}
                  <div className="p-5">
                    {" "}
                    {/* Title */}{" "}
                    <h2 className="line-clamp-1 text-2xl font-bold">
                      {" "}
                      {book.bookName}{" "}
                    </h2>{" "}
                    {/* Author */}{" "}
                    <p className="mt-1 text-sm text-base-content/60">
                      {" "}
                      By{" "}
                      <span className="font-semibold">{book.author}</span>{" "}
                    </p>{" "}
                    {/* Rating */}{" "}
                    <div className="mt-3 flex items-center gap-2">
                      {" "}
                      <div className="flex text-yellow-400">
                        {" "}
                        {"★".repeat(Math.round(book.rating))}{" "}
                        {"☆".repeat(5 - Math.round(book.rating))}{" "}
                      </div>{" "}
                      <span className="text-sm font-semibold">
                        {" "}
                        {book.rating}{" "}
                      </span>{" "}
                    </div>{" "}
                    {/* Review */}{" "}
                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-base-content/70">
                      {" "}
                      {book.review}{" "}
                    </p>{" "}
                    {/* Tags */}{" "}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {" "}
                      {book.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="badge badge-outline">
                          {" "}
                          #{tag}{" "}
                        </span>
                      ))}{" "}
                    </div>{" "}
                    {/* Book Info */}{" "}
                    <div className="mt-5 flex justify-between border-t border-base-300 pt-4 text-sm">
                      {" "}
                      <div>
                        {" "}
                        <p className="text-base-content/50">Pages</p>{" "}
                        <p className="font-semibold">{book.totalPages}</p>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <p className="text-base-content/50">Published</p>{" "}
                        <p className="font-semibold">
                          {" "}
                          {book.yearOfPublishing}{" "}
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                    {/* Button */}{" "}
                    <div className="mt-5">
                      {" "}
                      <Link href={`/books/${book.bookId}`}>
                        <button className="btn btn-primary w-full">
                          {" "}
                          View Details →{" "}
                        </button>{" "}
                      </Link>
                    </div>{" "}
                  </div>{" "}
                </div>
              );
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No Read books found
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortWishlist.length > 0 ? (
            sortWishlist.map((book: IBook) => {
              return (
                <div
                  key={book.bookId}
                  className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-base-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {" "}
                  {/* Image */}{" "}
                  <figure className="relative h-72 w-full bg-base-200">
                    {" "}
                    <Image
                      src={book.image}
                      alt={book.bookName}
                      fill
                      className="object-cover"
                    />{" "}
                    {/* Category Badge */}{" "}
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-content">
                      {" "}
                      {book.category}{" "}
                    </span>{" "}
                  </figure>{" "}
                  {/* Content */}{" "}
                  <div className="p-5">
                    {" "}
                    {/* Title */}{" "}
                    <h2 className="line-clamp-1 text-2xl font-bold">
                      {" "}
                      {book.bookName}{" "}
                    </h2>{" "}
                    {/* Author */}{" "}
                    <p className="mt-1 text-sm text-base-content/60">
                      {" "}
                      By{" "}
                      <span className="font-semibold">{book.author}</span>{" "}
                    </p>{" "}
                    {/* Rating */}{" "}
                    <div className="mt-3 flex items-center gap-2">
                      {" "}
                      <div className="flex text-yellow-400">
                        {" "}
                        {"★".repeat(Math.round(book.rating))}{" "}
                        {"☆".repeat(5 - Math.round(book.rating))}{" "}
                      </div>{" "}
                      <span className="text-sm font-semibold">
                        {" "}
                        {book.rating}{" "}
                      </span>{" "}
                    </div>{" "}
                    {/* Review */}{" "}
                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-base-content/70">
                      {" "}
                      {book.review}{" "}
                    </p>{" "}
                    {/* Tags */}{" "}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {" "}
                      {book.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="badge badge-outline">
                          {" "}
                          #{tag}{" "}
                        </span>
                      ))}{" "}
                    </div>{" "}
                    {/* Book Info */}{" "}
                    <div className="mt-5 flex justify-between border-t border-base-300 pt-4 text-sm">
                      {" "}
                      <div>
                        {" "}
                        <p className="text-base-content/50">Pages</p>{" "}
                        <p className="font-semibold">{book.totalPages}</p>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <p className="text-base-content/50">Published</p>{" "}
                        <p className="font-semibold">
                          {" "}
                          {book.yearOfPublishing}{" "}
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                    {/* Button */}{" "}
                    <div className="mt-5">
                      {" "}
                      <Link href={`/books/${book.bookId}`}>
                        <button className="btn btn-primary w-full">
                          {" "}
                          View Details →{" "}
                        </button>{" "}
                      </Link>
                    </div>{" "}
                  </div>{" "}
                </div>
              );
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              {" "}
              No wishlist books found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
