import * as React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export default class NavMenu extends React.PureComponent {
    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3">
                    <Container>
                        <Navbar.Brand tag={Link} href="/">Pharmacy App</Navbar.Brand>
                        <Navbar.Toggle className="mr-2"/>
                        <Navbar.Collapse className="d-sm-inline-flex flex-sm-row-reverse">
                            <Nav className="navbar-nav flex-grow">
                                <Nav.Link tag={Link} className="text-dark" href="/">Home</Nav.Link>
                                <Nav.Link tag={Link} className="text-dark" href="/about">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }   
}
