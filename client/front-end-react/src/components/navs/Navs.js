import React from "react";
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import "./Navs.css";
import logo from '../../assets/logo.png'

const Navs = () => {
    return (
        <Navbar  expand="lg">
            <Container>
                <Navbar.Brand >
                    <img src={logo} title="logo"/>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <  Nav.Link className="home" href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#profile">Profile</Nav.Link>
                        <Nav.Link href="#order">Order</Nav.Link>
                        <NavDropdown  title="Category" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Action 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Action 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Type here.."
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>

    <Button id="lgn" href="#">Login</Button>

      <Button id="snp" href="#">Signup</Button>
      
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navs;