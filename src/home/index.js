import React, { PropTypes } from 'react';

// Navbar Components
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';

// Map Components
import { Table } from 'reactstrap';

import s from './styles.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" inverse light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>







        {/* Game Board */}
        <Map gridSize={50} />
      </div>
    );
  }
}

class Map extends React.Component {

  static defaultProps = {
    gridSize: 50
  }

  constructor(props) {
    super(props);
    const { gridSize } = this.props;

    this.state = {
      gridSize,
    }

    this.getTiles();
  }

  getTiles() {
    this.tiles = [];
    let totalNumTiles = this.state.gridSize * this.state.gridSize;
    var currTile;

    for (let i = 0; i < totalNumTiles; i++) {
      currTile = (<Tile number={i} key={"tile"+i} />);
      this.tiles.push(currTile);
    }
  }

  render() {
    return (
      <Table>
        <tbody>
          {this.tiles.map((CurrTile, idx) => {
            return CurrTile;
          })}
        </tbody>
      </Table>
    );
  }
}

class Tile extends React.Component {
  render() {
    return (
      <td>
        {this.props.number}
      </td>
    );
  }
}

export default HomePage;
