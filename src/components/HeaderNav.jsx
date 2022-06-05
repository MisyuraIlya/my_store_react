import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, DropdownToggle, NavbarText, Collapse, UncontrolledDropdown,NavbarToggler, Nav,DropdownItem,DropdownMenu  } from 'reactstrap';
const HeaderNav = () => {
    return (
        <div>
        <Navbar
            color="dark"
            dark
            expand="md"
        >
            <NavbarBrand href="/">
            My store
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
            <Nav
                className="me-auto"
                navbar
            >
                <NavItem style={{paddingTop:'8px'}}>
                    <Link to="/" style={{ textDecoration: 'none', paddingRight: '20px' , color:'#ced4da'}}>Home</Link> 
                </NavItem>
                <NavItem style={{paddingTop:'8px'}}>
                    <Link to="/categories" style={{ textDecoration: 'none', paddingRight: '20px', color:'#ced4da'}}>Categories</Link> 
                </NavItem>
                
                <NavItem style={{paddingTop:'8px'}}>
                    <Link to="manufacturers" style={{ textDecoration: 'none', paddingRight: '20px', color:'#ced4da' }}>Manufacturers</Link>
                </NavItem>
                <UncontrolledDropdown
                inNavbar
                nav
                >
                <DropdownToggle
                    caret
                    nav
                >
                    Options
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                    Option 1
                    </DropdownItem>
                    <DropdownItem>
                    Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    Reset
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            <NavbarText>
                Simple Text
            </NavbarText>
            </Collapse>
        </Navbar>
        </div>
    );
};

export default HeaderNav;