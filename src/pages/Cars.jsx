//Cars.jsx
import { Link } from "react-router-dom";
import {carModels} from "../carModel";
import { motion } from "framer-motion";

const Cars = () => {
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
    return (
        <div className="p-10">
            <motion.h2 className="text-black text-5xl font-semibold pt-32 pl-10" 
                      
                          initial="hidden"
                          whileInView="visible"
                          variants={fadeInVariant}
                          viewport={{ once: true, amount: 0.6 }}>Vehicle Models</motion.h2>
            <motion.h2 className="font-semibold text-lg pt-2"    initial="hidden"
                          whileInView="visible"
                          variants={fadeInVariant}
                          viewport={{ once: true, amount: 0.6 }}>
          <Link to="/home"> <span className="text-black text-lg font-semibold pl-10 hover:text-[#0069D2]" >Home</span></Link>/Vehicle Models</motion.h2>
            
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 pt-52">
        
        {carModels.map((car, index) => (
          <motion.div key={index} className="bg-white rounded-lg shadow-md p-4 " 
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariant}
          viewport={{ once: true, amount: 0.4 }}>
            
            <img src={car.image} alt={car.name} className="w-full h-44 object-cover  rounded-md" />
            <h2 className="text-lg font-semibold mt-2">{car.name}</h2>
            <p className="text-gray-500 text-sm">{car.batteryChargeTime}</p>
            <p className="text-gray-500 text-sm">{car.range}</p>
            <p className="text-gray-500 text-sm">{car.acceleration}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">{'★'.repeat(Math.round(car.rating))}</span>
              <span className="text-gray-400 ml-1">{'★'.repeat(5 - Math.round(car.rating))}</span>
              <span className="text-gray-600 ml-2">({car.rating})</span>
            </div>
            <p className="text-green-500 font-semibold mt-2">{car.dailyCharge}</p>
           <Link to="/home"><button className="mt-4 bg-[#0069D2] text-white px-4 py-2 rounded-full hover:bg-blue-600 w-full lg:w-1/2 md:w-1/2">
              Book Now
            </button></Link> 
          </motion.div>
        ))}
      </div>
      </div>
    );
  };
  
  export default Cars;