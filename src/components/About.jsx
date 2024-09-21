import about_img from "../assets/about-0.jpg";
import CountUp from 'react-countup';
import { motion, useInView } from "framer-motion";
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  // refs and states to manage the start of CountUp animations
  const countUpRef = useRef(null);
  const isInView = useInView(countUpRef, { once: true, amount: 0.6 });
  const [startCount, setStartCount] = useState(false);

  // Trigger the count-up animations when the section becomes visible
  if (isInView && !startCount) {
    setStartCount(true);
  }

  return (
    <section
      className="flex justify-center items-center pt-20"
    id="about_"
    >
      <div className="max-w-5xl grid lg:grid-cols-2 gap-10 items-start">
        <img src={about_img} alt="" className="w-full p-4" />
        <motion.div className="p-2 text-center lg:text-left self-start" 
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariant}
          viewport={{ once: true, amount: 0.6 }}
          ref={countUpRef}>
          <h2 className="text-[#121212] text-3xl lg:text-5xl font-bold lg:pt-32">
            Reliable Car Services
          </h2>
          <p className="text-gray-600 text-sm lg:text-md mt-4 max-w-sm mx-auto lg:mx-0 leading-5">
            We prioritize speed, support, and premium quality to ensure a seamless experience for you.
            Rent, Repair with ease.
          </p>
          <div className="stats text-[#0069D2] pt-8 flex gap-4 justify-evenly">
            <div>
              <CountUp
                className="font-bold text-4xl"
                end={50}
                duration={3}
                start={startCount ? null : 0} // Start count when in view
              />
              <span className="font-bold text-3xl">+</span>
              <p className="max-w-10 text-gray-600 font-semibold text-sm">Car Models</p>
              
            </div>
            <div>
              
              <CountUp
                className="font-bold text-4xl"
                end={110}
                duration={3}
                start={startCount ? null : 0}
                
              />
              <span className="font-bold text-3xl">+</span>
              <p className="max-w-10 text-gray-600 font-semibold text-sm">Rental Outlets</p>
            </div>
            <div>
              <CountUp
                className="font-bold text-4xl"
                end={30}
                duration={3}
                start={startCount ? null : 0}
              />
              <span className="font-bold text-3xl">+</span>
              <p className="max-w-10 text-gray-600 font-semibold text-sm">Repair Shops</p>
            </div>
          </div>
          <div className="pt-10 flex justify-center lg:justify-start lg:pl-10">
            <Link to="/cars"><button className="btn hover:bg-blue-700 transition-all duration-200 ease-out">See all cars</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
