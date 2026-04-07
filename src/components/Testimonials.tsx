import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import starsImage from '../Images/stars.jpg';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
}

const placeholderTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    rating: 5,
    text: 'Alex delivered an exceptional website that exceeded our expectations. His attention to detail and communication throughout the project was outstanding.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Innovate Labs',
    rating: 5,
    text: 'Working with Alex was a pleasure. He transformed our vision into a beautiful, functional web application. Highly recommend!',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'Creative Studio',
    rating: 5,
    text: 'Great developer who really understood our brand. The website traffic increased by 40% after the redesign. Will work together again.',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Director',
    company: 'Digital Agency',
    rating: 5,
    text: 'Alex built a complex e-commerce platform for us. His technical skills and ability to meet tight deadlines made the project a success.',
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-600'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    rating: 0,
    text: '',
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mwvwyjng', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          role: formData.role,
          company: formData.company,
          rating: formData.rating,
          testimonial: formData.text,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', role: '', company: '', rating: 0, text: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Formspree error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  return (
    <section id="testimonials" className="min-h-screen py-20 relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-20" />
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${starsImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          filter: 'brightness(0.4) contrast(1.2)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute inset-0 z-10 bg-dark-900/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      />
      <div className="max-w-4xl w-full mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
            Client <span className="text-accent-cyan">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-accent-cyan mx-auto rounded" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            What my clients say about working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-40 max-w-4xl mx-auto">
          {placeholderTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-800 p-8 rounded-2xl border border-dark-700 hover:border-accent-cyan/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} filled={star <= testimonial.rating} />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-cyan/20 rounded-full flex items-center justify-center">
                  <span className="text-accent-cyan font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="my-64" />

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl mx-auto text-center"
          >
            <div className="mb-10" style={{ marginTop: '100px' }}>
              <h3 className="text-3xl font-heading font-semibold text-white mb-3">
                Share Your Experience
              </h3>
              <p className="text-gray-400">
                Have you worked with me? I'd love to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-dark-800 p-12 rounded-2xl border border-dark-700 text-left" style={{ marginTop: '10px' }}>
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <label className="block text-gray-400 mb-4 text-sm">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-5 py-5 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-4 text-sm">Role</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Your role"
                    className="w-full px-5 py-5 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-colors"
                  />
                </div>
              </div>

              <div className="mb-16">
                <label className="block text-gray-400 mb-4 text-sm">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className="w-full px-5 py-5 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>

              <div className="mb-16">
                <label className="block text-gray-400 mb-4 text-sm">Rating *</label>
                <div className="flex gap-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="focus:outline-none cursor-pointer"
                    >
                      <StarIcon filled={star <= (hoverRating || formData.rating)} />
                    </button>
                  ))}
                </div>
                {formData.rating === 0 && submitStatus === 'error' && (
                  <p className="text-red-400 text-sm mt-2">Please select a rating</p>
                )}
              </div>

              <div className="mb-16">
                <label className="block text-gray-400 mb-4 text-sm">Your Testimonial *</label>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  placeholder="Share your experience working with me..."
                  rows={6}
                  required
                  className="w-full px-5 py-5 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#00d4ff] text-black font-semibold rounded-lg hover:bg-[#00d4ff]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed border-2 border-[#00d4ff] shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] cursor-pointer"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-center mt-4"
                >
                  Thank you! Your testimonial has been submitted for review.
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-center mt-4"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}