import { FormGroup } from "@mui/material";
import "../index.css";
import { useState } from "react"; // Use state to handle selected car details
import { carModels, locations } from "../carModel";


const Form = () => {
    const [selectedCar, setSelectedCar] = useState(carModels["0"]); // To store the selected car details
    const [pickupLocation, setPickupLocation] = useState(0);
    const [dropoffLocation, setDropoffLocation] = useState(0);
    const handleCarChange = (e) => {
        const carName = e.target.value;
        const car = carModels.find((model) => model.name === carName); // Find the selected car details
        setSelectedCar(car);
      };
    
  return (
    <>
     <section className="flex justify-center pt-32 items-center">
        <form className="bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-2xl font-bold p-4">Book a Car</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {/* Select Your Car */}
            <FormGroup className="w-full p-4">
              <h1 className="font-semibold p-2">Select Your Car</h1>
              <select
                className="w-full px-4 py-2 text-gray-600"
                value={selectedCar?.name || ""}
                onChange={handleCarChange}
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
              <h1 className="font-semibold p-2">Pick-Up</h1>
              <input className="text-gray-600" type="date" />
            </FormGroup>

            {/* Drop-Off Date */}
            <FormGroup className="w-full p-4">
              <h1 className="font-semibold p-2">Drop-Off</h1>
              <input className="text-gray-600" type="date" />
            </FormGroup>
            <FormGroup className="w-full p-8">
              <button
                href="#book_car"
                className="bg-[#0069D2] text-white px-2 py-4 w-full rounded-full text-center"
              >
                Book Now
              </button>
            </FormGroup>
          </div>
        </form>
      </section></>
  )
}

export default Form