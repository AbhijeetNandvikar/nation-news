import React, { Component , useState } from 'react' ;
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

  import { BrowserRouter as Router, Link, NavLink as NavL, Redirect, Prompt} from 'react-router-dom';

  
  
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
              <NavItem>
                <NavLink>
                  <NavL className="text-white" to={'/'} exact>Home</NavL>
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink>
                  <NavL className="text-white" to={'/about'} exact>About</NavL>
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink>
                  <NavL className="text-white" to={'/contact'} exact>Contact</NavL>
                </NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>

        </Navbar>
      </div>
    );
  }
export default Navigation ;