import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FiFilm, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);



  const navItems = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
  ];



  return (
    
    
<motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-0 top-0 z-[100] w-full px-4 pt-4 sm:px-6 lg:px-8"
    >
<div className="mx-auto max-w-7xl">
        <nav className="relative flex h-[72px] items-center justify-between rounded-2xl border border-white/10 bg-black/45 px-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">


    <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="group relative z-10 flex items-center gap-3"
       >
            <div className="leading-none">
              <h1 className="text-lg font-black tracking-tight text-white sm:text-xl">
                Movie<span className="text-red-500">Explorer</span>
            </h1>




              <p className="mt-1 hidden text-[8px] font-medium uppercase tracking-[3px] text-white/40 sm:block"></p>
       </div>
          </NavLink>
 <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
          {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-red-500"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <NavLink
            to="/movies"
            className="group relative hidden overflow-hidden rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 md:block"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Movies

              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </span>

            <motion.span
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 bg-red-600"
            />
          </NavLink>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
          </motion.button>

          <motion.div
            initial={false}
            animate={{
              height: menuOpen ? "auto" : 0,
              opacity: menuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-[80px] z-30 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2 p-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -15, opacity: 0 }}
                  animate={{
                    x: menuOpen ? 0 : -15,
                    opacity: menuOpen ? 1 : 0,
                  }}
                  transition={{
                    delay: menuOpen ? index * 0.06 : 0,
                    duration: 0.25,
                  }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-red-500 text-white"
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}

              <NavLink
                to="/movies"
                onClick={() => setMenuOpen(false)}
                className="mt-1 flex items-center justify-center rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white"
              >
                Explore Movies
              </NavLink>
            </div>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;