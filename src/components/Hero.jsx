import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiEye,
  FiPlay,

  FiSearch,
  FiStar,
} from "react-icons/fi";
import heroBg from "../assets/bg.png";



const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

      }}
    >
      
      <div className="absolute inset-0 bg-black/20" />

   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

      
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-5 py-32 text-center">
        <div className="flex w-full flex-col items-center">

          
    <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
          delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 40 }}
                 
        transition={{
                duration: 0.7,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="h-px bg-red-500"
            />



            <span className="text-[10px] font-bold uppercase tracking-[4px] text-red-400 sm:text-xs">
              Your next story awaits
            </span>




            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="h-px bg-red-500"
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-5xl font-black leading-[0.95] tracking-[-3px] text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            Discover.
            <span> </span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-white/75"
            >
              Explore.
            </motion.span>

            <br />



            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-gradient-to-r from-red-300 via-red-500 to-red-600 bg-clip-text text-transparent"
            >
              Get Lost.
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/75 drop-shadow-lg sm:text-base"
          >
            Explore thousands of movies and shows, discover unforgettable
            stories, and find your next favorite watch all in one place.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              to="/movies"
              className="group flex items-center justify-center gap-3 rounded-xl bg-red-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-red-500/30 transition-all duration-300 hover:bg-red-600 hover:shadow-red-500/50"
            >
              Explore Movies

              <FiArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/movies"
              className="group flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-black/40"
            >
              <FiPlay
                size={15}
                className="fill-current text-red-500 transition-transform duration-300 group-hover:scale-110"
              />

              Browse Collection
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 flex items-center justify-center gap-6 sm:gap-10"
          >
            {/* Titles */}
            <div>
              <div className="flex items-center justify-center gap-2">
                <FiSearch className="text-red-500" size={16} />

                <span className="text-lg font-bold text-white">
                  1000+
                </span>
              </div>

              <p className="mt-1 text-[10px] uppercase tracking-[2px] text-white/55">
                Titles
              </p>
            </div>

            {/* Divider */}
            <div className="h-9 w-px bg-white/30" />

            {/* Rating */}
            <div>
              <div className="flex items-center justify-center gap-2">
                <FiStar
                  className="fill-current text-red-500"
                  size={16}
                />

                <span className="text-lg font-bold text-white">
                  Top Rated
                </span>
              </div>

              <p className="mt-1 text-[10px] uppercase tracking-[2px] text-white/55">
                Collection
              </p>
            </div>

            {/* Divider */}
            <div className="h-9 w-px bg-white/30" />

            {/* Live */}
            <div className="hidden sm:block">
              <div className="flex items-center justify-center gap-2">
<FiEye  
className="fill-current text-red-500"
                  size={16}

></FiEye>

                <span className="text-lg font-bold text-white">
                  Live
                </span>
              </div>

              <p className="mt-1 text-[10px] uppercase tracking-[2px] text-white/55">
                Discovery
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
};

export default Hero;