import { motion } from "framer-motion";
import {
  FiGithub,
  FiInstagram,
  FiTwitter,
  FiArrowUpRight,
  FiFilm,
} from "react-icons/fi";




const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
  name: "GitHub",
  icon: <FiGithub size={18} />,
      href: "https://github.com/",
    },
    {
      name: "Instagram",
    icon: <FiInstagram size={18} />,



      href: "https://instagram.com/",

    },
    {
      name: "Twitter",
   icon: <FiTwitter size={18} />,
      href: "https://twitter.com/",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
     top: 0,
      behavior: "smooth",
    });
  };

  return (


    
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
    
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-red-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-red-600/10 blur-[120px]" />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-0 top-0 h-px w-full origin-left bg-gradient-to-r from-transparent via-red-500 to-transparent"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-md"
          >
            <div className="mb-5 flex items-center gap-3">


           <div>
            <h2 className="text-xl font-black tracking-tight text-white">
              Movie<span className="text-red-500">Explorer</span>
              </h2>

              </div>
            </div>




            <p className="max-w-sm text-sm leading-7 text-white/45">
              Discover movies and shows, explore unforgettable stories, and
              find something worth watching every day.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 25, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
        delay: 0.1,
            }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-white/30">
              Explore
            </p>

            <div className="flex flex-col gap-3">
        <a
                href="/"
                className="group flex items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
              >
                Home
                <FiArrowUpRight
                            size={14}
                  className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </a>

              <a
                href="/movies"
                className="group flex items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
              >
                Movies

                <FiArrowUpRight
                  size={14}
                  className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </a>
            </div>
          </motion.div>

<motion.div
            initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
           transition={{
              duration: 0.7,
          delay: 0.2,
            }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-white/30">
              Connect
            </p>
            <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                 href={social.href}
                  target="_blank"
                  rel="noreferrer"
               whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl borderborder-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-500"
                  aria-label={social.name}
               >
                  {social.icon}
                </motion.a>
             ))}
            </div>
          </motion.div>
        </div>

        <div className="my-10 h-px w-full bg-white/10" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs text-white/30">
            © {currentYear} sifathossenshuvo. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.94 }}
            className="group flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white/60 transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10 hover:text-white"
          >
            Back to top

            <span className="text-red-500 transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;