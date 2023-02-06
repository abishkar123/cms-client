import React from 'react'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

export const RegisterPage = () => {
  return (
    <div>
        <Header/>
    
          <div className="main login-page p-5"> This is Register Page
          <Container className="m-3">
          <Form className=' border p-4 rounded shadow-lg'>
            <h3> Sign Up New Admin user</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
       
          </Container>
      
       
       
</div>
<Footer/>
    </div>
  )
}
