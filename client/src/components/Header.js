import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header(){
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt="Quill Pen"
                src="https://res.cloudinary.com/deglaze/image/upload/v1625606705/quill-pen-11549961882u4etvptqke-removebg-preview_elm9p9.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            Tall Tales
            </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;