import { motion } from 'framer-motion';
import contraLogo from '../Images/contra-logo.png';
import { useState } from 'react';

function ContraIcon({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  
  if (error) {
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    );
  }
  
  return <img src={src} alt={alt} className="w-6 h-6" onError={() => setError(true)} />;
}

const socialLinks = [
  {
    name: 'Contra',
    icon: <ContraIcon src={contraLogo} alt="Contra" />,
    href: 'https://contra.com/yander_martinez',
  },
];

export default function Footer() {
  return (
    <footer className="py-12 bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-heading font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-accent-cyan">Al</span>3x
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center text-gray-400 hover:text-accent-cyan hover:bg-dark-600 transition-all"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Al3x. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}