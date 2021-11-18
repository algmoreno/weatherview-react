import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Auth from '../utils/auth';

const SignUpForm = () => {
  return (
    <Form >
      <Form.Group className="mb-3">
      <Form.Label>First Name</Form.Label>
        <Form.Control placeholder=""
          name="firstname"
          type="firstname"
          id="firstname" />
        <Form.Label>Last Name</Form.Label>
        <Form.Control placeholder=""
          name="lastname"
          type="lastname"
          id="lastname" />
        <Form.Label>Email Address</Form.Label>
        <Form.Control placeholder="example123@email.com"
          name="email"
          type="email"
          id="email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder="******"
          name="password"
          type="password"
          id="pwd" />
      </Form.Group>

      <Button href='/' className='login-btn' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default SignUpForm;