import Image from "next/image";
import bannarImg from "@/app/assets/hero_img.jpg";

const Bannar = () => {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 rounded-3xl p-8 md:p-14 shadow-sm border border-slate-200/60 overflow-hidden">
        {/* Left Column: Text Content */}
        <div className="space-y-6 max-w-lg">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-100/80 rounded-full">
            Curated Collection
          </span>

          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-tight tracking-tight">
            Books to freshen up <br className="hidden sm:block" />
            <span className="text-indigo-600">your bookshelf</span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Discover handpicked reads, timeless classics, and modern favorites to elevate your personal library.
          </p>

          <div className="pt-2">
            <button className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group">
              View the List
              <svg 
                className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src={bannarImg}
              alt="Books display banner"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bannar;