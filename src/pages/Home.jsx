import { Box} from "@mui/material";
import "../index.css";
import { useState, useEffect } from "react"; // Use state to handle selected car details
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { carModels } from "../carModel";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { horizontalLoop } from "../animate";
import About from "../components/About";
import Form from "../components/Form";

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

    // Handle the scrolling text animation
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
      <div className="flex justify-center">
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
              src="/src/assets/hero-2.png"
              alt="hero-image"
              className="absolute right-0 lg:top-32 hidden lg:block md:block"
              loading="eager"
            />
           
          </picture>
          <img src="/src/assets/mobile_hero.png" className="mob_hero hidden" alt=""/>
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
                    className="bg-[#0069D2] text-white px-2 w-1/2 py-2 mt-4 rounded-full text-center"
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
      <section className="flex justify-center items-center pt-20">
        <div className="max-w-5xl grid lg:grid-cols-2 gap-10 items-center">
          <div className="lg:ml-36 text-center lg:text-left">
            <h2 className="text-[#121212] text-4xl lg:text-6xl font-bold">
              Features
            </h2>
            <p
              className="text-gray-600 text-sm lg:text-base mt-4 max-w-md mx-auto 
                       lg:mx-0"
            >
              We prioritize speed, support, and premium quality to ensure a
              seamless experience for you.
            </p>
          </div>
        </div>
      </section>

      <Box className="flex flex-col lg:flex-row justify-center items-center max-w-6xl mx-auto p-10 gap-6">
        <div className="border-2 border-slate-400 flex flex-col rounded-lg  text-center hover:shadow-xl transition-shadow duration-300 transform  ease-in-out max-w-64 p-20">
          <LocalShippingIcon className="mb-4 text-black text-xl mx-auto" />
          <span className="text-2xl font-semibold text-[#121212]">
            24-hr Delivery
          </span>
        </div>

        <div className="border-2 border-slate-400 flex flex-col rounded-lg text-center hover:shadow-xl transition-shadow duration-300 transform ease-in-out max-w-64 p-16">
          <SupportAgentIcon className="mb-4 text-black text-5xl mx-auto" />
          <span className="text-2xl font-semibold text-[#121212]">
            24/7 Technical Support
          </span>
        </div>

        <div className="border-2 flex flex-col border-slate-400 rounded-lg  text-center hover:shadow-xl transition-shadow duration-300 transform ease-in-out max-w-64 p-20">
          <AttachMoneyIcon className="mb-4 text-black text-5xl mx-auto" />
          <span className="text-2xl font-semibold text-[#121212]">
            One Pricing
          </span>
        </div>
      </Box>
      <Box className="flex justify-center items-center p-4 w-full lg:w-10/12 md:w-10/12 mx-auto">
        <div className="down_mob text-center w-full h-64 rounded-2xl p-4">
          <h2 className="text-white text-4xl font-bold pt-10 pb-">
            Drive with Rentals Today
          </h2>

          <p className="text-gray-300">
            Get the App to explore the world of premium Cars.
          </p>
          <button
            href="#book_car"
            className="bg-[white] text-black px-2 py-2 mt-2 lg:w-1/4 lg:mt-8 md:w-1/4 w-full font-semibold rounded-full text-center"
          >
            Download App
          </button>
        </div>
      </Box>
      <div className="flex justify-center items-center">
        <img src="/src/assets/download.png" alt="" className="w-96" />
      </div>
    </>
  );
};

export default Home;
