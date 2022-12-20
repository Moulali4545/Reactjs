import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class SignIn extends Component
{
  constructor(props){
    super(props);
    this.state={color:'Red',bgcolor:"Green" }
  }
  ChangeColor=()=>
  {
    this.setState({color:"blue"});
  }
  ChangeRed=()=>{
    this.setState({color:'Red'})
  }
    render(){
        return(
            <div>
              <h1 className="text-danger">{this.state.color}</h1>
              <Second color={this.state.color}/>

              <button type="button" className="btn btn-info" onClick={this.ChangeColor}>change blue</button> <br /> <br />
              <button type="button" className="btn btn-danger" onClick={this.ChangeRed}>change red</button>
              
              <br /><br /><br /><br />
              
              <h1 className="text-danger bg-light">SignIn</h1> <br />
            <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" /></Form.Group>
        
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
    </Form></div>
        )
    }
}
class Second extends Component{
  render(){
    return(
      <div><h1 className="text-info">Second class color :{this.props.color}</h1></div>
    )
  }
}




export default SignIn;