import { motion } from 'framer-motion';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Custom Websites',
    description: 'Modern, responsive websites tailored to your brand. From landing pages to full-featured web applications.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Custom Apps',
    description: 'Powerful web applications built with the latest technologies. Scalable, secure, and user-friendly.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that engage users and enhance user experience.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Performance',
    description: 'Lightning-fast websites optimized for speed and search engine rankings.',
  },
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen py-20 bg-dark-900 relative overflow-hidden">
      {/* Background with stars */}
      <div className="services-stars-bg" />
      
      {/* Big rotating Earth */}
      <div className="services-earth hidden lg:block">
        {/* Landmasses */}
        <div className="land land-1" />
        <div className="land land-2" />
        <div className="land land-3" />
        <div className="land land-4" />
        <div className="land land-5" />
        <div className="land land-6" />
        <div className="land land-7" />
        {/* Clouds */}
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
      </div>
      
      {/* Fade gradients to blend sections */}
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:pl-[400px]"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            My <span className="text-accent-cyan">Services</span>
          </h2>
          <div className="w-20 h-1 bg-accent-cyan mx-auto rounded" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I offer a range of web development services to help your business thrive in the digital world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:pl-[400px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-dark-800 p-8 rounded-2xl border border-dark-700 hover:border-accent-cyan/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-accent-cyan/10 rounded-xl flex items-center justify-center text-accent-cyan mb-6 group-hover:bg-accent-cyan group-hover:text-dark-900 transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}