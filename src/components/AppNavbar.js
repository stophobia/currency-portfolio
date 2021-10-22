import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../images/logo.svg';
import { CgProfile } from 'react-icons/cg';
import Image from 'react-bootstrap/Image';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { logout } from '../store/Actions/AuthAcrtions';

export const AppNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.user.name);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Navbar color="dark" dark expand="md" className="mb-5">
        <NavbarBrand href="/" className="mr-auto">
          <img src={logo} alt="fdf" width={80} height={50} />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse
          className="justify-content-end me-5"
          style={{ color: 'red' }}
          isOpen={!collapsed}
          navbar
        >
          <Nav className="" navbar>
            <NavItem className="d-flex align-items-center justify-content-center">
              <CgProfile color="white" />
              <NavLink href="#">{`welcome ${userName}`}</NavLink>{' '}
            </NavItem>{' '}
            <NavItem>
              <NavLink onClick={handleLogout}>Logout</NavLink>{' '}
            </NavItem>{' '}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
