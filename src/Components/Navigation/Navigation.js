import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
const Navigation = () => {
    const style = {
        margin: '5px',
        textDecoration: 'none',
        fontSize: '20px',
        color: 'black'
     }
    return (
        <>
            
            <Container fluid>
            <Row >
                <Col lg="10 mx-auto">
                    <Navbar  variant="light" expand="lg">
                        <Container fluid >
                            <Navbar.Brand href="#home">
                                <img
                                    alt=""
                                    src={logo}
                                    width="150px"

                                    className=" align-top"
                                />

                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="ms-auto my-2 my-lg-0"
                                    style={{ maxHeight: '180px' }}
                                    navbarScroll
                                >
                                        <NavLink activeStyle={{color:'green', fontWeight:'bold'}} style={style} to="/home">Home</NavLink>
                                        <NavLink activeStyle={{color:'green', fontWeight:'bold'}} style={style} to="/service">Services</NavLink>
                                        <NavLink activeStyle={{color:'green', fontWeight:'bold'}} style={style} to="/about">About</NavLink>
                                        <NavLink activeStyle={{color:'green', fontWeight:'bold'}} style={style} to="/contact">Contact</NavLink>


                                </Nav>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
        </Row>
        </Container>
       </>
    );
};

export default Navigation;