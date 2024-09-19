// Import images directly
import modelS from 'src/assets/cars/model_S.png';
import model3 from 'src/assets/cars/tesla_model3.png';
import cybertruck from 'src/assets/cars/cybertruck.png';
import modelX from 'src/assets/cars/model_X.png';
import nio from 'src/assets/cars/nio.png';
import modelY from 'src/assets/cars/tesla_modely.png';

export const carModels = [
  {
    name: "Model S",
    image: modelS, // Use imported image
    batteryChargeTime: "Battery charge time in about 31 min. Battery charged from 10% to 80% at a public DC fast charger.",
    range: "EPA estimated range: 285 mi",
    acceleration: "0-60 mph in 5.4 sec with boost engaged.",
  },
  {
    name: "Model 3",
    image: model3, // Use imported image
    batteryChargeTime: "Battery charge time in about 30 min. Battery charged from 10% to 80% at a public DC fast charger.",
    range: "EPA estimated range: 315 mi",
    acceleration: "0-60 mph in 3.1 sec with boost engaged.",
  },
  {
    name: "CyberTruck",
    image: cybertruck, // Use imported image
    batteryChargeTime: "Battery charge time in about 34 min. Battery charged from 10% to 80% at a public DC fast charger.",
    range: "EPA estimated range: 330 mi",
    acceleration: "0-60 mph in 4.2 sec with boost engaged.",
  },
  {
    name: "Model X",
    image: modelX, // Use imported image
    batteryChargeTime: "Battery charge time in about 35 min. Battery charged from 10% to 80% at a public DC fast charger.",
    range: "EPA estimated range: 320 mi",
    acceleration: "0-60 mph in 3.5 sec with boost engaged.",
  },
  {
    name: "NIO ET7",
    image: nio, // Use imported image
    batteryChargeTime: "Battery charge time in about 35 min. Battery charged from 10% to 80% at a public DC fast charger.",
    range: "EPA estimated range: 320 mi",
    acceleration: "0-60 mph in 3.5 sec with boost engaged.",
  },
  {
    name: "Model Y",
    image: modelY, // Use imported image
    batteryChargeTime: "Battery charge time in about 35 min. Battery charged from 10% to 80% at a public DC fast charger.",
    range: "EPA estimated range: 320 mi",
    acceleration: "0-60 mph in 3.5 sec with boost engaged.",
  },
];
