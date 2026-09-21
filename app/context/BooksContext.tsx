'use client'

import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";
import { IBook } from "../type";
export interface IBookContext {
    readBooks: IBook[]
    setReadBooks: Dispatch<SetStateAction<IBook[]>>
    wishlist: IBook[]
    setWishlist: Dispatch<SetStateAction<IBook[]>>
}
export const bookContext = createContext<IBookContext>({
    readBooks: [],
    setReadBooks: ()=> {},
    wishlist: [],
    setWishlist: () => {}
})

const BooksProvider = ({children}:{children: ReactNode}) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([])
    const [wishlist, setWishlist] = useState<IBook[]>([])

    const shearData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }

    return(
        <bookContext.Provider value={shearData}>
            {children}
        </bookContext.Provider>
    )
};

export default BooksProvider;