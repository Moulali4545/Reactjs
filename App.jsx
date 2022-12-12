import React, { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./Home";
import DashBoard from "./DashBoard";
import CustomerList from "./CustomerList";
import ShoppingCart from "./ShoppingCart";
class App extends Component
{
    render(){
        return(
            
         <BrowserRouter>
          <h1 className="text-danger text-center bg-info">LEVELUP</h1>
         <Routes>
            <Route path="/" element={<NavBar/>}>
                <Route path="/Home" exact element={<Home/>}></Route>
                <Route path="/DashBoard" exact element={<DashBoard/>}></Route>
                <Route path="/CustomerList" exact element={<CustomerList/>}></Route>
                <Route path="/ShoppingCart" exact element={<ShoppingCart/>}></Route>
            </Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
        
        )
    }
}
export default App;