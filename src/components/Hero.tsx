import { motion } from 'framer-motion';
import heroBg from '../Images/hero-bg.jpg';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-dark-900">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      <div className="absolute inset-0 bg-dark-900/70 z-10" />
      
      {/* Stars Background */}
      <div className="stars-bg relative z-20" />
      <div className="stars2-bg relative z-20" />
      <div className="stars3-bg relative z-20" />
      
      {/* Floating Planets */}
      <div className="planets-bg relative z-20">
        <div className="planet planet-1" />
        <div className="planet planet-2" />
        <div className="planet planet-3" />
        <div className="planet planet-4" />
        <div className="planet planet-5" />
        <div className="planet planet-6" />
        <div className="planet planet-7" />
        <div className="planet planet-8" />
        <div className="planet planet-9" />
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0 relative z-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[100px]" />
      </div>

      {/* Fade gradient to blend with sections */}
      <div className="section-fade-top relative z-20" />
      <div className="section-fade-bottom relative z-20" />

      <div className="max-w-full px-6 relative z-30">
        {/* Left-aligned Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent-cyan text-xl md:text-2xl mb-6 font-medium"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[3rem] md:text-[6rem] lg:text-[8rem] xl:text-[12rem] font-heading font-bold text-white mb-8 leading-none"
          >
            Yand<span className="text-accent-cyan">3</span>r
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl text-gray-400 mb-8"
          >
            Building Digital Experiences
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
          >
            A creative web developer specializing in building stunning, 
            interactive websites and applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-6"
          >
            <motion.a
              href="https://contra.com/yander_martinez"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-accent-cyan text-dark-900 font-semibold text-lg rounded-lg hover:shadow-lg hover:shadow-accent-cyan/30 transition-all"
            >
              View Work
            </motion.a>
            <motion.a
              href="https://contra.com/s/NFomgX66-web-development"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-accent-cyan text-accent-cyan font-semibold text-lg rounded-lg hover:bg-accent-cyan/10 transition-all"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 relative z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-accent-cyan rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}