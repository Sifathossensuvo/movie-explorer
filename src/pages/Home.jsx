import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiFilm, FiSearch, FiStar } from "react-icons/fi";
import Hero from "../components/Hero";

import searchBg from "../assets/card1.png";
import exploreBg from "../assets/card2.png";
import detailsBg from "../assets/card3.png";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="relative overflow-hidden bg-[#050505] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-red-500" />

              <span className="text-[10px] font-bold uppercase tracking-[3px] text-red-500">
                Built for movie lovers
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Everything you need to
              <span className="text-white/30"> find your next watch.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
              Search, discover, and explore movies and shows through a simple
              cinematic experience designed to make finding something to watch
              effortless.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <motion.div
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -7 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center transition-all duration-500 hover:border-red-500/20"
            >
              <img
                src={searchBg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/35 transition-all duration-500 group-hover:bg-black/25" />

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-500/10 blur-3xl transition-all duration-500 group-hover:bg-red-500/20" />

              <div className="relative flex flex-col items-center">
                <span className="text-5xl font-black tracking-[-3px] text-white/90 drop-shadow-2xl">
                  01
                </span>

                <h3 className="mt-5 text-xl font-bold text-white drop-shadow-lg">
                  Search Anything
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/80 drop-shadow-md">
                  Find movies and shows quickly with a powerful title-based
                  search experience.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ y: -7 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center transition-all duration-500 hover:border-red-500/20"
            >
              <img
                src={exploreBg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/35 transition-all duration-500 group-hover:bg-black/25" />

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-500/10 blur-3xl transition-all duration-500 group-hover:bg-red-500/20" />

              <div className="relative flex flex-col items-center">
                <span className="text-5xl font-black tracking-[-3px] text-white/90 drop-shadow-2xl">
                  02
                </span>

                <h3 className="mt-5 text-xl font-bold text-white drop-shadow-lg">
                  Explore Stories
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/80 drop-shadow-md">
                  Browse a growing collection of movies and shows from
                  different genres and worlds.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -7 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center transition-all duration-500 hover:border-red-500/20"
            >
              <img
                src={detailsBg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/35 transition-all duration-500 group-hover:bg-black/25" />

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-500/10 blur-3xl transition-all duration-500 group-hover:bg-red-500/20" />

              <div className="relative flex flex-col items-center">
                <span className="text-5xl font-black tracking-[-3px] text-white/90 drop-shadow-2xl">
                  03
                </span>

                <h3 className="mt-5 text-xl font-bold text-white drop-shadow-lg">
                  See the Details
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/80 drop-shadow-md">
                  Open any title to discover its rating, genres, release date,
                  summary, and more.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.04] to-transparent p-6 sm:flex-row sm:items-center sm:p-8"
          >
            <div>
              <p className="text-lg font-bold text-white">
                Ready to discover something new?
              </p>

              <p className="mt-1 text-sm text-white/35">
                Explore the full movie collection.
              </p>
            </div>

            <Link
              to="/movies"
              className="group flex items-center gap-3 rounded-xl bg-red-500 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
            >
              Explore Movies

              <FiArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;