import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, {useState} from "react";
import {Alert} from "react-bootstrap";


function OffcanvasExample() {

    const [isHidden, setHidden] = useState(true);

    const mysql = require('mysql')
    const db = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database:"react"
    })

    module.exports = db;


    db.query("SELECT * FROM users", (err,result)=>{
        if(err) {
            console.log(err)
        }
        console.log(result)
    });


    return (
        <>
            <Alert hidden={isHidden} key="info" variant="info">Discord Username
                "knerio"</Alert>

            <div>
                <Navbar key="sm" expand="sm" className="width mb-2 mt-2 justify-content-evenly">
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm"/>

                    <Navbar.Brand className="padding-left" href="/">App</Navbar.Brand>

                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>

                        </Offcanvas.Header>
                        <Offcanvas.Body className= "nav-body justify-content-evenly height h-100 d-flex align-items-center justify-content-center ">
                            <Nav className="justify-content-evenly navbar-bg height">
                                <Nav.Link className = " height d-flex align-items-center justify-content-center " href="/">Home</Nav.Link>
                                <Nav.Link className = " height d-flex align-items-center justify-content-center   " onClick={() => {
                                    setHidden(!isHidden);
                                    setTimeout(() => {
                                        setHidden(true);
                                    }, "7000");
                                }}>Discord</Nav.Link>

                                <NavDropdown  className= "justify-content-evenly d-flex align-items-center justify-content-center remove-spacing height"
                                    title="Games"
                                    id={`offcanvasNavbarDropdown-expand-sm height`}
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
