
/* Vehicle ID:

     0         1       2        3
   bicycle   truck   train    plane
*/
const defaultVehicle = {
  name: "Truck",
  mpg: 4,
  vehicleId: 1
}
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
