import Customer from "./CustomerList";
import { Component } from "react";

class ShoppingCart extends Component{
    
    render(){
        return(
            <div>
                
                <h1 className="text-danger bg-light"  style={{color:'blue'}} >Shopping Cart {10+20}</h1>
                <Customer name={this.props.title}/>
            </div>
        )
    }
}
export default ShoppingCart;