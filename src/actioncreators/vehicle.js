import vehicleDefaults from '../gameDefaults/vehicle-defaults.json';

export function addVehicle(newVehicle /* = vehicleDefaults.bicycle */) {
  if (newVehicle === null || newVehicle === undefined)
    return new Error("Cannot add null vehicle.");

  return {
    type: "ADD_VEHICLE",
    vehicle: newVehicle
  }
}

export function removeVehicle(vehicle) {
  if (   vehicle === null ||    vehicle === undefined ||
      vehicle.id === null || vehicle.id === undefined)
    return new Error("Cannot remove null vehicle or vehicle without an id.");

    return {
      type: "REMOVE_VEHICLE",
      id: vehicle.id
    }
}
