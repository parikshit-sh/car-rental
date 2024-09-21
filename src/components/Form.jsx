import { FormGroup } from "@mui/material";
import "../index.css";
import { useState, useRef, useEffect } from "react";
import { carModels, locations } from "../carModel";
import { motion, AnimatePresence } from "framer-motion";

const Form = () => {
  const [selectedCar, setSelectedCar] = useState(carModels[0]);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [reservationDetails, setReservationDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phoneNumber: "",
    age: "",
    city: "",
    zipCode: "",
  });
  const [confirmationMessage, setConfirmationMessage] = useState("");

  // Refs to scroll to forms
  const mainFormRef = useRef(null);
  const secondFormRef = useRef(null);

  const formVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    if (showSecondForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSecondForm]);

  const handleCarChange = (e) => {
    const carName = e.target.value;
    const car = carModels.find((model) => model.name === carName);
    setSelectedCar(car);
  };

  const handleFirstFormSubmit = (e) => {
    e.preventDefault();
    if (selectedCar && pickupLocation && dropoffLocation) {
      setShowSecondForm(true);
    }
  };

  const handleSecondFormChange = (e) => {
    const { name, value } = e.target;
    setReservationDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSecondFormSubmit = (e) => {
    e.preventDefault();
    setConfirmationMessage("Check your email to confirm order.");
    setShowSecondForm(false);
    setTimeout(() => {
      mainFormRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Close the modal
  const closeModal = () => {
    setShowSecondForm(false);
  };

  // Helper function to format the input keys for headings and placeholders
  const formatHeading = (key) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <>
      <section className="flex justify-center pt-32 items-center" ref={mainFormRef}>
        <form className="bg-white shadow-xl rounded-2xl p-8" onSubmit={handleFirstFormSubmit}>
          <h1 className="text-2xl font-bold p-4">Book a Car</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {/* Select Your Car */}
            <FormGroup className="w-full p-4">
              <h1 className="font-semibold p-2">Select Your Car</h1>
              <select
                className="w-full px-4 py-2 text-gray-600"
                value={selectedCar?.name || ""}
                onChange={handleCarChange}
                id="selectCar"
                name="selectCar"
              >
                <option value="" disabled>
                  Select Your Car Model
                </option>
                {carModels.map((model, index) => (
                  <option key={index} value={model.name}>
                    {model.name}
                  </option>
                ))}
              </select>
            </FormGroup>

            {/* Pick-Up Location */}
            <FormGroup className="w-full p-4">
              <h1 className="font-semibold p-2">Pick-Up</h1>
              <select
                className="w-full px-4 py-2 text-gray-600"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                id="pickupLocation"
                name="pickupLocation"
              >
                <option value="" disabled>
                  Select Pick Up Location
                </option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </FormGroup>

            {/* Drop-Off Location */}
            <FormGroup className="w-full p-4">
              <h1 className="font-semibold p-2">Drop-Off</h1>
              <select
                className="w-full px-8 py-2 text-gray-600"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                id="dropoffLocation"
                name="dropoffLocation"
              >
                <option value="" disabled>
                  Select Drop Off Location
                </option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </FormGroup>

            {/* Pick-Up Date */}
            <FormGroup className="w-full p-4">
              <h1 className="font-semibold p-2">Pick-Up Date</h1>
              <input className="text-gray-600" type="date" id="pickupDate" name="pickupDate" />
            </FormGroup>

            {/* Drop-Off Date */}
            <FormGroup className="w-full p-4">
              <h1 className="font-semibold p-2">Drop-Off Date</h1>
              <input className="text-gray-600" type="date" id="dropoffDate" name="dropoffDate" />
            </FormGroup>

            <FormGroup className="w-full p-8">
              <button
                type="submit"
                className="bg-[#0069D2] hover:bg-blue-700 transition-all duration-200 text-white px-2 py-4 w-full rounded-full text-center"
              >
                Book Now
              </button>
            </FormGroup>
          </div>
          {confirmationMessage && <p className="text-green-500">{confirmationMessage}</p>}
        </form>
      </section>

      {/* Second Form Modal */}
      <AnimatePresence>
        {showSecondForm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm pt-20"
            onClick={closeModal} // Close when clicking outside the form
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formVariants}
          >
            <motion.section
              ref={secondFormRef}
              className="relative bg-white shadow-xl rounded-2xl max-w-4xl mx-auto p-4 overflow-y-auto max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
            >
              <button
                className="absolute top-2 right-2 text-xl text-gray-600 hover:text-black"
                onClick={closeModal}
              >
                &times;
              </button>
              <form onSubmit={handleSecondFormSubmit}>
                <h1 className="text-2xl font-bold p-4">COMPLETE RESERVATION</h1>
                <h2 className="text-lg font-semibold p-4">{selectedCar.name}</h2>
                <img
                  src={selectedCar.image}
                  alt={selectedCar.name}
                  className="w-full object-contain mb-4 rounded-lg"
                />
                <div className="grid lg:grid-cols-2 md:grid-cols-1">
                  {Object.keys(reservationDetails).map((key) => (
                    <FormGroup key={key} className="w-full p-4">
                      <h1 className="font-semibold p-2">{formatHeading(key)}</h1>
                      <input
                        className="w-full px-4 py-2 border border-gray-300 rounded text-gray-600 focus:outline-none focus:border-blue-500 transition-all duration-200"
                        type={key === "email" ? "email" : "text"}
                        id={key}
                        name={key}
                        placeholder={`Enter your ${formatHeading(key)}`}
                        value={reservationDetails[key]}
                        onChange={handleSecondFormChange}
                        required
                      />
                    </FormGroup>
                  ))}
                  <FormGroup className="w-full p-8">
                    <button
                      type="submit"
                      className="bg-[#0069D2] text-white px-2 py-4 w-full rounded-full text-center hover:bg-blue-700 transition-all duration-200"
                    >
                      RESERVE NOW
                    </button>
                  </FormGroup>
                </div>
              </form>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Form;
