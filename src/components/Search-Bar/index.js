import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function searchBar() {
  return (
    <Navbar className='search-main' expand="lg">
      <Container className='row justify-content-start search-container' fluid>
        <div className='col-9'>
        </div>
        <div className='col-3'>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
      </Container>
    </Navbar>
  )
}

export default searchBar;