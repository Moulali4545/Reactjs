import { Component } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Signup extends Component
{
    render(){
        return(
            <div><h1 className="text-danger bg-light">SignUp</h1>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" /></Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Enter Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Mobile Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter New Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></div>
        )
    }

}
export default Signup