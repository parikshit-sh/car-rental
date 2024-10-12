import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import download_app from "/src/assets/mobile-app.png";
import { carModels } from "../carModel";
import { motion } from "framer-motion";
import Testimonials from "../components/Testimonials";

const Cars = () => {
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
                Vehicle Models
              </motion.h1>
              <motion.div 
                className="flex items-center text-lg"
                variants={fadeInVariant}
              >
                <Link to="/home" className="text-[#0069D2] hover:text-blue-600">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-600">Vehicle Models</span>
              </motion.div>
            </motion.div>
            
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {carModels.map((car, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInVariant}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <img src={car.image} alt={car.name} className="w-full h-44 object-contain rounded-md mb-4" />
                  <h2 className="text-[#121212] text-xl font-bold mb-2">{car.name}</h2>
                  <p className="text-gray-600 text-sm mb-1">{car.batteryChargeTime}</p>
                  <p className="text-gray-600 text-sm mb-1">{car.range}</p>
                  <p className="text-gray-600 text-sm mb-2">{car.acceleration}</p>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-500">{'★'.repeat(Math.round(car.rating))}</span>
                    <span className="text-gray-400">{'★'.repeat(5 - Math.round(car.rating))}</span>
                    <span className="text-gray-600 ml-2">({car.rating})</span>
                  </div>
                  <p className="text-[#0069D2] font-bold text-lg mb-4">{car.dailyCharge}</p>
                  <Link to="/home">
                    <button className="btn rounded-lg hover:bg-blue-700 transition-all duration-200 ease-out w-full">
                      Book Now
                    </button>
                  </Link>
                </motion.div>
              ))}
            </section>
            <Testimonials />
            <Box className="flex flex-col lg:flex-row justify-center mt-24 lg:mb-20
      items-center p-8 rounded-b-none lg:rounded-b-3xl w-full lg:w-10/12 mx-auto bg-gradient-to-r from-blue-500
       to-blue-700 rounded-3xl mb overflow-hidden">
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
          <h2 className="text-white text-4xl lg:text-5xl font-bold mb-4">
            Drive with Rentals Today
          </h2>
          <p className="text-gray-200 text-lg mb-6">
            Explore our world of premium cars with our mobile app.
            Get driving today!
          </p>
          <button
            href="#book_car"
            className="bg-white
             text-blue-800 px-8 py-3 text-lg font-semibold rounded-lg
              hover:bg-blue-100 transition duration-300 ease-in-out transform
               hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            Download App
          </button>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/3 bg-transparent rounded-lg">
          <img 
            src={download_app} 
            alt="Download our app" 
            className="w-full max-w-md mx-auto 
            object-cover rounded-lg transform hover:scale-105 
            transition duration-300 ease-in-out" 
          />
        </div>
      </Box>
        </div>
    );
};

export default Cars;