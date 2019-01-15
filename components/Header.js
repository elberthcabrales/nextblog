import React from 'react';
import ActiveLink from './ActiveLink';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem} from 'reactstrap';

  
const BsNavLink = (props) => {
  const { route, title } = props;
  const className = props.className || "";

  return (
    <ActiveLink activeClassName="active" route={route}>
      <a className={`nav-link port-navbar-link ${className}`}> {title} </a>
    </ActiveLink>
  )
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {
    const { className } = this.props;
    const { isOpen } = this.state;

    const menuOpenClass = isOpen ? 'menu-open' : 'menu-close';

    return (
      <div>
        <Navbar className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`} color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">elberth cabrales</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/" title="Blog" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/about" title="About" />
              </NavItem>       
              <NavItem className="port-navbar-item">
                <BsNavLink route="/portfolio" title="portfolio" />
              </NavItem>  
              <NavItem className="port-navbar-item">
                <BsNavLink route="/contact" title="Contact" />
              </NavItem>   
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}




