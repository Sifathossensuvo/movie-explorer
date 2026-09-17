import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiSliders,
  FiX,
  FiFilm,
  FiAlertCircle,
} from "react-icons/fi";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";



const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMovies = async (query = "") => {
    try {
   setLoading(true);
      setError("");

      const url = query.trim()
        ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
         query,
          )}`
      : "https://api.tvmaze.com/shows";

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch movie data.");
   }

      const data = await response.json();

    const formattedMovies = query.trim()
        ? data.map((item) => item.show)
    : data;
      setMovies(formattedMovies);
    } catch (err) {
      setError("Something went wrong while loading the movies.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMovies(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedMovie(null);
      }
    };

window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] pt-28">

      <section className="relative overflow-hidden border-b border-white/10">

<div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />

    <div className="pointer-events-none absolute right-[-10%] top-[-50%] h-[500px] w-[500px] rounded-full border border-red-500/5" />

        <div className="relative mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-10">

          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
       duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
     >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-red-500" />

     <span className="text-[10px] font-bold uppercase tracking-[3px] text-red-500">
                Movie Collection
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
     Explore the
              <span className="text-white/25"> collection.</span>
     </h1>
    <p className="mt-4 max-w-xl text-sm leading-7 text-white/40">
              Search through movies and shows, discover new stories, and find
              something worth watching.
            </p>
          </motion.div>

 
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            {/* Search Input */}
            <div className="relative flex-1">
              <FiSearch
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search for a movie or show..."
                className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] pl-14 pr-12 text-sm text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-white/25 focus:border-red-500/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-red-500/20"
              />

              <AnimatePresence>
                {searchTerm && (
                  <motion.button
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg bg-white/5 text-white/40 transition hover:bg-white/10 hover:text-white"
                    aria-label="Clear search"
                  >
                    <FiX size={16} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>


            <button
              type="button"
              className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 text-sm font-semibold text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              <FiSliders size={17} />

              Browse
            </button>
          </motion.div>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        {/* Results Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[3px] text-white/25">
              {searchTerm ? "Search Results" : "All Shows"}
            </p>

            <h2 className="mt-2 text-xl font-bold text-white">
              {loading
                ? "Finding titles..."
                : `${movies.length} ${
                    movies.length === 1 ? "title" : "titles"
                  } found`}
            </h2>
          </div>

          {!loading && movies.length > 0 && (
            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />

              <span className="text-xs text-white/30">
                Live data
              </span>
            </div>
          )}
        </div>


        {loading && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
            {Array.from({ length: 10 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03]"
              >
                <div className="aspect-[2/3] animate-pulse bg-white/5" />

                <div className="space-y-3 p-4">
                  <div className="h-4 w-3/4 animate-pulse rounded bg-white/5" />

                  <div className="h-3 w-1/2 animate-pulse rounded bg-white/5" />

                  <div className="h-9 w-full animate-pulse rounded-xl bg-white/5" />
                </div>
              </motion.div>
            ))}
          </div>
        )}


        {!loading && error && (
          <motion.div
            initial={{
       y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-red-500/10 bg-red-500/[0.03] px-6 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
              <FiAlertCircle size={24} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-white">
              Unable to load titles
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-white/35">
              {error}
            </p>

            <button
              type="button"
              onClick={() => fetchMovies(searchTerm)}
              className="mt-6 rounded-xl bg-red-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-600"
            >
              Try Again
            </button>
          </motion.div>
        )}

  {!loading && !error && movies.length === 0 && (
          <motion.div
            initial={{
              scale: 0.95,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.02] text-center"
  >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-white/30">
              <FiFilm size={24} />
       </div>

            <h3 className="mt-5 text-lg font-bold text-white">
              No titles found
      </h3>

            <p className="mt-2 text-sm text-white/35">
              Try searching with a different title.
            </p>
          </motion.div>
        )}



        {!loading && !error && movies.length > 0 && (
          <motion.div
            layout
            className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5"
          >
            {movies.map((movie, index) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                index={index}
                onDetails={setSelectedMovie}
              />
            ))}
      </motion.div>
        )}
      </section>


      <MovieModal
        movie={selectedMovie}
     onClose={() => setSelectedMovie(null)}
     />
    </main>
  );
};

export default Movies;