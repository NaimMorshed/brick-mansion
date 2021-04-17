import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import logo from '../../../images/logo/logo.jpg';
import './Header.css';
import Avatar from '@material-ui/core/Avatar';

const Header = () => {

    const [authentication] = useContext(UserContext);
    const history = useHistory();

    return (
        <Navbar className="navbar-custom" collapseOnSelect expand="lg" fixed="top">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="#home">
                <img className="logo-rounded" src={logo} alt="" />
            </Navbar.Brand>

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="font-weight-bold" onClick={() => history.push('/')}>Home</Nav.Link>
                    <Nav.Link onClick={() => history.push('/explore')}>Explore</Nav.Link>
                    <Nav.Link>About us</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link eventKey={2}>
                        {
                            authentication.loggedIn
                                ?
                                <div className="d-flex">
                                    <Button onClick={() => history.push('/system')} variant="outline-secondary">Admin</Button>
                                    <Avatar onClick={() => history.push('/profile')}className="ml-2" alt="user" src={authentication.photoUrl} />
                                </div>
                                :
                                <Button onClick={() => history.push('/login')} variant="outline-secondary">Login</Button>
                        }
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;