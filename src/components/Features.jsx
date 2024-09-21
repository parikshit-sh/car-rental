import truck from "../assets/truck.jpg";
import tesla from "../assets/about-3.jpg";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

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

const Features = () => {
  return (
    <div>
      <section className="flex justify-center items-center pt-20 pb-32" id="features">
        <div className="max-w-6xl grid lg:grid-cols-2 gap-1 items-start">
          <img src={truck} alt="Truck" className="w-full p-4 rounded-3xl" />
          <img src={tesla} alt="Tesla" className="w-full p-4 rounded-3xl" />
          
          <motion.div
            className="lg:px-16 lg:absolute lg:pt-[27rem] text-center lg:text-left self-start grid grid-cols-1"
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariant}
            viewport={{ once: true, amount: 0.6 }}
          >
            <h2 className="text-[#121212] text-3xl lg:text-5xl font-bold">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 text-sm lg:text-md mt-4 max-w-sm mx-auto lg:mx-0 leading-2">
              Discover unmatched convenience with our top-notch services tailored to your needs. From quick rentals to seamless repairs, we&apos;ve got you covered.
            </p>
            <ul className="features-list text-gray-800 text-left mt-6 space-y-5 mx-auto">
              <li className="flex items-center gap-2">
                <span className=" rounded-full text-[#0069D2]">✦</span>
                <span>Fast and reliable service with 24/7 availability.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0069D2]">✦</span>
                <span>Wide range of vehicles to suit every need and budget.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0069D2]">✦</span>
                <span>Expert maintenance and repair support at your fingertips.</span>
              </li>
            </ul>

            <div className="mt-8">
              <Link to="/home" className="btn bg-[#0069D2] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                Book Your Ride
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;
