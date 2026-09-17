import { AnimatePresence, motion } from "framer-motion";
import {
  FiX,
  FiStar,

  FiCalendar,
  FiClock,
  FiFilm,
} from "react-icons/fi";



const MovieModal = ({ movie, onClose }) => {
  if (!movie) {
    return null;
  }


  
  const image =
    movie?.image?.original ||
    movie?.image?.medium ||
    "https://via.placeholder.com/700x1000?text=No+Image";

  const releaseDate = movie?.premiered
    ? new Date(movie.premiered).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Not available";




  const rating = movie?.rating?.average
    ? movie.rating.average.toFixed(1)
    : "N/A";
  const summary = movie?.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No description is available for this title.";



  return (

    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md sm:p-6"
      >


        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.96 }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={(event) => event.stopPropagation()}
          className="relative my-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] shadow-2xl shadow-black/50"
        >
          


          <motion.button
            whileHover={{ rotate: 90, scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
 className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-white/70 backdrop-blur-md transition-colors duration-300 hover:bg-red-500 hover:text-white"
            aria-label="Close modal"
          >
            <FiX size={19} />
          </motion.button>



          <div className="grid md:grid-cols-[280px_1fr]">
           

            <div className="relative h-[420px] overflow-hidden md:h-full md:min-h-[520px]">
              <img
                src={image}
                alt={movie?.name || "Movie poster"}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent md:bg-gradient-to-r" />

              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-xl border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-md">
                <FiStar
                  size={15}
                  className="fill-current text-yellow-400"
                />

                <span className="text-sm font-bold text-white">
                  {rating}
                </span>

                <span className="text-xs text-white/30">
                  / 10
                </span>
              </div>
            </div>

            {/* content */}
            <div className="relative p-6 sm:p-8 md:p-10">
              {/* Small Label */}
              <div className="mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />

                <span className="text-[10px] font-bold uppercase tracking-[3px] text-red-500">
                  Movie Details
                </span>
              </div>

              {/* Title */}
              <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
                {movie?.name || "Untitled"}
              </h2>

             
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/50">
                  <FiCalendar size={13} className="text-red-500" />

                  {releaseDate}
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/50">
                  <FiFilm size={13} className="text-red-500" />

                  {movie?.type || "Show"}
                </div>

                {movie?.runtime && (
                  <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/50">
                    <FiClock size={13} className="text-red-500" />

                    {movie.runtime} min
                  </div>
                )}
              </div>


              {movie?.genres?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-full border border-red-500/15 bg-red-500/5 px-3 py-1.5 text-[10px] font-semibold text-red-400"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}

              {/* Overview */}
              <div className="mt-8">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[3px] text-white/25">
                  Overview
                </p>

                <p className="text-sm leading-7 text-white/45">
                  {summary}
                </p>
              </div>

              {/* Bottom Info */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[2px] text-white/20">
                      Rating
                    </p>

                    <div className="mt-1 flex items-center gap-2">
                      <FiStar
                        size={15}
                        className="fill-current text-yellow-400"
                      />

                      <span className="text-lg font-bold text-white">
                        {rating}
                      </span>

                      <span className="text-xs text-white/25">
                        community rating
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={onClose}
                    className="rounded-xl bg-red-500 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
                  >
                    Continue Exploring
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MovieModal;