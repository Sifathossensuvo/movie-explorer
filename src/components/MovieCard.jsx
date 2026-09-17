import { motion } from "framer-motion";
import { FiCalendar, FiStar, FiEye } from "react-icons/fi";

const MovieCard = ({ movie, index, onDetails }) => {
  const image =
    movie?.image?.original ||
    movie?.image?.medium ||
    "https://via.placeholder.com/300x450?text=No+Image";

  const releaseYear = movie?.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  const rating = movie?.rating?.average
    ? movie.rating.average.toFixed(1)
    : "N/A";

  return (
    <motion.article
      layout
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.04, 0.4),
      }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:border-red-500/20 hover:shadow-2xl hover:shadow-red-500/5"
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden bg-white/5">
        <motion.img
          src={image}
          alt={movie?.name || "Movie poster"}
          loading="lazy"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />

        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/70 px-2.5 py-1.5 backdrop-blur-md">
          <FiStar
            size={12}
            className="fill-current text-yellow-400"
          />

          <span className="text-xs font-bold text-white">
            {rating}
          </span>
        </div>

        {/* Type */}
        <div className="absolute bottom-3 left-3 rounded-md bg-red-500 px-2 py-1 text-[9px] font-bold uppercase tracking-[1px] text-white">
          {movie?.type || "Show"}
        </div>

        {/* Hover Eye */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md">
            <FiEye size={20} />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3
          title={movie?.name}
          className="truncate text-sm font-bold text-white transition-colors duration-300 group-hover:text-red-400"
        >
          {movie?.name || "Untitled"}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-xs text-white/30">
          <FiCalendar size={12} />

          <span>{releaseYear}</span>

          <span className="h-1 w-1 rounded-full bg-white/20" />

          <span>
            {movie?.genres?.[0] || "Drama"}
          </span>
        </div>

        {/* Details Button */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => onDetails?.(movie)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-white/65 transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10 hover:text-white"
        >
          <FiEye size={14} />

          See Details
        </motion.button>
      </div>
    </motion.article>
  );
};

export default MovieCard;