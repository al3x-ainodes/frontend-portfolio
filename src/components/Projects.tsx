import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import webAppImage from '../Images/web-app.png';
import eCommerceImage from '../Images/e-commerce.png';
import businessImage from '../Images/business.png';
import portfolioImage from '../Images/portfolio.png';
import astronautImage from '../Images/astronaut.png';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A full-featured online store with shopping cart, payment integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: eCommerceImage,
  },
  {
    title: 'Portfolio Website',
    category: 'Web Design',
    description: 'A stunning portfolio website with 3D animations and smooth scrolling interactions.',
    tech: ['Three.js', 'React', 'Framer Motion'],
    image: portfolioImage,
  },
  {
    title: 'Web Application',
    category: 'Full Stack',
    description: 'A powerful web application with real-time data, user authentication, and dashboard analytics.',
    tech: ['React', 'TypeScript', 'Firebase'],
    image: webAppImage,
  },
  {
    title: 'Business Website',
    category: 'Frontend',
    description: 'A modern business website with responsive design and SEO optimization.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: businessImage,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-dark-900 relative overflow-hidden">
      {/* Background matching Services */}
      <div className="services-stars-bg" />
      
      {/* Floating Astronaut */}
      <img 
        src={astronautImage}
        alt="Floating astronaut" 
        className="astronaut-image hidden lg:block"
      />
      
      {/* Fade gradients */}
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />
      
      {/* Extended fade for transition to Experience */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            My <span className="text-accent-cyan">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent-cyan mx-auto rounded" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={300}
                className="relative z-10"
              >
                <div className="bg-dark-700 rounded-2xl overflow-hidden border border-dark-600 hover:border-accent-cyan/50 transition-all duration-300">
                  {/* Project Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-dark-600 to-dark-900 relative overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 border-2 border-accent-cyan/30 rounded-lg flex items-center justify-center">
                          <span className="text-accent-cyan/50 text-3xl">+</span>
                        </div>
                      </div>
                    )}
                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 opacity-10" 
                      style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                    />
                  </div>

                  <div className="p-6">
                    <span className="text-accent-cyan text-sm font-medium">{project.category}</span>
                    <h3 className="text-xl font-heading font-semibold text-white mt-2 mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs bg-dark-600 text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a 
                      href="https://contra.com/yander_martinez"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-accent-cyan hover:text-dark-900 transition-all font-medium text-center block"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}