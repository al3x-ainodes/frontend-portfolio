import { motion } from 'framer-motion';
import LaptopScene from './scenes/LaptopScene';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-dark-900">
      {/* Stars Background */}
      <div className="stars-bg" />
      <div className="stars2-bg" />
      <div className="stars3-bg" />
      
      {/* Floating Planets */}
      <div className="planets-bg">
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
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[100px]" />
      </div>

      {/* Fade gradient to blend with sections */}
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
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
            Al<span className="text-accent-cyan">3</span>x
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
            className="text-lg text-gray-500 max-w-xl mb-8"
          >
            A creative web developer specializing in building stunning, 
            interactive websites and applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-accent-cyan text-dark-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/30 transition-all"
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-accent-cyan text-accent-cyan font-semibold rounded-lg hover:bg-accent-cyan/10 transition-all"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right - 3D Scene */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[500px] lg:h-[700px]"
        >
          <LaptopScene />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
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