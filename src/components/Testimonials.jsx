import { motion } from 'framer-motion';
import { useMediaQuery } from '@mui/material';
import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    username: "@sarahj_tech",
    content: "The electric cars from this service are top-notch. The silent ride and instant torque make every journey a pleasure. Excellent customer support too!",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    username: "@m_chen_eco",
    content: "As someone passionate about sustainability, I'm impressed by the range of eco-friendly options. The booking process is seamless, and the cars are always in pristine condition.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    username: "@emily_urban",
    content: "These e-cars are perfect for city driving. Zero emissions, easy parking, and the ability to use carpool lanes have made my commute so much better!",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const Testimonials = () => {
  const isSmallScreen = useMediaQuery('(max-width:640px)');
  const isMediumScreen = useMediaQuery('(min-width:641px) and (max-width:1024px)');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-800">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: isSmallScreen ? 0.2 : index * 0.2 }}
              className={`bg-zinc-200 p-4 sm:p-6 rounded-3xl duration-300 relative overflow-hidden ${
                isMediumScreen && index === 2 ? 'sm:col-span-2 sm:justify-self-center sm:max-w-md' : ''
              }`}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ delay: isSmallScreen ? 0.5 : 0.7 + index * 0.2 }}
                className="text-gray-500 font-bold text-5xl sm:text-7xl font-serif absolute top-2 left-2"
              >
                &ldquo;
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: isSmallScreen ? 0.5 : 0.7 + index * 0.2 }}
                className="text-gray-600 text-base sm:text-lg mb-12 sm:mb-16 mt-6 sm:mt-8 relative z-10"
              >
                {testimonial.content}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: isSmallScreen ? 0.7 : 0.9 + index * 0.2 }}
                className="absolute -bottom-4 -left-4 flex items-center bg-[#F3F4F6] rounded-3xl p-3 sm:p-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: isSmallScreen ? 0.3 : 0.5 + index * 0.2, type: "spring", stiffness: 260, damping: 20 }}
                  className="w-12 h-12 sm:w-16 sm:h-16 mr-3 sm:mr-4 flex-shrink-0"
                >
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full rounded-full object-cover border-2 sm:border-4 border-blue-500"
                  />
                </motion.div>
                <div>
                  <p className="font-semibold text-base sm:text-lg text-gray-800">{testimonial.name}</p>
                  <p className="text-blue-500 text-xs sm:text-sm">{testimonial.username}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;