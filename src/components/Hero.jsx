
import { Box } from '@mui/material'
import motion from "framer-motion";

const Hero = () => {
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
    
  return (
    <div>
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
            <motion.img
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
    </div>
  )
}

export default Hero