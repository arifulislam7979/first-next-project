'use client'
import { useContext } from "react";
import { IBook } from "../type";
import { bookContext } from "../context/BooksContext";
import { toast } from "react-toastify";

interface WishlistProps {
    book: IBook
}

const Wishlist = ({book}:WishlistProps) => {
    const {wishlist, setWishlist} = useContext(bookContext)
    const handleWishlist = () => {
        console.log('wishlist');
        setWishlist([...wishlist, book])
        toast.success(`You have added ${book.bookName} to your wishlist`)
    }
    return (
        <div>
            <button onClick={handleWishlist} className="btn btn-ghost">
                ❤️ Add to Wishlist
            </button>
        </div>
    );
};

export default Wishlist;