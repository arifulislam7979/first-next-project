import Link from "next/link";
import logo from "@/app/assets/book.ico";
import Image from "next/image";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/books">Books</Link>
      </li>
      <li>
        <Link href="/listed-books">Listed Books</Link>
      </li>
      <li>
        <Link href="/read-books">Read Books</Link>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto">
        
        <div className="navbar-start w-auto md:w-1/2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden pr-2"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            
            {/* Mobile Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-base-200"
            >
              {navLinks}
            </ul>
          </div>

         
          <Link href="/" className="hidden md:flex gap-2 items-center text-xl font-bold">
            <Image 
              src={logo} 
              alt="Book Vibe Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8 object-contain"
            />
            <span>Book Vibe</span>
          </Link>
        </div>

        <div className="navbar-center flex-1 justify-center md:flex-none">
          <Link href="/" className="flex md:hidden gap-2 items-center text-xl font-bold">
            <Image 
              src={logo} 
              alt="Book Vibe Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8 object-contain"
            />
            <span>Book Vibe</span>
          </Link>

          
          <ul className="menu menu-horizontal px-1 gap-1 text-base font-medium hidden md:flex">
            {navLinks}
          </ul>
        </div>

        {/* Navbar End: Auth Buttons */}
        <div className="navbar-end w-auto md:w-1/2 gap-2 sm:gap-3">
          <Link 
            href="/signin" 
            className="btn btn-success text-white btn-sm sm:btn-md"
          >
            Sign In
          </Link>
          <Link 
            href="/signup" 
            className="btn btn-error text-white btn-sm sm:btn-md"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;