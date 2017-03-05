
/* Vehicle ID:

     0         1       2        3
   bicycle   truck   train    plane
*/
const defaultVehicle = {
  name: "Truck",
  vehicleId: 1,
  mpg: 4,
  capacity: 10,
  speed: 4
};
export function addVehicle(vehicle = defaultVehicle) {
  return {
    type: "ADD_VEHICLE",
    vehicle
  }
}

export function removeVehicle(vehicle = defaultVehicle) {
  return {
    type: "REMOVE_VEHICLE",
    vehicle
  }
}
