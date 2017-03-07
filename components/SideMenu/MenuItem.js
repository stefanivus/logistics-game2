import React from 'react'
import cx from 'classnames'
import s from './MenuItem.css'

/*
  Shows Item Type - employee, vehicle, or client
  Vehicle - input location to delivery to

  NOTE
    * There are 3 extra view rendering components below
      (they only render views)
*/
class SideMenuItem extends React.Component {
  render() {
    var iconClassName = "";

    if (this.props.type === 'vehicles') {
      /*
        Vehicle Id:
            0  =>  Bicycle
            1  =>  Truck
            2  =>  Train
            3  =>  Plane
      */
      // Vehicle Font Awesome Icon
      if      (this.props.vehicleId === 0){ iconClassName = "fa-bicycle"; }
      else if (this.props.vehicleId === 1){ iconClassName = "fa-truck";   }
      else if (this.props.vehicleId === 2){ iconClassName = "fa-train";   }
      else if (this.props.vehicleId === 3){ iconClassName = "fa-plane";   }

      return (
        <MenuItem name={this.props.name} iconClassName={iconClassName}>
          <VehicleItem
            mpg={this.props.mpg}
            speed={this.props.speed}
            capacity={this.props.capacity} />
        </MenuItem>
      );
    }

    else if (this.props.type === 'employees') {
      return (
        <MenuItem name={this.props.name} iconClassName="">
          <DefaultItem
            happiness={this.props.happiness}
            id={this.props.id} />
        </MenuItem>
      );
    }
    else if (this.props.type === 'clients') {
      return (
        <MenuItem name={this.props.name} iconClassName="">
          <DefaultItem
            happiness={this.props.happiness}
            id={this.props.id} />
        </MenuItem>
      );
    }
  }
}

const MenuItem = (props) => {
  return (
    <div className={s.container}>

      {/* Title and Icon */}
      <div className={cx(s.row, s.title)}>
        <i className={cx("fa", props.iconClassName, s.icon)}></i>

        <div className={s.name}>
          {props.name}
        </div>
      </div>
      
      <hr className={s.underlineTitle} />


      <div className={s.row}>
        {props.children}
      </div>

    </div>
  )
}

const VehicleItem = (props) => {
  return (
    <div className={s.content}>
      <div>mpg: {props.mpg} moves per gallon</div>
      <div>speed: {props.speed} moves per turn</div>
      <div>capacity: {props.capacity} kg</div>
    </div>
  );
}

const DefaultItem = (props) => {
  return (
    <div className={s.content}>
      <div>happiness: {props.happiness}</div>
      <div>id: {props.id}</div>
    </div>
  );
}

export default SideMenuItem;
