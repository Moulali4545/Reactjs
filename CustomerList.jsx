import { Component } from "react";
import logo from './Images/logo.jpg';
import flower from './Images/flower.jpg'
import './mnm.css'
class Customer extends Component
{
    state={
        title:'Welcome to Hyderabad',
        color:'Orange'
    }
    render(){
        return(
            <div><h1 className="text-danger bg-light">CustomerList</h1>
            <img src={logo} alt=''width="500px" height="" id='mn' /> <nbsp /> 
            <img src={flower} alt="" width='500px' id='mnm'/>
            <h2>{this.state.title}</h2>
            <h2>{this.state.color}</h2></div>
            
        )
    }
}
export default Customer;