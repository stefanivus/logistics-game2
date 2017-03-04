
/* Vehicle ID:

     0         1       2        3
   bicycle   truck   train    plane
*/
const defaultVehicle = {
  id: 999,
  name: "Truck",
  mpg: 4,
  vehicleId: 1
}
export const addVehicle = (vehicle = defaultVehicle) => {
    return {
      type: "ADD_VEHICLE",
      id: vehicle.id,
      vehicle
    }
}

// export const removeVehicle = (vehicle) => {
//     return {
//       type: "REMOVE_VEHICLE",
//       id: vehicle.id,
//       vehicle
//     }
// }
