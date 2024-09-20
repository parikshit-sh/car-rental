// Import images directly
import modelS from '/src/assets/cars/model_S.png';
import model3 from '/src/assets/cars/tesla_model3.png';
import cybertruck from '/src/assets/cars/cybertruck.png';
import modelX from '/src/assets/cars/model_X.png';
import nio from '/src/assets/cars/nio.png';
import modelY from '/src/assets/cars/tesla_modely.png';

export const carModels = [
  {
    name: "Model S",
    image: modelS, 
    batteryChargeTime: "Battery charge time in about 30 minutes at a Supercharger station (10% to 80% at a public DC fast charger).",
    range: "EPA estimated range: 396 mi", 
    acceleration: "0-60 mph in 3.1 sec", 
    dailyCharge: "$150/day", 
    rating: 4.8 
  },
  {
    name: "Model 3",
    image: model3,
    batteryChargeTime: "Battery charge time in about 25 min. Battery charged from 10% to 80% at a public DC fast charger.",
    range: "EPA estimated range: 358 mi",
    acceleration: "0-60 mph in 3.1 sec.",
    dailyCharge: "$130/day",
    rating: 4.7,
  },
  {
    name: "CyberTruck",
    image: cybertruck,
    batteryChargeTime: "Battery charge time in about 30 min. Battery charged from 10% to 80% at a public DC fast charger.",
    range: "Estimated range: 500+ mi",
    acceleration: "0-60 mph in 2.9 sec.",
    dailyCharge: "$200/day",
    rating: 4.6,
  },
  {
    name: "Model X",
    image: modelX,
    batteryChargeTime: "Battery charge time in about 30 min. Battery charged from 10% to 80% at a public DC fast charger.",
    range: "EPA estimated range: 348 mi",
    acceleration: "0-60 mph in 2.5 sec.",
    dailyCharge: "$180/day",
    rating: 4.8,
  },
  {
    name: "NIO ET7",
    image: nio,
    batteryChargeTime: "Battery charge time in about 31 min. Battery charged from 10% to 80% at a public DC fast charger.",
    range: "Estimated range: 360 mi",
    acceleration: "0-60 mph in 3.8 sec.",
    dailyCharge: "$160/day",
    rating: 4.4,
  },
  {
    name: "Model Y",
    image: modelY,
    batteryChargeTime: "Battery charge time in about 27 min. Battery charged from 10% to 80% at a public DC fast charger.",
    range: "EPA estimated range: 330 mi",
    acceleration: "0-60 mph in 4.8 sec.",
    dailyCharge: "$140/day",
    rating: 4.3,
  },
  
];
export const locations = [
  "New York City",
  "Chicago",
  "Miami",
  "Los Angeles"
];