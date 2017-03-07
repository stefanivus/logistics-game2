import React from 'react'
import cx from 'classnames'
import s from './MenuItem.css'

/*
  Shows Item Type - employee, vehicle, or client
  Vehicle - input location to delivery to

  NOTE
    * There are 3 extra rendering methods within SideCardContainer
      but they're only to render views
*/
class SideCardContainer extends React.Component {

  renderCardContainer() {
    return (props) => {
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
      );
    }
  }

  renderVehicleItem() {
    return (props) => {
      return (
        <div className={s.content}>
          <div>mpg: {props.mpg} moves per gallon</div>
          <div>speed: {props.speed} moves per turn</div>
          <div>capacity: {props.capacity} kg</div>
        </div>
      );
    }
  }

  renderDefaultItem(happiness, id) {
    return (props) => {
      return (
        <div className={s.content}>
          <div>id: {props.id}</div>
          <div>happiness: {props.happiness}</div>
        </div>
      );
    }
  }

  getVehicleIconClassName(vehicleId) {
    /*
      Vehicle Id:
          0  =>  Bicycle
          1  =>  Truck
          2  =>  Train
          3  =>  Plane
    */
    // Vehicle Font Awesome Icon
    if      (vehicleId === 0){ return "fa-bicycle"; }
    else if (vehicleId === 1){ return "fa-truck";   }
    else if (vehicleId === 2){ return "fa-train";   }
    else if (vehicleId === 3){ return "fa-plane";   }

    return "";
  }

  render() {
    const CardContainer = this.renderCardContainer();

    if (this.props.type === 'vehicles') {
      let iconClassName = this.getVehicleIconClassName(this.props.vehicleId);
      const VehicleItem = this.renderVehicleItem();

      return (
        <CardContainer name={this.props.name} iconClassName={iconClassName}>
          <VehicleItem
            mpg={this.props.mpg}
            speed={this.props.speed}
            capacity={this.props.capacity} />
        </CardContainer>
      );

    } else {
      const DefaultItem = this.renderDefaultItem();

      return (
        <CardContainer name={this.props.name} iconClassName="">
          <DefaultItem
            id={this.props.id}
            happiness={this.props.happiness} />
        </CardContainer>
      );
    }
  }
}

// const CardContainer = (props) => {
//   return (
//     <div className={s.container}>
//
//       {/* Title and Icon */}
//       <div className={cx(s.row, s.title)}>
//         <i className={cx("fa", props.iconClassName, s.icon)}></i>
//
//         <div className={s.name}>
//           {props.name}
//         </div>
//       </div>
//
//       <hr className={s.underlineTitle} />
//
//
//       <div className={s.row}>
//         {props.children}
//       </div>
//
//     </div>
//   )
// }

export default SideCardContainer;
