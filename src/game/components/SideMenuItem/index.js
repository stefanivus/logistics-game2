import React from 'react'
import cx from 'classnames'
import s from './styles.css'

/*
  Shows Item Type - employee, vehicle, or client
  Vehicle - input location to delivery to


  Employee:
    1. Filler Icon of Person
    2. Name

  Vehicle:
    1. Icon of type of vehicle
    2. MPG
    3.

  Client:
    1. Icon?
    2. Happiness level
    3. Name
    4. Deliveries button to see their delivery schedule
*/
class SideMenuItem extends React.Component {
  render() {

    if (this.props.type === 'vehicles') {
      return (<VehicleItem {...this.props} />);
    }

    else if (this.props.type === 'employees') {

    }
    else if (this.props.type === 'clients') {

    }
  }
}

class VehicleItem extends React.Component {
  /*
    Vehicle Id:
        0  =>  Bicycle
        1  =>  Truck
        2  =>  Train
        3  =>  Plane
  */
  render() {
    var iconClassName = "";


    if (this.props.vehicleId === 0) {
      iconClassName = "fa-bicycle";
    }
    else if (this.props.vehicleId === 1) {
      iconClassName = "fa-truck";
    }
    else if (this.props.vehicleId === 2) {
      iconClassName = "fa-train";
    }
    else if (this.props.vehicleId === 3) {
      iconClassName = "fa-plane";
    }

    return (
      <div className={s.container}>
        {/* Row */}
        <div className={s.row}>
          <i className={cx("fa", iconClassName, s.icon)}></i>

          <div className={s.name}>
            {this.props.name}
          </div>
        </div>

        {/* Row */}
        <div className={s.row}>
          <div className={s.milesPerGallon}>
            mpg: {this.props.mpg}
          </div>
        </div>
      </div>
    );
  }
}


// class EmployeeItem extends eact.Component {
//   render() {
//     return ();
//   }
// }
// class ClientItem extends eact.Component {
//   render() {
//     return ();
//   }
// }

export default SideMenuItem;
