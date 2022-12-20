import React, { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./Home";
import DashBoard from "./DashBoard";
import CustomerList from "./CustomerList";
import ShoppingCart from "./ShoppingCart";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Main from "./Main_content";
import Technologies from "./Technologies";
import Angular from "./Angular";
import Reactts from "./Reactts";
import Hook from "./hook";

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
                <Route path="/SignIn" exact element={<SignIn/>}></Route>
                <Route path="/SignUp" exact element={<SignUp/>}></Route>
                <Route path="/Technologies" exact element={<Technologies/>}>
                    <Route path="Angular" exact element={<Angular/>}></Route>
                    <Route path="Reactts" exact element={<Reactts/>}></Route>
                </Route>


            </Route>
        </Routes>
        <Hook/>
        
        <Main/>
        <Footer/>
        </BrowserRouter>
        
        )
    }
}
export default App;