import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (<div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Memestream</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/add">Add a meme</NavLink>
          </NavItem>
          
          
          </Nav>
          <NavbarText>by Gaurav Tewari</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
