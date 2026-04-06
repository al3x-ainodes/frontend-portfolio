import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import cartoonImage from '../Images/cartoon.png';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden bg-dark-900">
      {/* Background matching Services */}
      <div className="services-stars-bg" />
      
      {/* Moon */}
      <div className="absolute moon" />
      
      {/* Fade gradients to blend sections */}
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />
      
      {/* Content with dark overlay for readability */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
            About <span className="text-accent-cyan">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent-cyan mx-auto rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.02}
              transitionSpeed={300}
            >
              <div className="relative">
                <div className="w-full h-[450px] rounded-2xl overflow-visible">
                    <img 
                      src={cartoonImage} 
                      alt="Cartoon" 
                      className="w-full h-full object-contain drop-shadow-2xl"
                      style={{ transform: 'scale(1.15)' }}
                    />
                </div>
                {/* Accent border */}
                <div className="absolute -inset-6 border-2 border-accent-cyan/30 rounded-2xl -z-10" />
              </div>
            </Tilt>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-heading font-semibold text-white mb-4">
              Passionate Web Developer
            </h3>
            <p className="text-gray-300 mb-8 text-xl leading-relaxed">
              I'm Al3x, a creative web developer based in Miami. I specialize in creating 
              stunning, interactive websites and web applications that help businesses 
              stand out in the digital world.
            </p>
            <p className="text-gray-300 mb-8 text-xl leading-relaxed">
              With a focus on modern design and cutting-edge technology, I transform 
              ideas into beautiful, functional digital experiences. Every project 
              is an opportunity to create something unique and impactful.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { number: '3+', label: 'Years Exp.' },
                { number: '20+', label: 'Projects' },
                { number: '15+', label: 'Clients' },
                { number: '100%', label: 'Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-dark-700 p-6 rounded-xl text-center"
                >
                  <div className="text-4xl font-heading font-bold text-accent-cyan">{stat.number}</div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}