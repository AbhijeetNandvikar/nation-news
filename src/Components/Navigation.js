import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { NavLink as NavL, } from 'react-router-dom';



const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">News Nation</NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto " navbar>
            <NavItem className="navlink">
              <NavL className="text-white" to={'/'} exact>Home</NavL>
            </NavItem>
            <NavItem className="navlink">
              <NavL className="text-white" to={'/about'} exact>About</NavL>
            </NavItem>
            <NavItem className="navlink">
              <NavL className="text-white" to={'/contact'} exact>Contact</NavL>
            </NavItem>

          </Nav>
        </Collapse>

      </Navbar>
    </div>
  );
}
export default Navigation;