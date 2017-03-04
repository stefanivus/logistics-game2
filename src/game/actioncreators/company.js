
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
  return (dispatch, getState) => {
    const { company } = getState();

    var idx = findVehicle(company.vehicles, vehicle.id);
    if (idx !== -1) {
      dispatch()
    }
  }

  return {
    type: "ADD_VEHICLE",
    id: vehicle.id,
    vehicle
  }
}

function findVehicle(arr = [], id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id)
      return i;
  }

  return -1;
}
