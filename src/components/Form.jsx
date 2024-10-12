import { FormGroup } from "@mui/material";
import "../index.css";
import { useState, useRef, useEffect } from "react";
import { carModels, locations } from "../carModel";
import { motion, AnimatePresence } from "framer-motion";

const Form = () => {
  const [selectedCar, setSelectedCar] = useState(carModels[0]);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
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
  const [errors, setErrors] = useState({});

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

  const validateFirstForm = () => {
    const errors = {};
    if (!selectedCar) errors.selectedCar = "Please select a car";
    if (!pickupLocation) errors.pickupLocation = "Please select a pick-up location";
    if (!dropoffLocation) errors.dropoffLocation = "Please select a drop-off location";
    if (!pickupDate) errors.pickupDate = "Please select a pick-up date";
    if (!dropoffDate) errors.dropoffDate = "Please select a drop-off date";
    if (pickupDate && dropoffDate && new Date(pickupDate) > new Date(dropoffDate)) {
      errors.dateRange = "Drop-off date must be after pick-up date";
    }
    return errors;
  };

  const handleFirstFormSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateFirstForm();
    if (Object.keys(formErrors).length === 0) {
      setShowSecondForm(true);
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const handleSecondFormChange = (e) => {
    const { name, value } = e.target;
    setReservationDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const validateSecondForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!reservationDetails.firstName) errors.firstName = "First name is required";
    if (!reservationDetails.lastName) errors.lastName = "Last name is required";
    if (!reservationDetails.email) errors.email = "Email is required";
    else if (!emailRegex.test(reservationDetails.email)) errors.email = "Invalid email format";
    if (!reservationDetails.phoneNumber) errors.phoneNumber = "Phone number is required";
    else if (!phoneRegex.test(reservationDetails.phoneNumber)) errors.phoneNumber = "Invalid phone number format";
    if (!reservationDetails.age) errors.age = "Age is required";
    else if (isNaN(reservationDetails.age) || parseInt(reservationDetails.age) < 18) errors.age = "Must be 18 or older";

    return errors;
  };

  const handleSecondFormSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateSecondForm();
    if (Object.keys(formErrors).length === 0) {
      setConfirmationMessage("Check your email to confirm order.");
      setShowSecondForm(false);
      setTimeout(() => {
        mainFormRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      setErrors(formErrors);
    }
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
        <form className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-4xl" onSubmit={handleFirstFormSubmit}>
          <h1 className="text-3xl font-bold p-4 text-center text-gray-800 mb-6">Book a Car</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {/* Select Your Car */}
            <FormGroup className="w-full">
              <label htmlFor="selectCar" className="font-semibold mb-2 block text-gray-700">Select Your Car</label>
              <select
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                value={selectedCar?.name || ""}
                onChange={handleCarChange}
                id="selectCar"
                name="selectCar"
                aria-label="Select Your Car"
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
              {errors.selectedCar && <p className="text-red-500 text-sm mt-1">{errors.selectedCar}</p>}
            </FormGroup>

            {/* Pick-Up Location */}
            <FormGroup className="w-full">
              <label htmlFor="pickupLocation" className="font-semibold mb-2 block text-gray-700">Pick-Up Location</label>
              <select
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                id="pickupLocation"
                name="pickupLocation"
                aria-label="Pick-Up Location"
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
              {errors.pickupLocation && <p className="text-red-500 text-sm mt-1">{errors.pickupLocation}</p>}
            </FormGroup>

            {/* Drop-Off Location */}
            <FormGroup className="w-full">
              <label htmlFor="dropoffLocation" className="font-semibold mb-2 block text-gray-700">Drop-Off Location</label>
              <select
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                id="dropoffLocation"
                name="dropoffLocation"
                aria-label="Drop-Off Location"
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
              {errors.dropoffLocation && <p className="text-red-500 text-sm mt-1">{errors.dropoffLocation}</p>}
            </FormGroup>

            {/* Pick-Up Date */}
            <FormGroup className="w-full">
              <label htmlFor="pickupDate" className="font-semibold mb-2 block text-gray-700">Pick-Up Date</label>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                type="date"
                id="pickupDate"
                name="pickupDate"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                aria-label="Pick-Up Date"
              />
              {errors.pickupDate && <p className="text-red-500 text-sm mt-1">{errors.pickupDate}</p>}
            </FormGroup>

            {/* Drop-Off Date */}
            <FormGroup className="w-full">
              <label htmlFor="dropoffDate" className="font-semibold mb-2 block text-gray-700">Drop-Off Date</label>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                type="date"
                id="dropoffDate"
                name="dropoffDate"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                aria-label="Drop-Off Date"
              />
              {errors.dropoffDate && <p className="text-red-500 text-sm mt-1">{errors.dropoffDate}</p>}
            </FormGroup>

            <FormGroup className="w-full lg:col-span-3 md:col-span-2">
              <button
                type="submit"
                className="bg-[#007bff]
                 hover:bg-blue-700 transition-all 
                 duration-200 text-white px-6 py-3 w-full sm:w-1/2 mx-auto 
                 rounded-lg text-center text-lg font-semibold mt-4"
              >
                Book Now
              </button>
            </FormGroup>
          </div>
          {errors.dateRange && <p className="text-red-500 text-sm mt-4 text-center">{errors.dateRange}</p>}
          {confirmationMessage && <p className="text-green-500 text-center mt-4">{confirmationMessage}</p>}
        </form>
      </section>

      {/* Second Form Modal */}
      <AnimatePresence>
        {showSecondForm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm pt-20"
            onClick={closeModal}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formVariants}
          >
            <motion.section
              ref={secondFormRef}
              className="relative bg-white shadow-xl rounded-2xl max-w-4xl mx-auto p-8 overflow-y-auto max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black transition duration-200"
                onClick={closeModal}
              >
                &times;
              </button>
              <form onSubmit={handleSecondFormSubmit} className="space-y-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Complete Reservation</h1>
                <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">{selectedCar.name}</h2>
                <img
                  src={selectedCar.image}
                  alt={selectedCar.name}
                  className="w-full max-h-64 object-contain mb-6 rounded-lg"
                />
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6">
                  {Object.keys(reservationDetails).map((key) => (
                    <FormGroup key={key} className="w-full">
                      <label htmlFor={key} className="font-semibold mb-2 block text-gray-700">{formatHeading(key)}</label>
                      <input
                        className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        type={key === "email" ? "email" : key === "phoneNumber" ? "tel" : "text"}
                        name={key}
                        value={reservationDetails[key]}
                        onChange={handleSecondFormChange}
                        id={key}
                        aria-label={formatHeading(key)}
                      />
                      {errors[key] && <p className="text-red-500 text-sm mt-1">{errors[key]}</p>}
                    </FormGroup>
                  ))}
                </div>
                <FormGroup className="w-full">
                  <button
                    type="submit"
                    className="bg-[#007bff] hover:bg-blue-700 
                    transition-all duration-200 text-white px-6 
                    py-3 w-full sm:w-1/2 mx-auto rounded-lg text-center text-lg font-semibold mt-6"
                  >
                    Confirm Reservation
                  </button>
                </FormGroup>
              </form>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Form;
