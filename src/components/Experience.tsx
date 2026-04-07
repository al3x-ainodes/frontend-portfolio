import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import naveImage from '../Images/nave.jpg';

const experiences = [
  {
    date: '2023 - Present',
    title: 'Freelance Web Developer',
    subtitle: 'Self-employed',
    description: 'Creating stunning websites and web applications for clients worldwide. Specializing in React, TypeScript, and modern web technologies.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    date: '2022 - 2023',
    title: 'Web Development Certification',
    subtitle: 'Udemy & FreeCodeCamp',
    description: 'Completed comprehensive courses in modern web development including React, TypeScript, Node.js, and Three.js.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    date: '2021 - 2022',
    title: 'UI/UX Design Fundamentals',
    subtitle: 'Self-learning',
    description: 'Learned modern UI/UX design principles, creating user-centered interfaces and experiences.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

const skills = [
  'React', 'TypeScript', 'Three.js', 'Node.js', 'HTML/CSS', 
  'Tailwind', 'Framer Motion', 'Vite', 'Git', 'Figma'
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 -z-10 bg-dark-900" />
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-black via-black to-transparent" />
      <div 
        className="absolute inset-0 opacity-60 parallax-bg"
        style={{ 
          backgroundImage: `url(${naveImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10 pointer-events-none"></div>
      <div className="relative z-20 max-w-7xl mx-auto px-6" style={{ marginLeft: '30px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Experience & <span className="text-accent-cyan">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-accent-cyan mx-auto rounded" />
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-heading font-semibold text-white mb-8 text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-dark-800 text-gray-300 rounded-full border border-dark-700 hover:border-accent-cyan hover:text-accent-cyan transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <VerticalTimeline lineColor="#00d4ff">
          {experiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.title}
              date={exp.date}
              iconStyle={{ background: '#00d4ff', color: '#0a0a0a' }}
              icon={<div className="flex items-center justify-center w-full h-full">{exp.icon}</div>}
              contentStyle={{ background: '#1a1a1a', border: '1px solid #333' }}
              contentArrowStyle={{ borderRight: '7px solid #1a1a1a' }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-heading font-semibold text-white">{exp.title}</h3>
                <p className="text-accent-cyan font-medium mt-1">{exp.subtitle}</p>
                <p className="text-gray-400 mt-3 text-sm">{exp.description}</p>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}