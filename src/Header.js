import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, {useState} from "react";
import {Alert} from "react-bootstrap";

function OffcanvasExample() {
    const [isHidden, setHidden] = useState(true);
    return (
        <>
            <Alert hidden={isHidden} key="info" variant="info">Discord Username
                "knerio"</Alert>

            <div>
                <Navbar key="sm" expand="sm" className="mb-2 mt-2 justify-content-evenly">
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm"/>

                    <Navbar.Brand className="padding-left" href="/">App</Navbar.Brand>

                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>

                        </Offcanvas.Header>
                        <Offcanvas.Body className="nav-body justify-content-evenly">
                            <Nav className="justify-content-evenly navbar-bg">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link onClick={() => {
                                    setHidden(!isHidden);
                                    setTimeout(() => {
                                        setHidden(true);
                                    }, "7000");
                                }}>Discord</Nav.Link>

                                <NavDropdown
                                    title="Games"
                                    id={`offcanvasNavbarDropdown-expand-sm`}
                                >
                                    <NavDropdown.Item href="/calculator">Taschenrechner</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="/soon">
                                        Coming Soon...
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar>
            </div>
        </>
    );
}

export default OffcanvasExample;
