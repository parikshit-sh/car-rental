import about_img from "../assets/about-0.jpg";
import CountUp from 'react-countup';
import { motion, useInView } from "framer-motion";
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Features from "../components/Features";

const About_page = () => {
    const fadeInVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "tween",
            duration: 0.6,
            ease: "easeOut",
          },
        },
      };

    const staggerChildren = {
      visible: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    // refs and states to manage the start of CountUp animations
    const countUpRef = useRef(null);
    const isInView = useInView(countUpRef, { once: true, amount: 0.2 });
    const [startCount, setStartCount] = useState(false);
    
    // Trigger the count-up animations when the section becomes visible
    if (isInView && !startCount) {
      setStartCount(true);
    }
    
    return (
        <div className="px-4 md:px-10 pt-10 md:pt-16 max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="mb-12"
            >
              <motion.h1 
                className="text-black text-4xl md:text-5xl font-bold mb-3" 
                variants={fadeInVariant}
              >
                Our Car Services
              </motion.h1>
              <motion.div 
                className="flex items-center text-lg"
                variants={fadeInVariant}
              >
                <Link to="/home" className="text-[#0069D2] hover:text-blue-600">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-600">About us</span>
              </motion.div>
            </motion.div>
            
            <section className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-20">
              <motion.img 
                src={about_img} 
                alt="About Us" 
                className="w-full lg:w-1/2 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div 
                className="w-full lg:w-1/2"
                initial="hidden"
                whileInView="visible"
                variants={staggerChildren}
                viewport={{ once: true, amount: 0.2 }}
                ref={countUpRef}
              >
                <motion.h2 
                  className="text-[#121212] text-3xl lg:text-4xl font-bold mb-5"
                  variants={fadeInVariant}
                >
                  Reliable Car Services
                </motion.h2>
                <motion.p 
                  className="text-gray-600 text-lg mb-7"
                  variants={fadeInVariant}
                >
                  We prioritize speed, support, and premium quality to ensure a seamless experience for you.
                  Rent, Repair with ease.
                </motion.p>
                <motion.div 
                  className="grid grid-cols-3 gap-6 mb-8"
                  variants={fadeInVariant}
                >
                  {[
                    { end: 50, label: "Car Models" },
                    { end: 110, label: "Rental Outlets" },
                    { end: 30, label: "Repair Shops" },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-[#0069D2] text-4xl font-bold mb-2">
                        <CountUp
                          end={item.end}
                          duration={3}
                          start={startCount ? null : 0}
                        />
                        <span>+</span>
                      </div>
                      <p className="text-gray-600 font-medium">{item.label}</p>
                    </div>
                  ))}
                </motion.div>
                <motion.div variants={fadeInVariant}>
                  <Link to="/cars">
                    <button className="btn rounded-lg hover:bg-blue-700 
            transition-all duration-200 ease-out">
                      See all cars
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </section>
            <Features />
        </div>
    );
};

export default About_page;