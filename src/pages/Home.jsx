import { Box } from "@mui/material";
import "../index.css";
import { carModels } from "../carModel";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { horizontalLoop } from "../animate";
import About from "../components/About";
import Form from "../components/Form";
import hero from "/src/assets/hero-2.png";
import mob_hero from "/src/assets/mobile_hero.png";
import download_app from "/src/assets/mobile-app.png";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const [selectedCar, setSelectedCar] = useState(carModels["0"]); // To store the selected car details

  const handleCarChange = (e) => {
    const carName = e.target.value;
    const car = carModels.find((model) => model.name === carName); // Find the selected car details
    setSelectedCar(car);
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollingText = gsap.utils.toArray(".rail h4");

    const tl = horizontalLoop(scrollingText, {
      repeat: -1,
    });

    let speedTween;

    ScrollTrigger.create({
      trigger: ".scrolling-text",
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        speedTween && speedTween.kill();
        speedTween = gsap
          .timeline()
          .to(tl, {
            timeScale: 3 * self.direction,
            duration: 0.25,
          })
          .to(
            tl,
            {
              timeScale: 1 * self.direction,
              duration: 1.5,
            },
            "+=0.5"
          );
      },
      markers: false,
    });

    // Clean up function to avoid memory leaks
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      speedTween && speedTween.kill();
    };
  }, []);

  return (
    <>
      <div className="flex justify-center" id="hero">
        <Box className="flex justify-between max-w-5xl items-center pt-52 flex-col lg:flex-row pb-20">
          <div>
            <motion.div
              className="hero-text grid gap-5"
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariant}
              viewport={{ once: true, amount: 0.6 }}
            >
              <h1 className="text-[#121212] text-5xl px-8 font-bold lg:text-7xl max-w-3xl z-10 lg:pr-20 lg:mr-96">
                Premium EVs for Rental
              </h1>
              <p className="max-w-md px-8 text-md line-clamp-4 font-semibold leading-wide">
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options, and much more.
              </p>
            </motion.div>
          </div>
          <picture className="hero-img pb-36">
            <img
              src={hero}
              alt="hero-image"
              className="absolute right-0 lg:top-32 hidden lg:block md:block"
            />
          </picture>
          <img src={mob_hero} className="mob_hero hidden" alt="" />
        </Box>
      </div>
      <div className="scrolling-text">
        <div className="rail">
          <h4>Rent an Electric Car</h4>
          <h4>Drive the Future</h4>
          <h4>Eco-Friendly</h4>
        </div>
      </div>
      <Form />

      <section className="flex justify-center pt-32 items-center">
        <div className="mob__app max-w-5xl flex flex-col items-center justify-center">
          <motion.div
            className="flex flex-col max-w-fit justify-center mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariant}
            viewport={{ once: true, amount: 0.8 }}
          >
            <h2 className="text-[#121212] text-5xl px-8 font-bold lg:text-7xl z-10">
              Our Vehicle Fleet
            </h2>
            <p className="max-w-fit px-10 font-semibold leading-wide pt-4 text-center text-xs md:text-sm lg:text-lg">
              Choose from a variety of our amazing vehicles to rent for your
              next adventure.
            </p>
          </motion.div>

          {/* Display selected car details */}
          {selectedCar && (
            <section className="flex justify-center items-center pt-10 w-fit">
              <div className="max-w-5xl grid lg:grid-cols-1 px-8">
                <motion.div
                  className="cars flex flex-col lg:flex-row  gap-2 p-8 pt-2 justify-center"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInVariant}
                  viewport={{ once: true, amount: 0.6 }}
                >
                  {carModels.map((model, index) => (
                    <a key={index} href="#car_img" className="grid">
                      <button
                        key={index}
                        value={model.name}
                        onClick={handleCarChange}
                        className="transition-all duration-300 bg-transparent
                         border-[#121212] border-solid border-2 px-4 py-2 rounded-lg
                          font-semibold hover:bg-[#121212] hover:text-white focus:outline-none
                           focus:bg-[#121212] focus:text-white"
                      >
                        {model.name}
                      </button>
                    </a>
                  ))}
                </motion.div>

                <div className="flex flex-col justify-evenly max-w-sm">
                  <h2 className="text-black text-3xl font-bold">
                    {selectedCar.name}
                  </h2>

                  <p className="mt-4">{selectedCar.batteryChargeTime}</p>
                  <p className="mt-2">{selectedCar.range}</p>
                  <p className="mt-2">{selectedCar.acceleration}</p>
                  <a
                    href="#book_car"
                    className="btn bg-[#007bff] hover:bg-blue-700
                     transition-all duration-200 text-white px-2 
                     w-1/2 py-2 mt-4 rounded-lg text-center"
                  >
                    Book Now
                  </a>
                </div>

                <img
                  src={selectedCar.image}
                  alt={selectedCar.name}
                  className="max-w-full mx-auto pt-4 lg:pt-0 md:pt-0"
                />
              </div>
            </section>
          )}
        </div>
      </section>

      <About />
      <Features />
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
    </>
  );
};

export default Home;
